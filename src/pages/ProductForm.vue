<template>
  <div class="product-page">
    <loader v-if="showLoader"></loader>
    <alert :type="alert.type" :user-message="alert.userMessage" :error="alert.error" :reason="alert.reason" v-show="alert.userMessage"></alert>
    <div class="scroll-content" :class="{ error: alert.userMessage }" v-if="isProductDefinitionAvailable">
      <div class="Container u-md-size1of2 u-sizeFull">
        <EbpDynamicForm
          :productDefinition="productDefinition"
          :formName="formName"
          :context="context"
          :displayNav="displayNav"
          @form-wrapper-change-event="eventHandler"
          :display-global-validation="false"
        />
        <ProductFormButtons @clearForm="clearForm" @calculateForm="calculateForm" :calcEnable="calcEnableFlag"></ProductFormButtons>
      </div>
    </div>
    <CalculateModal
      v-if="isModalOpen && isDataAvailable"
      @closeModal="closeModal"
      :productDefinition="productDefinition"
      :formInfo="formInfo"
      :calculationResult="calculationResult"
      @newQuoteClick="clearForm"
    ></CalculateModal>
  </div>
</template>

<script>
import EbpDynamicForm from '@mooebp/dynamic-form-component';
import ProductFormButtons from '../components/ProductFormButtons';
import CalculateModal from '../components/CalculateModal';
import LocalStorageService from '../services/LocalStorageService';
// import productDefinition from '../../mockServer/data/products-list.json';
import ProductsApiService from '../services/ProductsApiService';
import AlertService from '../services/AlertService';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import constants from '../constants/constants.js';

export default {
  name: 'UIForm',
  components: {
    EbpDynamicForm,
    ProductFormButtons,
    CalculateModal,
    Loader,
    Alert,
  },
  data() {
    return {
      formName: 'eapp',
      context: constants.CONTEXT,
      displayNav: false,
      productDefinition: {},
      // productDefinition: productDefinition,
      formInfo: {},
      isModalOpen: false,
      calcEnableFlag: false,
      SELECTED_STATE: 'selected-state',
      defaultState: '',
      calculationResult: {},
      isDataAvailable: false,
      definitionData: {},
      showLoader: true,
      previousVal: '',
      isProductDefinitionAvailable: false,
      alert: {
        type: null,
        userMessage: null,
        error: null,
        reason: null,
      },
    };
  },
  computed: {
    calcEnable() {
      return this.calcEnableFlag;
    },
  },
  methods: {
    async eventHandler(formInfo) {
      this.formInfo = await formInfo;
      this.calcEnableFlag = this.formInfo.navigationData.tabDataObjects[0].complete;
      this.maintainCWLSelectedValues();
    },
    maintainCWLSelectedValues() {
      let formInfoFields = this.formInfo.dataRecord.insureds[0].additionalFields;
      if (formInfoFields.calculateType === constants.PREMIUM) {
        if (this.previousVal && this.previousVal !== formInfoFields.calculateType) {
          if (formInfoFields.faceAmount) {
            this.definitionData.faceAmount.defaultValue = formInfoFields.faceAmount;
          } else {
            this.productDefinition.fields.insureds.objectFields.additionalFields.objectFields = this.definitionData;
            this.productDefinition = JSON.parse(JSON.stringify(this.productDefinition));
          }
        } else {
          this.definitionData.faceAmount.defaultValue = formInfoFields.faceAmount;
        }
      } else if (formInfoFields.calculateType === constants.FACEAMOUNT) {
        if (this.previousVal && this.previousVal !== formInfoFields.calculateType) {
          this.definitionData.PaymentMode.defaultValue = formInfoFields.PaymentMode;
          if (formInfoFields.desiredPayment) {
            this.definitionData.desiredPayment.defaultValue = formInfoFields.desiredPayment;
          } else {
            this.productDefinition.fields.insureds.objectFields.additionalFields.objectFields = this.definitionData;
            this.productDefinition = JSON.parse(JSON.stringify(this.productDefinition));
          }
        } else {
          this.definitionData.desiredPayment.defaultValue = formInfoFields.desiredPayment;
          this.definitionData.PaymentMode.defaultValue = formInfoFields.PaymentMode;
        }
      }
      this.previousVal = formInfoFields.calculateType;
    },
    clearForm() {
      if (this.formInfo.dataRecord.insureds[0].additionalFields.calculateType === constants.FACEAMOUNT) {
        this.productDefinition.fields.insureds.objectFields.additionalFields.objectFields.calculateType.defaultValue = constants.FACEAMOUNT;
        this.productDefinition = JSON.parse(JSON.stringify(this.productDefinition));
      } else {
        this.productDefinition.fields.insureds.objectFields.additionalFields.objectFields.calculateType.defaultValue = constants.PREMIUM;
        this.productDefinition = JSON.parse(JSON.stringify(this.productDefinition));
      }
      this.isModalOpen = false;
      this.isDataAvailable = false;
    },
    calculateForm() {
      this.isModalOpen = true;
      this.getCalculation();
    },
    getCalculation() {
      this.showLoader = true;
      const payload = { data: this.formInfo.dataRecord, context: constants.CONTEXT };
      ProductsApiService.calculateResults(payload, this.$route.params.productCode)
        .then((response) => {
          this.isDataAvailable = true;
          this.calculationResult = response.data;
        })
        .catch((error) => {
          console.log(error);
          AlertService.handleAlert(this, 'alert', constants.ALERT_MSG, error, null);
        })
        .finally(() => {
          this.showLoader = false;
        });
    },
    closeModal() {
      this.isModalOpen = false;
      this.isDataAvailable = false;
    },
  },
  mounted() {
    this.showLoader = true;
    this.isProductDefinitionAvailable = false;
    ProductsApiService.getProductDefinition(this.$route.params.productCode)
      .then((response) => {
        this.productDefinition = JSON.parse(response.data.definition);
        LocalStorageService.getItem(this.SELECTED_STATE).then((defaultState) => {
          this.productDefinition.fields.insureds.objectFields.additionalFields.objectFields.states.defaultValue = defaultState;
          this.productDefinition = JSON.parse(JSON.stringify(this.productDefinition));
        });
        this.isProductDefinitionAvailable = true;
        this.definitionData = this.productDefinition.fields.insureds.objectFields.additionalFields.objectFields;
      })
      .catch((error) => {
        console.log(error);
        AlertService.handleAlert(this, 'alert', constants.ALERT_MSG, error, null);
      })
      .finally(() => {
        this.showLoader = false;
      });
  },
};
</script>

<style scoped lang="scss">
.modal-open {
  overflow-y: hidden;
}
.scroll-content {
  left: 0;
  right: 0;
  top: 40px;
  bottom: 0;
  position: absolute;
  z-index: 1;
  display: block;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
  contain: size style layout;
}
.error {
  top: 100px;
}
</style>
