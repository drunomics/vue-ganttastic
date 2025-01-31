<template>
  <div class="g-gantt-legend-collapse">
    <Icon
      name="chevron-right"
      class="g-gantt-legend-do-uncollapse"
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
      <div class="g-gantt-legend-title">
        <Icon size="32" :name="legend[areaName][0].area.icon" />

        <p class="g-gantt-legend-area">
          {{ areaName }}
        </p>
      </div>

      <div v-for="promotion in promotions" :key="promotion.category.name" class="g-gantt-legend-promotion">
        <div class="g-gantt-legend-category-color" :style="{backgroundColor: '#' + promotion.category.color}" />

        <p class="g-gantt-legend-category-name">
          {{ promotion.category.name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, onMounted, ref, nextTick } from 'vue'
import Icon from '../Icon.vue'

defineProps<{
  legend: Record<string, any[]>;
  isCollapsed: boolean
}>()

const areaDividerHeight = 6
const areaHeights = ref<number[]>([])

onMounted(() => {
  nextTick(() => {
    const areasList = Object.values(document.querySelector('.g-gantt-rows-list')!.children)

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

  height: 64px;
}

.g-gantt-legend-title {
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 24px;
}

.g-gantt-legend-area {
  font-size: 16px;
  font-weight: 700;
  line-height: 24.8px;

  color: #1B1E1F;
}

.g-gantt-legend-category-color {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.g-gantt-legend-promotion {
  display: flex;
  align-items: center;
  gap: 8px;
}

.g-gantt-legend-do-uncollapse:hover {
  cursor: pointer;
  color: #008075;
}

.g-gantt-legend-area-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.g-gantt-legend-category-name {
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: #1B1E1F;
}
</style>
