<template>
  <div class="g-gantt-legend">
    <g-gantt-legend-non-collapsed-view
      v-if="!isCollapsed"
      v-model:is-collapsed="isCollapsed"
      :arrow-name="arrowName"
      :legend="legend"
    />
    <g-gantt-legend-collapsed-view
      v-else
      v-model:is-collapsed="isCollapsed"
      :arrow-name="arrowName"
      :legend="legend"
    />
  </div>
</template>
<script setup lang="ts">
/// <reference lib="es2017.object" />
import { computed, onBeforeMount, ref } from "vue"
import GGanttLegendNonCollapsedView from "./GGanttLegendNonCollapsedView.vue"
import GGanttLegendCollapsedView from "./GGanttLegendCollapsedView.vue"

defineProps<{
  legend: Record<string, any[]>
}>()

const isCollapsed = ref(true)
const arrowName = computed(() => (isCollapsed.value ? "chevron-right" : "chevron-left"))
const legendWidth = computed(() => (isCollapsed.value ? "255px" : "56px"))

const getLegendCollapseDefaultVal = () => {
  const body = document.querySelector("body")

  const isScreenWiderThanM = body!.clientWidth > 1200

  return isScreenWiderThanM
}

onBeforeMount(() => {
  isCollapsed.value = getLegendCollapseDefaultVal()
})
</script>
<style scoped>
.g-gantt-legend {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: v-bind(legendWidth);

  box-shadow: 4px 0 8px 1px #1b1e1f33;
}
</style>
