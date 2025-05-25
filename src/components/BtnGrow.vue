<script lang="ts" setup>
// ...
</script>

<template>
  <BaseButton
    v-bind="$attrs"
    @clicked="$emit('grow')"
  >
    Grow!
  </BaseButton>
</template>
