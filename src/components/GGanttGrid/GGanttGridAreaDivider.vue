<template>
  <div
    v-for="linePosition in areaHeights"
    :key="linePosition"
    :style="{
      position: 'absolute',
      top: linePosition + 'px',
      zIndex: 2,
      height: '6px',
      width: '100%',
      backgroundColor: '#DFE2E6'
    }"
  />

  <div
    v-for="({ label, width }, index) in timeaxisUnits.lowerUnits"
    :key="label"
    :style="{
      width,
      borderRight: getBorderRight(label, index),
      backgroundColor: getBackgroundColor(label)
    }"
    class="g-grid-line"
  />
</template>
<script setup lang="ts">
import useTimeaxisUnits from "../../composables/useTimeaxisUnits"

const { timeaxisUnits } = useTimeaxisUnits()

defineProps<{
  areaHeights: number[]
}>()

const getBorderRight = (label: string, index: number) => {
  if (index === timeaxisUnits.value.lowerUnits.length - 1) {
    return "unset"
  }

  return label && Number(label) % 13 === 0 ? "2px solid #a8adb3" : "2px solid #f0f1f2"
}

const getBackgroundColor = (label: string) => {
  const q2 = +label >= 14 && +label <= 26
  const q4 = +label >= 40 && +label <= 52

  if (q2 || q4) {
    return "#f7f8f9"
  } else {
    return "#ffffff"
  }
}
</script>
