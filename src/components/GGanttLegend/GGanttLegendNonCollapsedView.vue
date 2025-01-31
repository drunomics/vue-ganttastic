<template>
  <div class="g-gantt-legend-collapse">
    <ui-icon
      name="chevron-left"
      class="g-gantt-legend-do-collapse"
      size="24"
      @click="() => $emit('update:isCollapsed', !isCollapsed)"
    />
  </div>

  <div class="g-gantt-legend-areas-list">
    <div
      v-for="([areaName, promotions], index) in Object.entries(legend)"
      :key="areaName"
      class="g-gantt-legend-area-list"
      :style="{
        height: areaHeights[index] + areaDividerHeight + 'px'
      }"
    >
      <ui-icon class="g-gantt-legend-area-icon" size="24" :name="legend[areaName][0].area.icon" />

      <div class="g-gantt-legend-promotion">
        <div
          v-for="promotion in promotions"
          :key="promotion.category.name"
          class="g-gantt-legend-category-color"
          :style="{ backgroundColor: '#' + promotion.category.color }"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, nextTick, onMounted, ref } from "vue"
import UiIcon from "../UiIcon.vue"

defineProps<{
  legend: Record<string, any[]>
  isCollapsed: boolean
}>()

const areaDividerHeight = 6
const areaHeights = ref<number[]>([])

onMounted(() => {
  nextTick(() => {
    const areasList = Object.values(document.querySelector(".g-gantt-rows-list")!.children)

    areasList.forEach((area) => {
      areaHeights.value.push(area.clientHeight)
    })
  })
})
</script>
<style scoped>
.g-gantt-legend-collapse {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 48px;
  margin-bottom: 14px;
}

.g-gantt-legend-area-icon {
  margin: 0 8px 0 16px;
}

.g-gantt-legend-promotion {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.g-gantt-legend-areas-list {
  display: flex;
  flex-direction: column;
}

.g-gantt-legend-area-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.g-gantt-legend-do-collapse:hover {
  cursor: pointer;
  color: #008075;
}

.g-gantt-legend-category-color {
  width: 44px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
