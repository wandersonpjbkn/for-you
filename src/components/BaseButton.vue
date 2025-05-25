<script lang="ts" setup>
const {
    size = 'small'
} = defineProps<{
  size?: 'small' | 'medium' | 'large'
}>()
</script>

<template>
  <button
    :class="[size]"
    @click="$emit('clicked')"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@mixin state($bg, $color) {
  background-color: #{$bg};
  border-color: #{$bg};

  color: #{$color};
}

button {
  @include state(
    var(--color-red-button),
    var(--color-red-dark-button)
  );

  padding: 5px 10px;
  border: var(--border-default);
  border-radius: var(--border-default-radius);

  font: {
    family: var(--font-family-main);
  };

  cursor: pointer;

  &:hover {
    @include state(
      var(--color-cyan-button),
      var(--color-cyan-dark-button)
    );
  }

  &:active {
    @include state(
      var(--color-pink-button),
      var(--color-pink-dark-button),
    );
  }

  &.small {
    font-size: 1rem;
  }

  &.medium {
    font-size: 1.5rem;
  }

  &.large {
    font-size: 2rem;
  }
}
</style>
