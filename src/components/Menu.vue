<template>
  <div class="menu-container">
    <!-- root level itens -->
    <ul>
      <a href="#" @click.prevent="updateMenu('menus')">Menu</a>
    </ul>

    <!-- context menu: children of root level itens -->
    <div v-if="side === 'right'" class="context-menu-container" v-show="showContextMenu">
      <div class="menu-label">Menu</div>
      <div>
        <div v-for="(item, index) in menuItems" :key="index">
          <div v-if="item.type === 'defaultState'" class="default-state">
            {{ item.txt }}
            <div class="select-state-label">
              <select @change="onChange($event)" class="select-state-label" v-model="defaultState">
                <option class="option-state-label" value="">None</option>
                <option
                  v-for="state in statesList"
                  :value="state.abbreviation"
                  v-bind:key="state.abbreviation"
                  class="option-state-label"
                  v-bind:selected="[getDefaultState() === state.abbreviation ? selected : notSelected]"
                >
                  {{ state.name }}
                </option>
              </select>
            </div>
          </div>
          <div v-else>
            <div v-if="item.link === ''" class="other-menu-items">{{ item.txt }}</div>
            <div v-else class="other-menu-items">
              <div v-if="item.externalLink === true">
                <a :href="item.link" :to="item.link" class="other-menu-items" :key="item.link" target="content">
                  {{ item.txt }}
                  <span class="u-textRight icon-display right_align Icon Icon--18 icon-utility-arrows-carrot_right-18"></span>
                </a>
              </div>
              <div v-if="item.externalLink === false">
                <router-link :to="{ path: `${item.link}` }" class="other-menu-items">
                  {{ item.txt }}
                  <span class="u-textRight icon-display right_align Icon Icon--18 icon-utility-arrows-carrot_right-18"></span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuData from '../../public/assets/samplejson/menu-data';
import statesList from '../../mockServer/data/states-list.json';
import LocalStorageService from '../services/LocalStorageService';

export default {
  name: 'Menu',

  data() {
    return {
      contextSection: '',
      menuItems: [],
      menuData: menuData,
      statesList: statesList,
      SELECTED_STATE: 'selected-state',
      defaultState: '',
      selected: 'selected',
      notSelected: '',
      initialLoad: true,
    };
  },
  props: {
    // alert types available: "alert", "success", "critical", "info"
    type: {
      validator: (value) => {
        return ['alert', 'success', 'critical', 'info'].indexOf(value) !== -1;
      },
    },
    // error, if any, to log
    error: [Error, Object],
    reason: String,
    side: String,
  },

  methods: {
    updateMenu(context) {
      this.contextSection = context;
      this.menuItems = this.menuData[context];
      if (context === 'home') {
        this.$router.push('/');
        window.bus.$emit('menu/closeMobileMenu');
      }
    },
    onChange(state) {
      LocalStorageService.setItem(this.SELECTED_STATE, state.target.value);
      this.defaultState = state.target.value;
    },
    getDefaultState() {
      LocalStorageService.getItem(this.SELECTED_STATE).then((defaultState) => {
        this.defaultState = defaultState;
        return defaultState;
      });
    },
  },
  mounted() {
    LocalStorageService.getItem(this.SELECTED_STATE).then((defaultState) => {
      this.defaultState = '';
      return defaultState;
    });
  },
  computed: {
    showContextMenu() {
      return this.menuItems.length;
    },
    wrapperClass() {
      return {
        toggled: this.isOpenMobileMenu === true,
      };
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.context-menu-container {
  position: absolute;
  margin-top: -8rem;
  width: 30rem;
  right: 0;
  height: 100%;
  background: #ffffff;
  text-align: left;
  display: inline-block;
  z-index: 3;
}

.menu-label {
  background: #124375;
  color: #ffffff;
  font-family: 'Source Sans Pro';
  font-size: 1.8rem;
  height: 5rem;
  padding-top: 1rem;
  padding-left: 1.5rem;
  border-bottom: 0.2rem solid #e5e5e5;
}
.default-state {
  font-size: 1.4rem;
  color: #5d5d5d;
  padding-left: 1.5rem;
  padding-top: 1rem;
}
.select-state {
  font-size: 1.6rem;
  color: black;
  padding-left: 1.5rem;
  padding-top: 0.8rem;
}
.select-state-label {
  font-size: 1.6rem;
  padding-top: 0rem;
  padding-left: 1.5rem;
  border-bottom: 0rem;
  border-top: 0rem;
  border-left: 0rem;
  border-right: 0rem;
  background: #ffffff;
  width: 25rem;
}
.option-state-label {
  font-size: calc(1.3rem + 0.390625vw);
  padding-top: 2rem;
  border-bottom: 0rem;
  border-top: 0rem;
  border-left: 0rem;
  border-right: 0rem;
  background: #ffffff;
}
.other-menu-items {
  font-size: 1.6rem;
  color: #5d5d5d;
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  height: 5rem;
  font-family: 'Source Sans Pro';
}

.right_align {
  float: right;
}
</style>
