<template>
  <div id="quote-results" class="Grid-cell u-lg-before1of12 u-lg-size10of12 u-lg-after1of12">
    <div v-if="isLoading">
      <loader></loader>
    </div>
    <div v-else>
      <alert :type="alert.type" :user-message="alert.userMessage" :error="alert.error" v-if="alert.userMessage"></alert>
    </div>
    <div class="margin-top" />
    <div id="premium_cost_results" class="padding">
      <h1 align="center">Sample Quote Result Page</h1>
      <br />
      <h4 align="center">Premium Cost Information</h4>

      <table class="Table Table--striped">
        <tbody>
          <tr>
            <td>
              <b>{{ parseFloat('1') > 0 ? 'Monthly Premium After Discount' : 'Monthly Premium' }}</b>
            </td>
            <td align="right">
              <b>{{ monthlyPremium }}</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>{{ parseFloat('1') > 0 ? 'Quarterly Premium After Discount' : 'Quarterly Premium' }}</b>
            </td>
            <td align="right">
              <b>{{ quarterlyPremium }}</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>{{ parseFloat('1') > 0 ? 'Semi-Annual Premium After Discount' : 'Semi-Annual Premium' }}</b>
            </td>
            <td align="right">
              <b>{{ semiAnnualPremium }}</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>{{ parseFloat('1') > 0 ? 'Annual Premium After Discount' : 'Annual Premium' }}</b>
            </td>
            <td align="right">
              <b>{{ annualPremium }}</b>
            </td>
          </tr>
        </tbody>
      </table>

      <div align="right">
        <dg-button :data-tid="'newQuoteButton'" id="newQuoteButton" :secondary="true" @click="newQuoteButtonHandler">
          Start a new quote
        </dg-button>
      </div>

      <h1 id="quote-details" align="center" class="margin-top">Quote Details</h1>

      <div class="Grid">
        <div class="Grid-cell u-lg-size1of2 u-sizeFull">
          <div id="client_information" class="padding">
            <h4 align="center">Client Information</h4>
            <table class="Table Table--striped">
              <tbody>
                <tr>
                  <td class="column">Foo</td>
                  <td align="left">bar</td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dgButton } from '@moodxd/capsule-ds';
import { mapState } from 'vuex';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import { ResultComponentMixin } from '@/mixins/ResultComponentMixin';

export default {
  name: 'QuoteResults',
  mixins: [ResultComponentMixin],
  components: {
    'dg-button': dgButton,
    Loader,
    Alert
  },
  data() {
    return {
      isLoading: false,
      alert: {
        type: null,
        userMessage: null,
        error: null
      }
    };
  },
  computed: {
    ...mapState(['productId', 'productType', 'productDefinition', 'productDefinitionVersion', 'userData']),
    monthlyPremium: function() {
      return '$X.XX';
    },
    quarterlyPremium: function() {
      return '$X.XX';
    },
    semiAnnualPremium: function() {
      return '$X.XX';
    },
    annualPremium: function() {
      return '$X.XX';
    }
  },
  methods: {
    async newQuoteButtonHandler() {
      //TODO: do something once the 'start new quote' button is clicked
    }
  }
};
</script>

<style scoped>
.padding {
  padding: 20px;
}
.margin-top {
  margin-top: 50px;
}

.margin-bottom {
  margin-top: 200px;
}
.divider {
  width: 10px;
  height: auto;
  display: inline-block;
}

.column {
  width: 50%;
}
</style>
