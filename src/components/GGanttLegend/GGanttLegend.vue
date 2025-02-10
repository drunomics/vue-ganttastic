<template>
  <g-gantt-legend-non-collapsed-view
    v-if="!isCollapsed"
    v-model:is-collapsed="isCollapsed"
    :legend="legend"
  />
  <g-gantt-legend-collapsed-view v-else v-model:is-collapsed="isCollapsed" :legend="legend" />
</template>
<script setup lang="ts">
/// <reference lib="es2017.object" />
import { onBeforeMount, ref } from "vue"
import GGanttLegendNonCollapsedView from "./GGanttLegendNonCollapsedView.vue"
import GGanttLegendCollapsedView from "./GGanttLegendCollapsedView.vue"

defineProps<{
  legend: Record<string, object[]>
}>()

const isCollapsed = ref(true)

const getLegendCollapseDefaultVal = () => {
  const body = document.querySelector("body")

  const isScreenWiderThanM = body!.clientWidth > 1200

  return isScreenWiderThanM
}

onBeforeMount(() => {
  isCollapsed.value = getLegendCollapseDefaultVal()
})
</script>
