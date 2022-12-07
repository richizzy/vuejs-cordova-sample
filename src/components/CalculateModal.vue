<template>
  <div class="modal-container">
    <div class="backdrop" @click="this.handleCloseClick"></div>
    <div class="calculate-section">
      <div class="calculate-section-container">
        <div class="modal-header">
          <div class="modal-close" @click="this.handleCloseClick">Close</div>
          <div class="corporate-logo"></div>
        </div>
        <div class="scroll-content">
          <h1 class="u-mB2 u-textCenter u-fontWeight500">{{ productName }}</h1>
          <h2 class="u-pH2">Summary</h2>
          <CalculationResult :calculationResult="calculationResult"></CalculationResult>
          <FormInformation :formInfo="formInfo"></FormInformation>
          <div class="u-textCenter u-pV4">
            <button type="button" class="Button" @click="this.handleNewQuoteClick">Start a New Quote</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalculationResult from './CalculationResult';
import FormInformation from './FormInformation.vue';
export default {
  name: 'CalculateModal',
  props: ['productDefinition', 'formInfo', 'calculationResult'],
  components: {
    CalculationResult,
    FormInformation,
  },
  data() {
    return {
      sticky: false,
      productName: '',
    };
  },
  mounted() {
    this.productName = this.productDefinition.uiForms.eapp.sections[0].rows[0].fields[0].label;
  },
  methods: {
    handleCloseClick: function () {
      this.$emit('closeModal');
    },
    handleNewQuoteClick: function () {
      this.$emit('newQuoteClick');
    },
  },
};
</script>

<style scoped lang="scss">
.modal-container {
  .calculate-section {
    position: absolute;
    background-color: #ffffff;
    left: calc(50% - (770px / 2));
    top: 8%;
    width: 770px;
    height: 84%;
    opacity: 1;
    transform: translateY(0px);
    z-index: 10;
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

  @media only screen and (max-width: 765px) {
    .calculate-section {
      left: 0;
      top: 0;
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      contain: size style;
    }
  }

  .modal-header {
    width: 100%;
    background: #003a70;
    padding: 1.2rem 1.5rem 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    .corporate-logo {
      background: url('../assets/mutual-reversed-white.svg') no-repeat;
      width: 14.8rem;
      height: 3.2rem;
      background-size: contain;
    }
    .modal-close {
      flex-direction: column;
      flex: 2;
      color: #ffffff;
      cursor: pointer;
    }
  }
  .scroll-content {
    padding: 16px calc(env(safe-area-inset-right) + 16px) 16px calc(env(safe-area-inset-left) + 16px);
    position: absolute;
    height: 80%;
    width: 100%;
    overflow-y: scroll;
    h1 {
      font-size: 2.6rem;
    }
    h2 {
      color: #007e8a;
      font-size: 2.4rem;
    }
    label {
      color: #444444;
    }
  }

  .calculate-section-container {
    height: 100%;
  }
}
</style>
