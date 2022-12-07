<template>
  <div class="button-section">
    <p class="requied-msg">All Fields are Required</p>
    <div class="buttons-grp">
      <button type="button" class="Button Button--flat u-md-size3of12" @click="this.handleClearClick">Clear</button>
      <button type="button" class="Button u-md-size3of12" @click="this.handleCalculatelick" :disabled="!calcEnable">Calculate</button>
    </div>
    <p class="product-footer">
      Life Insurance is underwritten by United of Omaha Life Insurance Company, Mutual of Omaha Plaza, Omaha, NE 68175. United of Omaha is licensed in
      all states except NY. Product base plans, provisions, features and riders may not be available in all states and may vary by state.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProductFormButtons',
  props: ['calcEnable'],
  methods: {
    handleClearClick: function () {
      this.$emit('clearForm');
    },
    handleCalculatelick: function () {
      this.$emit('calculateForm');
    },
  },
};
</script>

<style scoped lang="scss">
.button-section {
  text-align: right;
  padding: 1.6rem;
  .buttons-grp {
    padding: 12px 0;
    button {
      width: 100%;
      margin: 10px 0;
    }
  }
}
.product-footer {
  text-align: justify;
  padding: 12px 0;
  margin: 18px 0;
}
</style>
