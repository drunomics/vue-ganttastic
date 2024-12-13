<template>
  <div class="g-grid-container">
    <div
      v-for="({ label, value, width }, index) in timeaxisUnits.lowerUnits"
      :key="label"
      class="g-grid-line"
      :style="{
        width,
        borderRight: getBorderRight(label, index),
        background: highlightedUnits?.includes(Number(value)) ? colors.hoverHighlight : undefined,
        backgroundColor: getBackgroundColor(label)
      }"
    />
  </div>
</template>

<script setup lang="ts">
import provideConfig from "../provider/provideConfig.js"
import useTimeaxisUnits from "../composables/useTimeaxisUnits.js"

defineProps<{
  highlightedUnits?: number[]
}>()

const { colors } = provideConfig()
const { timeaxisUnits } = useTimeaxisUnits()

const getBackgroundColor = (label: string) => {
  const q2 = +label >= 14 && +label <= 26
  const q4 = +label >= 40 && +label <= 52

  if (q2 || q4) {
    return "#f7f8f9"
  } else {
    return "#ffffff"
  }
}

const getBorderRight = (label: string, index: number) => {
  if (index === timeaxisUnits.value.lowerUnits.length - 1) {
    return "unset"
  }

  return label && Number(label) % 13 === 0 ? "2px solid #a8adb3" : "2px solid #f0f1f2"
}
</script>

<style>
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.g-grid-line {
  width: 1px;
  height: 100%;
}
</style>
