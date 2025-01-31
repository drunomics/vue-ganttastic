<template>
  <div
    :style="{
      position: 'absolute',
      top: '-65px',
      zIndex: 3,
      left: (dayWidth * daysPassed) - 7.5 + 'px',
    }"
  >
    <Icon
      name="marker-current-date"
      size="16"
      :style="{
        color: '#C882BE'
      }"
    />
  </div>
  <div
    :style="{
      position: 'absolute',
      top: '-52px',
      left: !applyRightPosition ? currentDayLeftVal + 'px' : 'unset',
      right: applyRightPosition ? currentDayRightVal + 'px': 'unset',
      width: '68px',
      height: '20px',
      backgroundColor: 'white',
      padding: '2px',
      borderRadius: '4px'
    }"
  >
    <p class="g-gantt-grid-current-date">
      {{ dayjs(new Date()).format("DD.MM.YYYY") }}
    </p>
  </div>

  <div
    :style="{
      position: 'absolute',
      width: '2px',
      height: '100%',
      left: dayWidth * daysPassed + 'px',
      borderRight: '2px solid #C882BE',
      zIndex: 3
    }"
  />
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
import { computed, ref, defineProps } from 'vue'
import Icon from '../Icon.vue'

const props = defineProps<{
  parentWidth: number
}>()

const today = new Date()
const startOfYear = new Date(today.getFullYear(), 0, 1)

const daysPassed = computed(() => {
  return Math.ceil((new Date(today.getTime()).valueOf() - startOfYear.valueOf()) / 86400000)
})

const dayWidth = computed(() => props.parentWidth / 52 / 7)

const applyRightPosition = ref(daysPassed.value >= (365 - 10))

const currentDayRightVal = computed(() => {
  if (daysPassed.value >= (365 - 10)) {
    return 0
  }

  return (dayWidth.value * daysPassed.value) - 33
})

const currentDayLeftVal = computed(() => {
  if (daysPassed.value < 10) {
    return 0
  }

  return (dayWidth.value * daysPassed.value) - 33
})

</script>
<style scoped>
.g-gantt-grid-current-date {
  font-size: 12px;
  font-weight: 400;
  line-height: 15.6px;
  text-align: center;
}
</style>
