<template>
  <div class="g-gantt-chart-container">
    <g-gantt-legend :legend="legend ? legend : {}" />

    <div :class="[{ 'labels-in-column': !!labelColumnTitle }]" class="g-gantt-chart-wrapper">
      <g-gantt-label-column
        v-if="labelColumnTitle"
        :style="{
          width: labelColumnWidth
        }"
      >
        <template #label-column-title>
          <slot name="label-column-title" />
        </template>
        <template #label-column-row="{ label }">
          <slot :label="label" name="label-column-row" />
        </template>
      </g-gantt-label-column>
      <div
        ref="ganttChart"
        :class="[
          'g-gantt-chart',
          {
            'with-column': labelColumnTitle,
            'g-gantt-chart-container--4-quarters-width': !showQ1OfNextYear,
            'g-gantt-chart-container--5-quarters-width': showQ1OfNextYear
          }
        ]"
        :style="{ width, background: colors.background, fontFamily: font }"
      >
        <g-gantt-grid v-if="grid" :highlighted-units="highlightedUnits" />
        <g-gantt-current-time v-if="currentTime">
          <template #current-time-label>
            <slot name="current-time-label" />
          </template>
        </g-gantt-current-time>
        <div class="g-gantt-chart-quarters">
          <div class="g-gantt-chart-quarter">Q1</div>
          <div class="g-gantt-chart-quarter">Q2</div>
          <div class="g-gantt-chart-quarter">Q3</div>
          <div class="g-gantt-chart-quarter">Q4</div>

          <div v-if="showQ1OfNextYear" class="g-gantt-chart-quarter">Q1</div>
        </div>
        <div
          :class="[
            'g-gantt-rows-container',
            props.verticalGrid ? 'g-gantt-chart-vertical-grid' : ''
          ]"
        >
          <div class="g-gantt-rows-list">
            <slot />
            <!-- the g-gantt-row components go here -->
          </div>
          <g-gantt-grid :highlighted-units="highlightedUnits" />
        </div>

        <g-gantt-timeaxis v-if="!hideTimeaxis">
          <template #upper-timeunit="{ label, value, date }">
            <!-- expose upper-timeunit slot of g-gantt-timeaxis-->
            <slot :date="date" :label="label" :value="value" name="upper-timeunit" />
          </template>
          <template #timeunit="{ label, value, date }">
            <!-- expose timeunit slot of g-gantt-timeaxis-->
            <slot :date="date" :label="label" :value="value" name="timeunit" />
          </template>
        </g-gantt-timeaxis>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  provide,
  ref,
  toRefs,
  useSlots,
  type ComputedRef,
  type Ref,
  type ToRefs
} from "vue"

import { useElementSize } from "@vueuse/core"
import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween.js"
import type { GanttBarObject } from "../types"
import { colorSchemes, type ColorSchemeKey, type ColorScheme } from "../color-schemes.js"
import { DEFAULT_DATE_FORMAT } from "../composables/useDayjsHelper"
import {
  CHART_ROWS_KEY,
  CONFIG_KEY,
  EMIT_BAR_EVENT_KEY,
  type ChartRow
} from "../provider/symbols.js"
import GGanttGrid from "./GGanttGrid/GGanttGrid.vue"
import GGanttLabelColumn from "./GGanttLabelColumn.vue"
import GGanttTimeaxis from "./GGanttTimeaxis.vue"
import GGanttCurrentTime from "./GGanttCurrentTime.vue"
import GGanttLegend from "./GGanttLegend/GGanttLegend.vue"

export interface GGanttChartProps {
  chartStart: string | Date
  chartEnd: string | Date
  precision?: "hour" | "day" | "date" | "week" | "month"
  barStart: string
  barEnd: string
  currentTime?: boolean
  currentTimeLabel?: string
  dateFormat?: string | false
  width?: string
  hideTimeaxis?: boolean
  colorScheme?: ColorSchemeKey | ColorScheme
  grid?: boolean
  pushOnOverlap?: boolean
  noOverlap?: boolean
  rowHeight?: number
  highlightedUnits?: number[]
  font?: string
  labelColumnTitle?: string
  labelColumnWidth?: string
  verticalGrid?: boolean
  legend: Record<string, object[]>
}

export type GGanttChartConfig = ToRefs<Required<GGanttChartProps>> & {
  colors: ComputedRef<ColorScheme>
  chartSize: {
    width: Ref<number>
    height: Ref<number>
  }
}

const props = withDefaults(defineProps<GGanttChartProps>(), {
  currentTimeLabel: "",
  dateFormat: DEFAULT_DATE_FORMAT,
  precision: "day",
  width: "100%",
  hideTimeaxis: false,
  colorScheme: "default",
  grid: false,
  pushOnOverlap: false,
  noOverlap: false,
  rowHeight: 40,
  highlightedUnits: () => [],
  font: "inherit",
  labelColumnTitle: "",
  labelColumnWidth: "150px"
})

dayjs.extend(isBetween)

const showQ1OfNextYearStartDate = new Date()
const showQ1OfNextYearEndDate = new Date()

showQ1OfNextYearStartDate.setDate(15)
showQ1OfNextYearStartDate.setMonth(10)

showQ1OfNextYearEndDate.setDate(31)
showQ1OfNextYearEndDate.setMonth(11)

const showQ1OfNextYear = ref(
  dayjs(new Date()).isBetween(showQ1OfNextYearStartDate, showQ1OfNextYearEndDate)
)

