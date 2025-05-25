<script lang="ts" setup>
import { computed } from 'vue'

import { useWindowStore } from '@/stores/window'

import icnShrink from '@/assets/images/icons/shrink.png'
import icnExpand from '@/assets/images/icons/expand.png'

const storeWindow = useWindowStore()

const btnLabel = computed(() => {
  return storeWindow.isMinimized
    ? { src: icnExpand, alt: 'Maximize' }
    : { src: icnShrink, alt: 'Minimize' }
})

</script>

<template>
  <BaseButton
    v-bind="$attrs"
    :icon="btnLabel"
    @clicked="storeWindow.toggleMinimize"
  />
</template>
