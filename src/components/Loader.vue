<template>
  <div id="loader" class="loader">
    <div class="backdrop"></div>
    <div class="loader-content">
      <dg-loader></dg-loader>
      <!-- <span>Calculating...</span> -->
    </div>
  </div>
</template>

<script>
import { dgLoader } from '@moodxd/capsule-ds';

export default {
  name: 'Loader',
  components: {
    'dg-loader': dgLoader,
  },
};
</script>

<style scoped lang="scss">
.loader {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 5;
}
.backdrop {
  left: 0;
  top: 0;
  position: absolute;
  z-index: 2;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.4;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.loader-content {
  // background-color: #ffffff;
  z-index: 6;
  display: flex;
  padding: 2px;
  span {
    justify-content: center;
    display: inline-flex;
    align-items: center;
    padding: 2px;
  }
}
</style>
