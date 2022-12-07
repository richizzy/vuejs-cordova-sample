<template>
  <nav class="CorporateNav">
    <div class="CorporateNav-container home-display">
      <div v-show="pageFlag" class="CorporateNav-logo">
        <span class="icon-home corporatenav-logo" @click="$router.push('/')"></span>
      </div>
      <div v-show="!pageFlag" class="CorporateNav-logo home-button">
        <span class="icon-home" @click="$router.push('/')">
          <span class="span-focus">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 72 72">
              <g fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                <path id="hover-focus" d="M11.867 36H62M35.14 61L10 36.005 35.14 11" stroke-width="4.6"></path>
              </g>
            </svg>
          </span>
          {{ home }}
        </span>
      </div>
      <div v-show="!pageFlag" class="CorporateNav-menu corporatenav-logo logo-position"></div>
    </div>
  </nav>
</template>
<script>
export default {
  props: ['home', 'pageFlag'],

  mounted() {},
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.corporatenav-logo {
  padding-top: 3px;
  background: url('../assets/mutual-reversed-white.svg') no-repeat;
  width: 14.8rem;
  height: 3.2rem;
  background-size: contain;
}
.logo-position {
  position: fixed;
  right: 0.5rem;
  top: 0.3rem;
}
.CorporateNav {
  width: 100%;
}
.home-display {
  margin-left: 0px;
}
.home-button {
  display: inline-block;
  padding: 0.9rem 0.9rem 0.9rem;
  font-size: calc(1.2rem + 0.390625vw);
  line-height: 2rem;
  color: #ffffff;
  transition: color 0.4s;
  align-items: center;
}
.icon-home {
  display: flex;
  vertical-align: middle;
}
.home-button:hover,
.home-button:focus {
  color: #838383;
  cursor: pointer;
}
#hover-focus:hover,
#hover-focus:focus {
  stroke: #838383;
}
.span-focus:focus {
  stroke: #838383 !important;
}
</style>
