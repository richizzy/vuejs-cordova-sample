<template>
  <div class="Grid">
    <dg-card>
      <img :src="product.svg" height="125" width="125" />
      <h4 v-text="product.productName" :data-tid="product.productName + 'Big'" id="product.productName + 'CardName'"></h4>
      <h5 v-text="product.productType" :data-tid="product.productName + 'Small'" id="product.productType + 'CardType'"></h5>
      <div class="u-mT5">
        <dg-button
          :secondary="true"
          :fullWidth="true"
          @click="selectProduct(product)"
          :data-tid="product.productName + product.productType + 'BeginQuoteButton'"
          >Begin Quote</dg-button
        >
      </div>
    </dg-card>
  </div>
</template>

<script>
import { dgCard, dgButton } from '@moodxd/capsule-ds';

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  components: {
    'dg-card': dgCard,
    'dg-button': dgButton
  },
  methods: {
    selectProduct(product) {
      this.$emit('product-selected', product);
    }
  }
};
</script>
