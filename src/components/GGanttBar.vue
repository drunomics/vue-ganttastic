<template>
  <div
    :id="barConfig.id"
    ref="ganttBarRef"
    :class="['g-gantt-bar', barConfig.asArrow ? 'g-gantt-bar-is-arrow' : '', barConfig.class || '']"
    :style="{
      ...barConfig.style,
      position: 'relative',
      top: `${rowHeight * 0.1}px`,
      left: `${xStart}px`,
      width: `${getBarWidth}px`,
      height: `${rowHeight * 0.8}px`,
      zIndex: isDragging ? 3 : 2
    }"
    @click="onMouseEvent"
    @contextmenu="onMouseEvent"
    @dblclick="onMouseEvent"
    @mousedown="onMouseEvent"
    @mouseenter="onMouseEvent"
    @mouseleave="onMouseEvent"
  >
    <div class="g-gantt-bar-label">
      <slot :bar="bar">
        <div>
          {{ barConfig.label || "" }}
        </div>
        <div v-if="barConfig.html" v-html="barConfig.html" />
      </slot>
    </div>
    <div
      v-if="barConfig.asArrow"
      :style="{
        borderLeft: `8px solid #${bar?.ganttBarConfig?.style?.backgroundColor}`
      }"
      class="g-gantt-bar-arrow"
    />
    <template v-if="barConfig.hasHandles">
      <div class="g-gantt-bar-handle-left" />
      <div class="g-gantt-bar-handle-right" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs, watch, onMounted, inject, h, type Ref } from "vue"

import { useTippy } from "vue-tippy"
import useTimePositionMapping from "../composables/useTimePositionMapping.js"
import type { GanttBarObject } from "../types"
import provideEmitBarEvent from "../provider/provideEmitBarEvent.js"
import { BAR_CONTAINER_KEY } from "../provider/symbols"
import provideConfig from "../provider/provideConfig"
import useDayjsHelper from "../composables/useDayjsHelper"
import GGanttBarTooltip from "./GGanttBarTooltip.vue"

const props = defineProps<{
  bar: GanttBarObject
}>()

const emitBarEvent = provideEmitBarEvent()

const { bar } = toRefs(props)
const barColor = props.bar.ganttBarConfig.style?.backgroundColor
const { mapTimeToPosition, mapPositionToTime } = useTimePositionMapping()
const { font, barEnd, barStart, rowHeight, width, chartStart, chartEnd, chartSize } =
  provideConfig()
const ganttBarRef = ref()
const { toDayjs } = useDayjsHelper()
const isDragging = ref(false)

const barConfig = computed(() => bar.value.ganttBarConfig)
const barContainerEl = inject(BAR_CONTAINER_KEY)

const arrowSvg = `
  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0.500003L0 0.5L8 8.5L16 0.500003Z" fill="white"/>
  </svg>`

const setCorrectArrowPosition = (placement: string) => {
  const tippyArrow: HTMLDivElement | null = document.querySelector(".tippy-svg-arrow")

  if (!tippyArrow) {
    return
  }
  const transform = tippyArrow.style.transform ?? ""

  const matched = transform.match(/translate3d\((-?\d+)/)

  const tooltipHeight: number = document.querySelector(".tippy-content")?.clientHeight as number

  if (placement === "bottom" && matched) {
    const svg = tippyArrow.firstElementChild as unknown as SVGElement
    svg.style.transform = "rotateX(180deg)"

    const xAxisVal = parseInt(matched[1])

    tippyArrow.style.transform = `translate3d(${xAxisVal}px, -${tooltipHeight + 7}px, 0px)`
  }

  if (placement === "top" && matched) {
    const xAxisVal = parseInt(matched[1])
    tippyArrow.style.transform = `translate3d(${xAxisVal}px, -1px, 0px)`
  }
}

onMounted(() => {
  if (!ganttBarRef?.value) {
    return
  }

  useTippy(ganttBarRef.value, {
    content: h(GGanttBarTooltip, { bar: bar.value, config: { barStart, barEnd, font }, toDayjs }),
    arrow: arrowSvg,
    interactiveBorder: 0,
    placement: "top",
    // do not hide tooltip when hovering it
    interactive: true,
    popperOptions: {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [5, 15]
          }
        },
        {
          name: "applyArrowHide",
          enabled: true,
          phase: "write",
          fn({ instance }) {
            setCorrectArrowPosition(instance?.state.placement || "top")
          }
        }
      ]
    },
    // show delay is 0, hide delay is 0
    delay: [0, 0],
    duration: [300, 0]
  })
})

const onMouseEvent = (e: MouseEvent) => {
  e.preventDefault()
  if (e.type === "mousedown") {
    return
  }

  if (!barContainerEl?.value) {
    return
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const barContainer = barContainerEl?.value?.[0]?.getBoundingClientRect()
  if (!barContainer) {
    return
  }
  const datetime = mapPositionToTime(e.clientX - barContainer.left)
  emitBarEvent(e, bar.value, datetime)
}

const xStart = ref(0)
const xEnd = ref(0)
const arrowWidth = 8

const getBarWidth = computed(() => {
  const beginDateTs = new Date(bar.value.myBeginDate).getTime()
  const endDateTs = new Date(bar.value.myEndDate).getTime()

  // Calculate the absolute difference in milliseconds
  const differenceInMilliseconds = Math.abs(beginDateTs - endDateTs)

  // Convert milliseconds to days
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24)

  if (differenceInDays <= 2) {
    return 0
  }

  return xEnd.value - xStart.value - arrowWidth
})

onMounted(() => {
  watch(
    [bar, width, chartStart, chartEnd, chartSize.width],
    () => {
      xStart.value = mapTimeToPosition(bar.value[barStart.value])
      xEnd.value = mapTimeToPosition(bar.value[barEnd.value])
    },
    { deep: true, immediate: true }
  )
})
</script>

<style>
#tippy-1 {
  inset: unset;
  transform: unset;
}

.tippy-arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 6px solid red;
  margin-top: -35px;
}

.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: visible;
  margin: 8px 0;

  border-radius: 4px 0 0 4px;
}

.g-gantt-bar-is-arrow {
  height: 6px !important;
}

.g-gantt-bar-label {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 14px 0 14px; /* 14px is the width of the handle */
  display: flex;
  justify-content: center;
  align-items: center;
}

.g-gantt-bar-label > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.g-gantt-bar-handle-left,
.g-gantt-bar-handle-right {
  position: absolute;
  width: 10px;
  height: 100%;
  background: white;
  opacity: 0.7;
  border-radius: 0;
  cursor: ew-resize;
  top: 0;
}

.g-gantt-bar-handle-left {
  left: 0;
}

.g-gantt-bar-handle-right {
  right: 0;
}

.g-gantt-bar-label img {
  pointer-events: none;
}

.g-gantt-bar-arrow {
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid v-bind(barColor);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  z-index: 10;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
</style>
