<template>
  <focus-trap v-model="isOpen">
    <div class="Overlay" :class="{ 'is-open': isOpen }" role="dialog" aria-modal="true" :aria-hidden="!isOpen" aria-describedby="overlay-title">
      <div class="Overlay-body">
        <div class="flex flex-col items-center justify-center">
          <h1 tabindex="-1" ref="title" id="overlay-title">{{ title }}</h1>
        </div>
        <button v-if="showCloseControl" class="Overlay-close" @click.prevent="toggleOverlay">{{ closeControlLabel }}</button>
        <div class="u-mT2">
          <slot></slot>
        </div>
      </div>
    </div>
  </focus-trap>
</template>

<script>
import { FocusTrap } from 'focus-trap-vue';

export default {
  name: 'Overlay',
  components: {
    FocusTrap
  },
  props: {
    title: {
      type: String,
      default: null
    },
    showCloseControl: {
      type: Boolean,
      default: true
    },
    closeControlLabel: {
      type: String,
      default: 'Close'
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    toggleOverlay: {
      type: Function
    }
  },
  watch: {
    isOpen: {
      handler: function(newValue, oldValue) {
        if (newValue && !oldValue) {
          // Setting a timeout here to wait for the dom element to be ready to receive focus.
          // Using $nextTick didn't seem to be waiting long enough
          setTimeout(() => {
            this.$refs.title.focus();
          }, 250);
        }
      },
      immediate: true
    }
  }
};
</script>
<style>
.Overlay-body {
  max-width: 1100px !important;
}
</style>
