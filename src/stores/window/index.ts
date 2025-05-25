import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useWindowStore = defineStore(
  'window',
  () => {
    // state
    const isMinimized = ref(false)

    // getters
    const isMaximized = computed(() => !isMinimized.value)

    // actions
    function toggleMinimize() {
      isMinimized.value = !isMinimized.value
    }

    return {
      toggleMinimize,
      isMinimized,
      isMaximized,
    }
  }
)

