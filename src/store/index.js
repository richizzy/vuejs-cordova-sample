import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const setInitialState = () => {
  return {
    productDefinition: {},
    productDefinitionVersion: '',
    productId: '',
    productType: '',
    userData: {},
    formIsValid: false
  };
};
export const mutations = {
  setProductDefinition: (state, productDefinition) => {
    state.productDefinition = productDefinition;
  },
  setProductDefinitionVersion: (state, productDefinitionVersion) => {
    state.productDefinitionVersion = productDefinitionVersion;
  },
  setProductId: (state, productId) => {
    state.productId = productId;
  },
  setProductType: (state, productType) => {
    state.productType = productType;
  },
  setDataRecordInProgress: (state, dataRecordInProgress) => {
    state.dataRecordInProgress = dataRecordInProgress;
  },
  setUserData: (state, userData) => {
    state.userData = userData;
  },
  setFormIsValid: (state, valid) => {
    state.formIsValid = valid;
  }
};

export default new Vuex.Store({
  state: setInitialState(),
  mutations
});