const emit = defineEmits<{
  (e: "click-bar", value: { bar: GanttBarObject; e: MouseEvent; datetime?: string | Date }): void
  (
    e: "mousedown-bar",
    value: { bar: GanttBarObject; e: MouseEvent; datetime?: string | Date }
  ): void
  (e: "mouseup-bar", value: { bar: GanttBarObject; e: MouseEvent; datetime?: string | Date }): void
  (e: "dblclick-bar", value: { bar: GanttBarObject; e: MouseEvent; datetime?: string | Date }): void
  (e: "mouseenter-bar", value: { bar: GanttBarObject; e: MouseEvent }): void
  (e: "mouseleave-bar", value: { bar: GanttBarObject; e: MouseEvent }): void
  (e: "dragstart-bar", value: { bar: GanttBarObject; e: MouseEvent }): void
  (e: "drag-bar", value: { bar: GanttBarObject; e: MouseEvent }): void
  (
    e: "dragend-bar",
    value: {
      bar: GanttBarObject
      e: MouseEvent
      movedBars?: Map<GanttBarObject, { oldStart: string; oldEnd: string }>
    }
  ): void
  (
    e: "contextmenu-bar",
    value: { bar: GanttBarObject; e: MouseEvent; datetime?: string | Date }
  ): void
}>()

const { width, font, colorScheme } = toRefs(props)

const slots = useSlots()
const colors = computed(() =>
  typeof colorScheme.value !== "string"
    ? colorScheme.value
    : colorSchemes[colorScheme.value as ColorSchemeKey] || colorSchemes.default
)
const getChartRows = () => {
  const defaultSlot = slots.default?.()
  const allBars: ChartRow[] = []

  if (!defaultSlot) {
    return allBars
  }
  defaultSlot.forEach((child) => {
    if (child.props?.bars) {
      const { label, bars } = child.props
      allBars.push({ label, bars })
      // if using v-for to generate rows, rows will be children of a single "fragment" v-node:
    } else if (Array.isArray(child.children)) {
      child.children.forEach((grandchild) => {
        const granchildNode = grandchild as {
          props?: ChartRow
        }
        if (granchildNode?.props?.bars) {
          const { label, bars } = granchildNode.props
          allBars.push({ label, bars })
        }
      })
    }
  })
  return allBars
}

const isDragging = ref(false)

const emitBarEvent = (
  e: MouseEvent,
  bar: GanttBarObject,
  datetime?: string | Date,
  movedBars?: Map<GanttBarObject, { oldStart: string; oldEnd: string }>
) => {
  switch (e.type) {
    case "click":
      emit("click-bar", { bar, e, datetime })
      break
    case "mousedown":
      emit("mousedown-bar", { bar, e, datetime })
      break
    case "mouseup":
      emit("mouseup-bar", { bar, e, datetime })
      break
    case "dblclick":
      emit("dblclick-bar", { bar, e, datetime })
      break
    case "mouseenter":
      // initTooltip(bar)
      emit("mouseenter-bar", { bar, e })
      break
    case "mouseleave":
      // clearTooltip()
      emit("mouseleave-bar", { bar, e })
      break
    case "dragstart":
      isDragging.value = true
      emit("dragstart-bar", { bar, e })
      break
    case "drag":
      emit("drag-bar", { bar, e })
      break
    case "dragend":
      isDragging.value = false
      emit("dragend-bar", { bar, e, movedBars })
      break
    case "contextmenu":
      emit("contextmenu-bar", { bar, e, datetime })
      break
  }
}

const ganttChart = ref<HTMLElement | null>(null)
const chartSize = useElementSize(ganttChart)

provide(CHART_ROWS_KEY, getChartRows)
provide(CONFIG_KEY, {
  ...toRefs(props),
  colors,
  chartSize
})
provide(EMIT_BAR_EVENT_KEY, emitBarEvent)
</script>

<style>
.g-gantt-chart {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  -webkit-touch-callout: none;
  user-select: none;
  font-variant-numeric: tabular-nums;
}

.g-gantt-chart-overview {
  width: 50px;
  height: 100%;
}

.g-gantt-chart-wrapper {
  width: 100%;
  padding-left: 16px;
  overflow-x: scroll;
}

.g-gantt-chart-container {
  width: 100%;
  display: flex;
  background: #f0f1f2;
  padding: 0 24px 0 0;
  border-top: 4px solid #91979c;
  border-bottom: 4px solid #91979c;
}

.g-gantt-chart-vertical-grid__line {
  height: 100%;
  width: 2px;
  background-color: black;
}

.g-gantt-chart-quarters {
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 64px;
  background-color: #f0f1f2;
}

.g-gantt-chart-quarter {
  display: flex;
  align-items: flex-end;
  justify-content: center;

  height: 100%;

  padding-bottom: 4px;

  line-height: 24.8px;
  color: #636a6d;
}

.with-column {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.g-gantt-rows-container {
  position: relative;
  height: 400px;
}

.g-gantt-chart-container--5-quarters-width {
  /* min-width of week * (1 year weeks + 1st quarter weeks) */
  min-width: calc(21px * (52 + 13));
}

.g-gantt-chart-container--4-quarters-width {
  /* min-width of week * 1 year weeks */
  min-width: calc(21px * 52);
}

.labels-in-column {
  display: flex;
  flex-direction: row;
}
</style>
