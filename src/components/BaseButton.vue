<script lang="ts" setup>
const {
    size = 'small',
    icon = false
} = defineProps<{
  size?: 'small' | 'medium' | 'large'
  icon?: { src: string, alt: string } | false
}>()
</script>

<template>
  <button
    :class="[
      `is-${size}`,
      { 'is-icon': !!icon }
    ]"
    @click="$emit('clicked')"
  >
    <template v-if="icon">
      <img
        :src="icon.src"
        :alt="icon.alt"
      >
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<style lang="scss" scoped>
@mixin state($bg, $color) {
  background-color: #{$bg};
  border-color: #{$bg};

  color: #{$color};
}

@mixin size($fontSize, $scale) {
  font-size: #{$fontSize};

  img {
    width: #{$scale};
    height: #{$scale};;
  }
}

button {
  @include state(
    var(--color-red-button),
    var(--color-red-dark-button)
  );

  padding: .5rem 1rem;
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

  &.is {
    &-icon {
      display: flex;

      padding: 0;
      background-color: var(--color-transparent) !important;
      border: none;
      border: {
        color: var(--color-transparent) !important;
        radius: 0;
      }

      align-items: center;
      justify-content: center;
    }

    &-small {
      @include size(1rem, 1.5rem);
    }

    &-medium {
      @include size(1.5rem, 1rem);
    }

    &-large {
      @include size(2rem, 1.5rem);
    }
  }
}
</style>
