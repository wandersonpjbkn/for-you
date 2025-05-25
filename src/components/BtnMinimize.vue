<script lang="ts" setup>
import { computed } from 'vue'

import { useWindowStore } from '@/stores/window'

const storeWindow = useWindowStore()

const btnLabel = computed(() => {
  return storeWindow.isMinimized
    ? 'Maximizar'
    : 'Minimizar'
})

</script>

<template>
  <BaseButton
    v-bind="$attrs"
    @clicked="storeWindow.toggleMinimize"
  >
    {{ btnLabel }}
  </BaseButton>
</template>
