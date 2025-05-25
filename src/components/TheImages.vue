<script lang="ts" setup>
import { useImagesStore } from '@/stores/images'

const storeImages = useImagesStore()

</script>

<template>
  <ul>
    <template
      v-for="(img, index) in storeImages.images"
      :key="index"
    >
      <li
        :class="{
          'active': storeImages.currentIndex === index
        }"
      >
        <img
          :src="img"
          :alt="`image-${index + 1}`"
        >
      </li>
    </template>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  position: relative;
  margin: 0;

  width: 100%;
  height: 100%;
  padding: 0;

  list-style-type: none;

  li {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    opacity: 0;

    &.active {
      opacity: 1;
    }
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
