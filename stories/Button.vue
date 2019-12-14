<template functional>
  <button :class="{ rounded: props.rounded }">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button {
  padding: 7px 15px;
  background-color: #f6798e;
  color: #fff;

  &.rounded {
    border-radius: 4px;
  }
}
</style>
