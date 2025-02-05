<template>
  <div
    class="g-gantt-tooltip"
    :style="{
      fontFamily: config.font.value
    }"
    @click="handleClick"
  >
    <div class="g-gantt-tooltip-container">
      <div class="g-gantt-tooltip-area-container">
        <span class="g-gantt-tooltip-area">
          {{ bar?.ganttBarConfig?.tooltipInfo?.areaName }}
        </span>

        <component
          :is="iconComponent"
          v-if="bar"
          :name="bar?.ganttBarConfig?.tooltipInfo?.icon"
          size="24"
        />
      </div>

      <div class="g-gantt-tooltip-category-container">
        <div
          class="g-gantt-tooltip-color-line g-gantt-tooltip-color-line-left"
          :style="{ background: dotColor }"
        />
        <span class="g-gantt-tooltip-category">
          {{ bar?.ganttBarConfig?.tooltipInfo?.categoryName }}
        </span>
        <div
          class="g-gantt-tooltip-color-line g-gantt-tooltip-color-line-right"
          :style="{ background: dotColor }"
        />
      </div>

      <p class="g-gantt-tooltip-promotion-title">
        {{ bar?.ganttBarConfig?.tooltipInfo?.title }}
      </p>

      <div class="g-gantt-tooltip-promotion-time-container">
        <p class="g-gantt-tooltip-time">
          <slot :bar="bar" :bar-start="barStartRaw" :bar-end="barEndRaw">
            {{ tooltipContent }}
          </slot>
        </p>

        <component
          :is="iconComponent"
          v-if="tooltipIsClickable"
          name="chevron-right"
          size="16"
          :style="{ color: '#008075' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, ref, inject } from "vue"
import dayjs from "dayjs"
import type { GanttBarObject } from "../types"
import type { GGanttChartConfig } from "./GGanttChart.vue"

const DEFAULT_DOT_COLOR = "cadetblue"
const iconComponent = inject("iconComponent")

const props = defineProps<{
  bar: GanttBarObject | undefined
  config: Pick<GGanttChartConfig, "font" | "barEnd" | "barStart">
  toDayjs: any
}>()

const { bar } = toRefs(props)

const tooltipIsClickable = computed(() => {
  const publishedAt = bar.value?.ganttBarConfig?.tooltipInfo?.publishedAt

  if (publishedAt) {
    const publishedDateInFuture = dayjs(new Date(publishedAt * 1000)).isAfter(new Date())

    return !publishedDateInFuture
  } else {
    return false
  }
})

const onHoverCursorVal = ref(tooltipIsClickable.value ? "pointer" : "default")

const dotColor = computed(
  () => bar?.value?.ganttBarConfig.style?.backgroundColor || DEFAULT_DOT_COLOR
)

const handleClick = () => {
  const url = bar.value?.ganttBarConfig.tooltipInfo?.promotionUrl
  if (!url || !tooltipIsClickable.value) {
    return
  }

  window.location.assign(url)
}

const barStartRaw = computed(() => bar.value?.[props.config.barStart.value])
const barEndRaw = computed(() => bar.value?.[props.config.barEnd.value])

const tooltipContent = computed(() => {
  if (!bar?.value) {
    return ""
  }

  const barStartFormatted = props.toDayjs(barStartRaw.value).format("DD.MM.")
  const barEndFormatted = props.toDayjs(barEndRaw.value).format("DD.MM.YYYY")

  return `${barStartFormatted} \u2013 ${barEndFormatted}`
})
</script>

<style scoped>
.g-gantt-tooltip {
  display: flex;
  align-items: flex-start;

  width: 224px;

  background: white;
  color: #4c5356;
  z-index: 4;
  font-size: 0.85em;
  padding-top: 8px;
  padding-bottom: 12px;
  border-radius: 3px;
  font-variant-numeric: tabular-nums;

  box-shadow: 0 2px 8px 0 #00000033;
}

.g-gantt-tooltip:hover {
  cursor: v-bind(onHoverCursorVal);
}

.g-gantt-tooltip-category-container {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.g-gantt-tooltip-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.g-gantt-tooltip-time {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;

  color: #4c5356;
}

.g-gantt-tooltip-promotion-time-container {
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
}

.g-gantt-tooltip-area {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}

.g-gantt-tooltip-category {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
}

.g-gantt-tooltip-area-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}

.g-gantt-tooltip-promotion-title {
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;

  color: #1b1e1f;

  padding: 0 12px 10px 12px;
}

.g-gantt-tooltip-color-line {
  height: 2px;
}

.g-gantt-tooltip-color-line-left {
  min-width: 8px;
  margin-right: 4px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.g-gantt-tooltip-color-line-right {
  margin-left: 4px;
  width: 100%;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

@media (max-width: 1400px) {
  .g-gantt-tooltip {
    width: 208px;

    padding-top: 6px;
    padding-bottom: 8px;
  }

  .g-gantt-tooltip-color-line-left {
    min-width: 4px;
  }

  .g-gantt-tooltip-area-container,
  .g-gantt-tooltip-promotion-title,
  .g-gantt-tooltip-promotion-time-container {
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
