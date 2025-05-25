<script lang="ts" setup>
import { useWindowStore } from '@/stores/window'

const storeWindow = useWindowStore()


</script>

<template>
  <main :class="{ 'is-minimized': storeWindow.isMinimized }">
    <TheNavigation />
    <TheWindow />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: var(--padding-smaller);

  width: 100%;
  max-width: var(--width-default);
  min-width: fit-content;
  padding: var(--padding-smaller);

  background: {
    color: var(--color-red-background);
  }
  border: var(--border-default);
  border-radius: var(--border-default-radius);

  &.is-minimized {
    grid-template-rows: auto 0px;
    row-gap: 0px;

    width: fit-content;
    min-width: auto;

    height: auto;
    min-height: auto;
  }
}

</style>
