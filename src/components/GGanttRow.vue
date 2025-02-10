<template>
  <div>
    <div
      v-for="barsList in barsToRender"
      :key="barsList[0].ganttBarConfig.id"
      :style="rowStyle"
      class="g-gantt-row"
      @dragleave="isHovering = false"
      @drop="onDrop($event)"
      @mouseleave="isHovering = false"
      @mouseover="isHovering = true"
      @dragover.prevent="isHovering = true"
    >
      <div
        v-if="!isBlank(label) && !labelColumnTitle"
        :style="{ background: colors.primary, color: colors.text }"
        class="g-gantt-row-label"
      >
        <slot name="label">
          {{ label }}
        </slot>
      </div>
      <div ref="barContainer" class="g-gantt-row-bars-container" v-bind="$attrs">
        <transition-group name="bar-transition sys" tag="div" class="transition-group">
          <g-gantt-bar v-for="bar in barsList" :key="bar.ganttBarConfig.id" :bar="bar">
            <slot :bar="bar" name="bar-label" />
          </g-gantt-bar>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  toRefs,
  computed,
  type StyleValue,
  provide,
  onMounted,
  useTemplateRef,
  type ShallowRef
} from "vue"

import dayjs from "dayjs"
import useTimePositionMapping from "../composables/useTimePositionMapping.js"
import provideConfig from "../provider/provideConfig.js"
import type { GanttBarObject } from "../types"
import { BAR_CONTAINER_KEY } from "../provider/symbols"
import GGanttBar from "./GGanttBar.vue"

const props = defineProps<{
  label: string
  bars: GanttBarObject[]
  overlaps?: GanttBarObject[]
  highlightOnHover?: boolean
}>()

const barsToRender = ref<GanttBarObject[][]>([])

const emit = defineEmits<{ (e: "drop", value: { e: MouseEvent; datetime: string | Date }): void }>()
const { rowHeight, colors, labelColumnTitle } = provideConfig()
const { highlightOnHover } = toRefs(props)
const isHovering = ref(false)

const rowStyle = computed(() => {
  return {
    height: `${rowHeight.value}px`,
    background: highlightOnHover?.value && isHovering.value ? colors.value.hoverHighlight : null
  } as StyleValue
})

const { mapPositionToTime } = useTimePositionMapping()
const barContainerRefs: any = useTemplateRef("barContainer")

provide(BAR_CONTAINER_KEY, barContainerRefs)

const onDrop = (e: MouseEvent) => {
  const container = barContainerRefs.value?.[0]?.getBoundingClientRect()
  if (!container) {
    // eslint-disable-next-line no-console
    console.error("Vue-Ganttastic: failed to find bar container element for row.")
    return
  }
  const xPos = e.clientX - container.left
  const datetime = mapPositionToTime(xPos)
  emit("drop", { e, datetime })
}

function areDatesWithin3Days(start1: Date, end1: Date, start2: Date, end2: Date) {
  const msPerDay = 1000 * 60 * 60 * 24

  // Check if ranges overlap or are within 3 days apart
  const gap =
    Math.max(start2.valueOf() - end1.valueOf(), start1.valueOf() - end2.valueOf()) / msPerDay

  return gap < 3
}

function doIntervalsOverlap(start1: Date, end1: Date, start2: Date, end2: Date) {
  return (start1 <= end2 && start2 <= end1) || areDatesWithin3Days(start1, end1, start2, end2)
}

function findOverlappingIntervals(bars: GanttBarObject[]) {
  const overlaps: GanttBarObject[] = []

  for (let i = 0; i < bars.length; i++) {
    for (let j = i + 1; j < bars.length; j++) {
      if (
        doIntervalsOverlap(
          bars[i].myBeginDate,
          bars[i].myEndDate,
          bars[j].myBeginDate,
          bars[j].myEndDate
        )
      ) {
        overlaps.push(dayjs(bars[i].myEndDate).isAfter(bars[j].myEndDate) ? bars[i] : bars[j])
      }
    }
  }

  return overlaps
}

const getBarsToRender = () => {
  const barsList: GanttBarObject[][] = [] // List of overlapping groups

  const handleBars = (list: GanttBarObject[]) => {
    if (!list || list.length === 0) {
      return
    }

    const overlaps = findOverlappingIntervals(list)

    if (overlaps.length > 0) {
      const notOverlappingList = list.filter((bar) => !overlaps.includes(bar))
      const remainingList = list.filter((bar) => overlaps.includes(bar))

      barsList.push(notOverlappingList)

      handleBars(remainingList)
    } else {
      barsList.push(list)
    }
  }

  handleBars(props.bars)

  return barsList
}

onMounted(() => {
  barsToRender.value = getBarsToRender()
})
const isBlank = (str: string) => {
  return !str || /^\s*$/.test(str)
}
</script>

<style>
.g-gantt-row {
  width: 100%;
  transition: background 0.4s;
  position: relative;
  height: 24px !important;
}

.g-gantt-row-label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.6);
}

.transition-group {
  position: relative;
}

.bar-transition-leave-active,
.bar-transition-enter-active {
  transition: all 0.2s;
}

.bar-transition-enter-from,
.bar-transition-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
</style>
