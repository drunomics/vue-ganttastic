<template>
  <div ref="gridContainer" class="g-grid-container">
    <g-gantt-grid-current-day :parent-width="width" />
    <g-gantt-grid-area-divider :area-heights="areaHeights" />
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import GGanttGridCurrentDay from './GGanttGridCurrentDay.vue'
import GGanttGridAreaDivider from './GGanttGridAreaDivider.vue'

defineProps<{
  highlightedUnits?: number[]
}>()

const gridContainer = ref<HTMLDivElement | null>(null)
const { width } = useElementSize(gridContainer)

const areaHeights = ref<number[]>([])

onMounted(() => {
  nextTick(() => {
    const areasList = Object.values(document.querySelector('.g-gantt-rows-list')!.children)

    areasList.forEach((area) => {
      areaHeights.value.push(area.clientHeight)
    })

    areaHeights.value.pop()
  })
})
</script>

<style scoped>
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0;
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
