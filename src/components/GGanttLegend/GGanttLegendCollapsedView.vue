<template>
  <div class="g-gantt-legend">
    <div class="g-gantt-legend-collapse-container">
      <div class="g-gantt-legend-collapse" @click="() => $emit('update:isCollapsed', !isCollapsed)">
        <component
          :is="iconComponent"
          name="chevron-left"
          class="g-gantt-legend-do-uncollapse"
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
          height: areaHeights[index] + 'px'
        }"
      >
        <div class="g-gantt-legend-title">
          <component
            :is="iconComponent"
            class="g-gantt-legend-area-icon"
            size-s="24"
            size-m="24"
            size-l="32"
            :name="legend[areaName][0].area.icon"
          />

          <p class="g-gantt-legend-area">
            {{ areaName }}
          </p>
        </div>

        <div
          v-for="promotion in promotions"
          :key="promotion.category.name"
          class="g-gantt-legend-promotion"
        >
          <div
            class="g-gantt-legend-category-color"
            :style="{ backgroundColor: '#' + promotion.category.color }"
          />

          <p class="g-gantt-legend-category-name">
            {{ promotion.category.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, onMounted, ref, nextTick, inject } from "vue"

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
  justify-content: flex-end;

  height: 64px;
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
}

.g-gantt-legend-area-icon > path {
  fill: #4c5356;
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

.g-gantt-legend-do-uncollapse {
  color: #008075;
}

.g-gantt-legend-area-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px 0;
}

.g-gantt-legend-category-name {
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: #1b1e1f;
}

.g-gantt-legend {
  display: flex;
  flex-direction: column;

  background-color: white;
  min-width: fit-content;
  box-shadow: 4px 0 8px 1px #1b1e1f33;

  z-index: 1;
}

.g-gantt-legend-area-icon * {
  fill: #4c5356;
}

@media (max-width: 1400px) {
  .g-gantt-legend-category-color {
    max-width: 52px;
  }

  .g-gantt-legend-category-name {
    font-weight: 400;
    font-size: 12px;
    line-height: 15.6px;
    letter-spacing: 0;
  }

  .g-gantt-legend-area {
    font-weight: 700;
    font-size: 14px;
    line-height: 21.7px;
    letter-spacing: 0;
  }
}

@media (max-width: 700px) {
  .g-gantt-legend-category-color {
    max-width: 44px;
  }

  .g-gantt-legend-title {
    padding: 0 16px;
  }
}
</style>
