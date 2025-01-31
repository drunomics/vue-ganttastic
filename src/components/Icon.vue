<template>
  <IconLoader :width="size" :height="size" v-bind="attrs" />
</template>
<script setup lang="ts">
import { defineAsyncComponent, watch, useAttrs, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  name: string | undefined
  iconClass?: string
  size: string
}>()
const deviceType = ref('desktop')

const deviceTypeReady = ref(false)

const checkDeviceType = () => {
  if (window.matchMedia('(min-width: 1200px)').matches) {
    deviceType.value = 'desktop'
  } else if (window.matchMedia('(min-width: 700px)').matches) {
    deviceType.value = 'tablet'
  } else {
    deviceType.value = 'mobile'
  }
  deviceTypeReady.value = true
}

let observer: null | ResizeObserver

onMounted(() => {
  if (observer) { observer.disconnect() }

  (observer = new ResizeObserver(checkDeviceType))
    .observe(document.body, { box: 'border-box' })
})

onUnmounted(() => { observer?.disconnect() })

let IconLoader = defineAsyncComponent(() => import(`../assets/${props.name}-${props.size}.svg`))
const attrs = useAttrs()

watch(() => props.name, (name?: string) => {
  if (!name) {
    return
  }

  IconLoader = defineAsyncComponent(() => import(`../assets/${name}-${props.size}.svg`))
})
</script>
