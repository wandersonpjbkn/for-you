<script setup lang="ts">
//
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
body {
  margin: 0;

  width: 100dvw;
  height: 100dvh;
  padding: var(--padding-large);
  background: {
    color: #fefbec;
    position: center;
    repeat: no-repeat;
    size: cover;
    image: url(@/assets/images/background.png);
  }
  box-sizing: border-box;
  // overflow: hidden;

  font: {
    family: var(--font-family-main);
    size: 16px;
  }

  > div {
    display: flex;
    height: 100%;

    align-items: center;
    justify-content: center;
  }
}
</style>
