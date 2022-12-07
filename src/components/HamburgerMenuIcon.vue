<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 72 72">
    <path :class="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.4" d="M15.3 21h42M15.3 36.1h42M15.3 51h42"></path>
  </svg>
</template>
<script>
export default {
  props: ['strokeColor'],
  name: 'SVGHamburgerMenuIconComponent',
  data() {
    return {
      color: this.strokeColor,
    };
  },
};
</script>

<style scoped>
.white {
  fill: none;
  stroke: white;
}
.hide {
  fill: none;
  stroke: #838383;
}
</style>
