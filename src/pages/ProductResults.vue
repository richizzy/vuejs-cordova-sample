<template>
  <div id="product-results">
    <quote-results id="quote-results"></quote-results>
  </div>
</template>

<script>
import QuoteResults from '../components/QuoteResults';

export default {
  name: 'ProductResults',
  components: {
    'quote-results': QuoteResults
  },
  props: {
    productId: String
  }
};
</script>

<style scoped></style>
