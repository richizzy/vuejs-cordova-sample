<template>
  <div class="Card u-mV3 u-textCenter">
    <div class="Grid u-pV3" v-for="data in cardData" :key="data.label">
      <div class="Grid-cell u-fontWeight600 u-size6of12 u-textLeft">{{ data.label }}</div>
      <div class="Grid-cell u-size6of12 u-textRight">{{ data.currency }}{{ data.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: ['cardData'],
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.Card {
  padding: 0;
  padding-top: 0.8rem;
  .Grid {
    border-bottom: 1px solid #c8c7cc;
  }
}
</style>
