<template>
  <header id="nav" class="NavigationContainer">
    <div class="Navigation Container u-cf" :class="{ 'mobile-menu-open': mobileMenuOpen }">
      <div class="SiteNav-siteName">
        <!-- @slot For more control over the Site Name, provide an empty/null/undefined siteName prop and use the siteName slot. -->
        <slot name="siteName">{{ siteName }}</slot>
      </div>
      <nav aria-label="MobileNav" class="MobileNav">
        <a href="#" class="MobileNav-menu" @click.prevent="mobileMenuOpen = !mobileMenuOpen">Menu</a>
        <a href="#" class="MobileNav-menu-open" @click.prevent="mobileMenuOpen = !mobileMenuOpen">Close</a>
      </nav>
      <div class="SiteNav-container" :class="{ 'has-megaMenu': hasMegaMenu }">
        <nav aria-label="SiteNav" class="SiteNav" role="menubar" v-if="menuObject">
          <sitenavItem v-for="(item, index) in menuObject.items" v-on="$listeners" :key="index" :menu-item-object="item" />
        </nav>

        <nav aria-label="SiteNav--utility" class="SiteNav--utility" v-if="utilityMenuObject || $slots.utilityMenu">
          <!-- @slot For more control over the utility menu, use the utilityMenu slot. -->
          <slot name="utilityMenu" />
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { dgSiteNaveItem } from '@moodxd/capsule-ds';

export default {
  name: 'SiteNav',
  components: {
    sitenavItem: dgSiteNaveItem
  },
  props: {
    menuObject: { type: Object },
    utilityMenuObject: { type: Object },
    siteName: {
      type: String,
      default: 'Site Name'
    },
    hasMegaMenu: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    mobileMenuOpen: false,
    megaMenuOpen: false
  })
};
</script>

<style>
@import '@moodxd/theme-core';

@import '@moodxd/component-site-navigation';
@import '@moodxd/layout-container';

.SiteNav-container.has-megaMenu,
.SiteNav-container.has-megaMenu .SiteNav {
  @media (--lg-viewport) {
    position: static;
  }
}

@media (min-width: 981px) {
  .SiteNav-container {
    justify-content: flex-end !important;
  }
  .SiteNav--utility .SiteNav-item {
    display: block;
    line-height: 0px;
  }
}
</style>
