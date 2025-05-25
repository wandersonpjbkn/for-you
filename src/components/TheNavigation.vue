<script lang="ts" setup>
import { useImagesStore } from '@/stores/images'

const storeImages = useImagesStore()
</script>

<template>
  <nav>
    <h1>
      For You
    </h1>

    <ul>
      <template v-if="storeImages.hasReachMax">
        <li>
          <BtnResetar />
        </li>
      </template>
      <li>
        <BtnMinimize />
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  white-space: nowrap;
}

h1 {
  margin: 0 var(--padding-small) 0 0;;
}

ul {
  margin: 0;

  display: flex;
  gap: 5px;
  padding: 0;

  li {
    list-style: none;
  }
}
</style>
