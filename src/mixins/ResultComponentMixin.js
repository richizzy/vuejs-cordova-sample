import { mapMutations, mapState } from 'vuex';

export const ResultComponentMixin = {
  computed: {
    ...mapState([
      'applicationId',
      'dataRecordWithPremiums',
      'quoteName',
      'rootApplicationId',
      'parentApplicationId',
      'productId',
      'productDefinition',
      'appEntityVersion',
      'userData'
    ]),
    saveRequestObject: function() {
      return {
        formData: this.dataRecordWithPremiums,
        quoteData: {
          quoteName: this.quoteName,
          rootApplicationId: this.rootApplicationId,
          parentApplicationId: this.parentApplicationId
        }
      };
    }
  },
  methods: {
    ...mapMutations([]),
    recordData() {
      // TODO: placeholder for method to record quoted data
    }
  }
};
