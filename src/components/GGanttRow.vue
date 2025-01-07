<template>
  <div>
    <div
      v-for="barsList in barsToRender"
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

<!--    <div
      v-if="overlaps"
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
        <transition-group name="bar-transition OVERLAP___" tag="div">
          <g-gantt-bar
            v-for="overlapBar in overlaps"
            :key="overlapBar.ganttBarConfig.id"
            :bar="overlapBar"
          >
            <slot name="bar-label" :bar="overlapBar" />
          </g-gantt-bar>
        </transition-group>
      </div>
    </div>-->
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
    console.error("Vue-Ganttastic: failed to find bar container element for row.")
    return
  }
  const xPos = e.clientX - container.left
  const datetime = mapPositionToTime(xPos)
  emit("drop", { e, datetime })
}

/*

function isDifferenceLessThanThreeDays (date1: any, date2: any) {
  // Convert dates to milliseconds
  const msPerDay = 24 * 60 * 60 * 1000 // Milliseconds in a day
  const diffInMs = Math.abs(new Date(date1) - new Date(date2)) // Absolute difference
  const diffInDays = diffInMs / msPerDay // Convert to days

  return diffInDays <= 3 // Check if less than 3 days
}
*/

function doIntervalsOverlap (start1: any, end1: any, start2: any, end2: any) {
  return (start1 <= end2 && start2 <= end1)
}

function findOverlappingIntervals(bars: GanttBarObject[]) {
  const overlaps: GanttBarObject[] = []

  bars.forEach((bar) => {
    bars.forEach((bar1) => {
      if (bar.myBeginDate === bar1.myBeginDate && bar.myEndDate === bar1.myEndDate) {
        return
      }

      if (doIntervalsOverlap(bar.myBeginDate, bar.myEndDate, bar1.myBeginDate, bar1.myEndDate)) {
        // take to the overlaps the date which is after
        overlaps.push(dayjs(bar.myEndDate).isAfter(bar1.myEndDate) ? bar : bar1)
      }
    })
  })

  return overlaps
}

const getBarsToRender = () => {
  const barsList: GanttBarObject[][] = [];

  const checkOverlaps = (bars: GanttBarObject[]) => {
    let currentBars = bars;

    while (currentBars.length > 0) {
      const overlapping = findOverlappingIntervals(currentBars);

      barsList.push(overlapping);

      // Break if no more overlapping intervals are found
      if (overlapping.length === 0) break;

      currentBars = overlapping;
    }
  };

  checkOverlaps(props.bars);

  return barsList;
  console.log(barsList, " barsList")
}

onMounted(() => {
  barsToRender.value = getBarsToRender()

  console.log(barsToRender.value, "  barstornder")
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
<script setup lang="ts">
</script>
