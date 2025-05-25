<script lang="ts" setup>
import { ref } from 'vue'

import { useImagesStore } from '@/stores/images'

import icnClose from '@/assets/images/icons/close.png'

const storeImages = useImagesStore()

const btnLabel = ref({
  src: icnClose,
  alt: 'Close',
})

</script>

<template>
  <BaseButton
    v-bind="$attrs"
    :icon="btnLabel"
    @clicked="storeImages.resetIndex"
  />
</template>
