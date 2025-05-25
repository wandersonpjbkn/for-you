import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import img1 from '@/assets/images/grow/image-1.png'
import img2 from '@/assets/images/grow/image-2.png'
import img3 from '@/assets/images/grow/image-3.png'
import img4 from '@/assets/images/grow/image-4.png'
import img5 from '@/assets/images/grow/image-5.png'
import img6 from '@/assets/images/grow/image-6.png'

export const useImagesStore = defineStore(
  'images',
  () => {
    // state
    const images = ref([
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    ])
    const currentIndex = ref(0)

    // getters
    const hasReachMax = computed(() => {
      return currentIndex.value === images.value.length - 1
    })

    // actions
    function updateIndex() {
      if (hasReachMax.value) return
      currentIndex.value += 1
    }
    function resetIndex() {
      currentIndex.value = 0
    }

    return {
      updateIndex,
      resetIndex,
      currentIndex,
      images,
      hasReachMax,
    }
  }
)

