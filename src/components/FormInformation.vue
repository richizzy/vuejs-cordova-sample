<template>
  <div class="u-pH2">
    <div class="Grid u-pT2" @click="toggleFormInfo">
      <label class="u-pH2 u-pB2 Grid-cell u-size6of12 u-textLeft">Form Information</label>
      <div class="Grid-cell u-size6of12 u-textRight">
        <span v-if="expand" class="icon-display Icon Icon--18 icon-utility-arrows-carrot_down-18 u-fontWeight600"></span>
        <span v-else class="icon-display Icon Icon--18 icon-utility-arrows-carrot_right-18 u-fontWeight600"></span>
      </div>
    </div>
    <ResultCard v-if="expand" :cardData="cardData"></ResultCard>
  </div>
</template>

<script>
import ResultCard from './ResultCard';
import constants from '../constants/constants.js';
export default {
  name: 'FormInformation',
  props: ['formInfo'],
  components: {
    ResultCard,
  },
  data() {
    return {
      expand: false,
      cardData: [],
    };
  },
  mounted() {
    this.cardData = [];
    const fields = this.formInfo.dataRecord.insureds[0].additionalFields;
    if (fields.calculateType === constants.PREMIUM) {
      constants.cwl_premium_labels.forEach((item) => {
        this.cardData.push({ label: item.label, value: fields[item.value], currency: item.currency });
      });
    }

    if (fields.calculateType === constants.FACEAMOUNT) {
      constants.cwl_faceamount_labels.forEach((item) => {
        this.cardData.push({ label: item.label, value: fields[item.value], currency: item.currency });
      });
    }
  },
  methods: {
    toggleFormInfo: function () {
      this.expand = !this.expand;
    },
  },
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
.Grid {
  cursor: pointer;
}
</style>
