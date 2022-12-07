<template>
  <div id="app">
    <headerComponent class="header" :home="home" :pageFlag="homePage" />
    <main>
      <router-view />
    </main>
    <dg-footer class="footer" v-show="homePage" :footerLinks="footerLinks" :disclaimerText="disclaimerText" />
  </div>
</template>

<script>
import '@moodxd/component-site-navigation/lib/dom-modifications';
import { dgFooter } from '@moodxd/capsule-ds';
import { mapState, mapMutations } from 'vuex';
import headerComponent from './components/HeaderComponent.vue';
import LocalStorageService from './services/LocalStorageService';

export default {
  name: 'App',
  components: {
    'dg-footer': dgFooter,
    headerComponent,
  },
  data() {
    return {
      home: 'Home',
      sticky: false,
      SELECTED_STATE: 'selected-state',
      footerLinks: {
        legalLinks: [],
      },
      disclaimerText: 'For producer use only. Not for use with the general public.',
    };
  },
  computed: {
    ...mapState([]),
    disableSubmitButton: function () {
      return !this.formIsValid;
    },
    homePage() {
      if (this.$route.path == '/') {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapMutations(['setUserData']),
    stickyScroll() {
      let nav = this.homePage ? document.getElementById('CorporateNav') : document.querySelector('.CorporateNav');
      let stickyHeight = 50; //Default Height
      if (nav && nav.offsetHeight) {
        stickyHeight = nav.offsetHeight;
      }
      if (window.scrollY >= stickyHeight) {
        this.sticky = true;
      }
      if (window.scrollY < stickyHeight) {
        this.sticky = false;
      }
    },
    goToRoute: function (item) {
      this.$router.push(item.to);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.stickyScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.stickyScroll, true);
    window.addEventListener('scroll', this.stickyScroll);
    LocalStorageService.setItem(this.SELECTED_STATE, '');
  },
  async created() {},
};
</script>

<style>
/* These three CSS modules will be needed for all apps */
@import '@moodxd/base-reset';
@import '@moodxd/base-typography';
@import '@moodxd/theme-core';

/* These modules are needed for the included pages, and probably for all apps */
@import '@moodxd/layout-container';
@import '@moodxd/layout-grid';
@import '@moodxd/utility-size';
@import '@moodxd/utility-space';

/*
    These modules are needed for navigation items but already included in the
    capsule-ds components.  They do not need to be imported again.
   */
@import '@moodxd/component-corporate-navigation';
@import '@moodxd/component-section-navigation';
@import '@moodxd/component-section-title';
@import '@moodxd/component-site-navigation';
@import '@moodxd/component-footer';

/*
    These modules are also available.  To keep your CSS bundle as small as possible,
    you should only un-comment the ones that you need.
   */
@import '@moodxd/component-accordion';
@import '@moodxd/component-card';
@import '@moodxd/component-decorative-number';
@import '@moodxd/component-form';
@import '@moodxd/component-hero';
@import '@moodxd/component-narrative-form';
@import '@moodxd/component-overlay';
@import '@moodxd/component-tabs';
@import '@moodxd/element-button';
@import '@moodxd/element-checkbox';
@import '@moodxd/element-dropdown';
@import '@moodxd/element-input';
@import '@moodxd/element-link';
@import '@moodxd/element-loader';
@import '@moodxd/element-radio';
@import '@moodxd/element-select';
@import '@moodxd/element-table';
@import '@moodxd/element-textarea';
@import '@moodxd/element-tooltip';
@import '@moodxd/utility-flex';
@import '@moodxd/utility-layout';
@import '@moodxd/utility-offset';
@import '@moodxd/utility-order';
@import '@moodxd/utility-properties';
@import '@moodxd/utility-typography';
@import '@moodxd/component-inline-message';

/*
CSS for DefinitionItem.vue ( help-text )
 */
/*@import '@moodxd/capsule-ds/src/components/definition-item/definition-item.css';*/

.u-hiddenVisually {
  visibility: hidden;
}
</style>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
}
.footer ::v-deep(.Footer-container) {
  padding: 3.2rem;
}
.header {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
