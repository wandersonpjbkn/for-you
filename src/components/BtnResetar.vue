<script lang="ts" setup>
import { useImagesStore } from '@/stores/images'

const storeImages = useImagesStore()

</script>

<template>
  <BaseButton
    v-bind="$attrs"
    @clicked="storeImages.resetIndex"
  >
    Resetar
  </BaseButton>
</template>
