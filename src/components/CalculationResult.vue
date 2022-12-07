<template>
  <div class="u-pH2">
    <label class="u-pH2 u-pB2" v-if="isCardWithLabel">Premiums</label>
    <ResultCard :cardData="cardData"></ResultCard>
  </div>
</template>

<script>
import ResultCard from './ResultCard';
import constants from '../constants/constants.js';
export default {
  name: 'CalculationResult',
  props: ['calculationResult'],
  components: {
    ResultCard,
  },
  data() {
    return {
      cardData: [],
      isCardWithLabel: true,
    };
  },
  mounted() {
    this.cardData = [];
    const fields = this.calculationResult.insureds[0].additionalFields;
    if (fields.calculateType === constants.PREMIUM) {
      constants.calculated_result_labels.forEach((item) => {
        let value = fields[item.value] ? parseFloat(fields[item.value]).toFixed(2) : 0;
        this.cardData.push({ label: item.label, value: value, currency: item.currency });
      });
    }

    if (fields.calculateType === constants.FACEAMOUNT) {
      this.isCardWithLabel = false;
      constants.faceamount_result_labels.forEach((item) => {
        let value = fields[item.value] ? parseFloat(fields[item.value]).toFixed(2) : 0;
        this.cardData.push({ label: item.label, value: value, currency: item.currency });
      });
    }
  },
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
