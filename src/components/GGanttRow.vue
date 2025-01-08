<template>
  <div>
    <div
      v-for="barsList in barsToRender"
      :key="barsList[0].ganttBarConfig.id"
      class="g-gantt-row"
      :style="rowStyle"
      @dragover.prevent="isHovering = true"
      @dragleave="isHovering = false"
      @drop="onDrop($event)"
      @mouseover="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <div
        v-if="!isBlank(label) && !labelColumnTitle"
        class="g-gantt-row-label"
        :style="{ background: colors.primary, color: colors.text }"
      >
        <slot name="label">
          {{ label }}
        </slot>
      </div>
      <div ref="barContainer" class="g-gantt-row-bars-container" v-bind="$attrs">
        <transition-group name="bar-transition sys" tag="div">
          <g-gantt-bar v-for="bar in barsList" :key="bar.ganttBarConfig.id" :bar="bar">
            <slot name="bar-label" :bar="bar" />
          </g-gantt-bar>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, toRefs, computed, type StyleValue, provide, onMounted } from "vue"

import useTimePositionMapping from "../composables/useTimePositionMapping.js"
import provideConfig from "../provider/provideConfig.js"
import type { GanttBarObject } from "../types"
import GGanttBar from "./GGanttBar.vue"
import { BAR_CONTAINER_KEY } from "../provider/symbols"
import dayjs from "dayjs"

const props = defineProps<{
  label: string
  bars: GanttBarObject[]
  overlaps?: GanttBarObject[]
  highlightOnHover?: boolean
}>()

const barsToRender = ref<GanttBarObject[][]>([])

const emit = defineEmits<{
  (e: "drop", value: { e: MouseEvent; datetime: string | Date }): void
}>()
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
const barContainer: Ref<HTMLElement | null> = ref(null)

provide(BAR_CONTAINER_KEY, barContainer)

const onDrop = (e: MouseEvent) => {
  const container = barContainer.value?.getBoundingClientRect()
  if (!container) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    console.error("Vue-Ganttastic: failed to find bar container element for row.")
    return
  }
  const xPos = e.clientX - container.left
  const datetime = mapPositionToTime(xPos)
  emit("drop", { e, datetime })
}

function isDifferenceLessThanThreeDays(date1: string, date2: string) {
  // Convert dates to milliseconds
  const msPerDay = 24 * 60 * 60 * 1000 // Milliseconds in a day
  const diffInMs = Math.abs(new Date(date1).getTime() - new Date(date2).getTime()) // Absolute difference
  const diffInDays = diffInMs / msPerDay // Convert to days

  return diffInDays <= 3 // Check if less than 3 days
}

function doIntervalsOverlap(start1: Date, end1: Date, start2: Date, end2: Date) {
  return start1 <= end2 && start2 <= end1
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

<script setup lang="ts"></script>
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
  left: 0px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
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
