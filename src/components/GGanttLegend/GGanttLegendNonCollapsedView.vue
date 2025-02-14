<template>
  <div class="g-gantt-legend">
    <div class="g-gantt-legend-collapse-container">
      <div class="g-gantt-legend-collapse" @click="() => $emit('update:isCollapsed', !isCollapsed)">
        <component
          :is="iconComponent"
          name="chevron-right"
          class="g-gantt-legend-do-collapse"
          size="24"
        />
      </div>
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
        <component
          :is="iconComponent"
          class="g-gantt-legend-area-icon"
          size-s="24"
          size-m="24"
          size-l="32"
          :name="legend[areaName][0].area.icon"
        />

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
  </div>
</template>
<script setup lang="ts">
import { defineProps, inject, nextTick, onMounted, ref } from "vue"

defineProps<{
  legend: Record<string, any[]>
  isCollapsed: boolean
}>()
defineEmits(["update:isCollapsed"])

const iconComponent = inject("iconComponent")
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
.g-gantt-legend-collapse-container {
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: flex-end;

  height: 62px;
}

.g-gantt-legend-collapse {
  display: flex;
  align-items: center;
  align-self: baseline;
  justify-content: flex-end;

  width: 48px;
  height: 48px;
}

.g-gantt-legend-collapse:hover {
  cursor: pointer;
}

.g-gantt-legend-area-icon {
  margin: 0 8px 0 24px;
}

.g-gantt-legend-area-icon > * {
  fill: #4c5356;
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

.g-gantt-legend-do-collapse {
  color: #008075;
}

.g-gantt-legend-category-color {
  width: 60px;
  height: 6px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.g-gantt-legend {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: 68px;

  box-shadow: 4px 0 8px 1px #1b1e1f33;
  z-index: 1;
}

@media (max-width: 1400px) {
  .g-gantt-legend {
    min-width: 60px;
  }

  .g-gantt-legend-category-color {
    max-width: 52px;
  }

  .g-gantt-legend-collapse {
    width: 56px;
    height: 48px;
  }
}

@media (max-width: 700px) {
  .g-gantt-legend {
    min-width: 56px;
  }

  .g-gantt-legend-category-color {
    max-width: 44px;
  }

  .g-gantt-legend-area-icon {
    margin-left: 16px;
  }
}
</style>
