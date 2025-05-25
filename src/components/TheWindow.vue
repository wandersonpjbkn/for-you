<script lang="ts" setup>
import { useImagesStore } from '@/stores/images'
import { useWindowStore } from '@/stores/window'

const storeImages = useImagesStore()
const storeWindow = useWindowStore()

</script>

<template>
  <section
    :class="{
      'is-minimized': storeWindow.isMinimized
    }"
  >
    <TheImages />
    <div class="footer">
      <template v-if="storeImages.hasReachMax">
        Have a good day!
      </template>
      <template v-else>
        <BtnGrow
          class="button"
          size="large"
          @grow="storeImages.updateIndex"
        />
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-rows: 1fr auto;
  row-gap: var(--padding-smaller);

  width: 100%;
  height: 100%;
  background: {
    color: var(--color-red-light-background);
  }
  border: var(--border-default);
  border-radius: var(--border-default-radius);

  &.is-minimized {
    border: none;
    overflow: hidden;
  }
}

.footer  {
  margin: 0 auto var(--padding-smaller);

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 50px;

  font: {
    size: 2rem
  }
  color: var(--color-red-border);
}
</style>
