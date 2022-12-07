<template>
  <section id="product-list">
    <loader id="loader" v-show="isLoading"></loader>
    <div v-show="!isLoading">
      <div id="content" class="u-pV7 u-pA3">
        <div class="Grid">
          <div class="navigation-placeholder u-sizeFull u-pH4">
            <span class="quotes-heading-label"> Quotes for Sales Professionals </span>
            <!--span class="menu-right"> <a href="#">Menu</a></span-->
            <span v-on:click.capture="changeSide('right')" class="menu-right">
              <Menu v-bind:side="side"></Menu>
            </span>
          </div>
          <div class="Container u-sm-size3of4 u-md-size3of4 u-lg-size6of12 u-sizeFull">
            <div class="Grid quotelable-customize">
              <div class="Grid-cell u-sm-size6of12 u-md-size6of12 u-lg-size6of12 u-size2of4">
                <div class="u-textLeft u-mB10 quote-label">Start a Quote</div>
              </div>
              <div class="Grid-cell u-sm-size6of12 u-md-size6of12 u-lg-size6of12 u-size2of4 u-textRight custom-btn-div">
                <span type="button" class="Button Button--flat u-mB10 custom-button" @click="toggleEdit()"> {{ editButtonText }} </span>
              </div>
            </div>
            <div class="Grid-cell u-pA0">
              <draggable
                :disabled="editing === false"
                v-model="products"
                handle=".handle"
                @start="drag = true"
                @end="drag = false"
                v-bind="dragOptions"
              >
                <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                  <div
                    class="Grid-cell u-textLeft u-mB2 u-pA3 div-out"
                    v-for="product in products"
                    :key="product.productId"
                    :class="{
                      hide: product.hidden && !editing,
                      show: !product.hidden && editing,
                      disable: product.hidden && editing,
                    }"
                  >
                    <router-link :to="!editing ? { path: `${product.productCode}` } : {}">
                      <div class="Grid-cell u-size11of12 product-display" @dragstart.prevent.stop>
                        <span v-show="editing === true && product.hidden === false" @click="hideAndShow(product)">
                          <visabilityIcon />
                        </span>
                        <span v-show="editing === true && product.hidden === true" @click="hideAndShow(product)">
                          <span class="Icon Icon--32 icon-utility-basics-visability_off-32"></span>
                        </span>
                        <span :class="{ edit: editing, quote: !editing }">
                          {{ product.productName }}
                        </span>
                      </div>
                      <div class="Grid-cell u-size1of12 u-pA0">
                        <div class="u-textRight icon-display">
                          <span class="handle" v-show="editing == true && product.hidden === false">
                            <hamburgerMenuIcon strokeColor="white" />
                          </span>
                          <span class="handle" v-show="editing == true && product.hidden === true">
                            <hamburgerMenuIcon strokeColor="hide" />
                          </span>
                          <span v-show="editing == false" class="Icon Icon--18 icon-utility-arrows-carrot_right-18"></span>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </transition-group>
              </draggable>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-on:click.capture="changeSide('left')" v-if="side === 'right'" class="menu-backdrop"></div>
  </section>
</template>

<script>
// import ProductsApiService from '../services/ProductsApiService';
import Loader from '../components/Loader';
import productsData from '../../public/assets/samplejson/productList.json';
import LocalStorageService from '../services/LocalStorageService';
import draggable from 'vuedraggable';
import visabilityIcon from '@/components/VisabilityIcon';
import hamburgerMenuIcon from '@/components/HamburgerMenuIcon';
import Menu from '../components/Menu.vue';
export default {
  name: 'ProductList',
  components: {
    Loader,
    draggable,
    visabilityIcon,
    hamburgerMenuIcon,
    Menu,
  },
  data() {
    return {
      products: productsData,
      filterProduct: null,
      isLoading: true,
      editButtonText: 'Customize List',
      editing: false,
      hiddenProduct: [],
      MOO_QUOTES_PRODUCT_ORDER_KEY: 'moo-quotes-product-order',
      MOO_QUOTES_HIDDEN_PRODUCTS_KEY: 'moo-quotes-hidden-products',
      drag: false,
      side: '',
    };
  },
  mounted() {
    this.isLoading = false;
    this.getProductList();
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      };
    },
  },
  methods: {
    getProductList() {
      LocalStorageService.getItem(this.MOO_QUOTES_PRODUCT_ORDER_KEY).then((lsProductOrder) => {
        // If settings store does NOT have a product list create one.
        if (lsProductOrder === null) {
          this.getProductListWithHiddenProduct();
        } else {
          // If settings store has a product list create the stored list for display.
          this.getProductListByLocalStorageOrder(lsProductOrder);
        }
      });
    },
    /***
     *  Method to create a map of products and the order in which each product will be displayed.
     *  @param productList
     *  @returns {{}}
     */
    createOrderMap(productList) {
      const obj = {};
      for (let i = 0; i < productList.length; ++i) {
        const p = productList[i];
        obj[p.productCode] = p.productId;
      }
      return obj;
    },
    // updating this.products according to hidden productCode
    getProductListWithHiddenProduct() {
      LocalStorageService.getItem(this.MOO_QUOTES_HIDDEN_PRODUCTS_KEY).then((value) => {
        if (value === null) {
          console.log('No local storage value', this.products);
        } else {
          this.filterProduct = JSON.parse(value);
          for (let i = 0; i < this.filterProduct.length; i++) {
            this.products.filter((el) => el.productCode.includes(this.filterProduct[i])).map((el) => (el.hidden = true));
          }
        }
      });
    },
    /**
     * an ordered product list that uses the product order from the local storage settings store
     *
     * @param lsProductOrder
     */
    async getProductListByLocalStorageOrder(lsProductOrder) {
      // Get the productCode/ProductId from the Local store.
      const orderMap = JSON.parse(lsProductOrder);
      let onlyKeys = Object.keys(orderMap);
      //Rearrange the products list according to local store
      await this.products.sort(function (a, b) {
        return onlyKeys.indexOf(a.productCode) - onlyKeys.indexOf(b.productCode);
      });
      await this.getProductListWithHiddenProduct();
    },
    /***
     * Method used to toggle the product list screen between edit/non-edit mode and toggle the edit/done button text.
     */
    toggleEdit() {
      this.editing = !this.editing;
      if (this.editing) {
        this.editButtonText = 'Done';
      } else {
        this.editButtonText = 'Customize List';
        this.hiddenProduct = [];
        for (let i of this.products) {
          if (i.hidden) {
            this.hiddenProduct.push(i.productCode);
          }
        }
        //Storing hidden product code in Local Storage like ["cwl"]
        LocalStorageService.setItem(this.MOO_QUOTES_HIDDEN_PRODUCTS_KEY, JSON.stringify(this.hiddenProduct));
        //Storing hidden product code in Local Storage like {"ga":3,"lp":6,"iule":4,"ca":2,"cwl":1,"id":5,"tle":10,"lc":7,"ms":8,"tla":9}
        LocalStorageService.setItem(this.MOO_QUOTES_PRODUCT_ORDER_KEY, JSON.stringify(this.createOrderMap(this.products)));
        this.getProductList();
      }
    },
    /**
     * Function to toggle the hidden property of the product that is passed in (clicked)
     *
     * @param product
     */
    hideAndShow(product) {
      product.hidden = !product.hidden;
    },
    move(event) {
      event.target.style.opacity = '0.5';
    },
    changeSide(side) {
      this.side = side;
    },
  },
};
</script>

<style scoped>
* {
  outline: none !important;
  box-sizing: border-box;
}
.quote-label {
  text-align: center;
  color: #5d5d5d;
  font-family: 'Source Sans Pro Light';
  font-size: calc(2.7rem + 0.390625vw);
  padding-top: 2.5rem;
}
.custom-btn-div {
  padding-top: 1.3rem;
}
.custom-button {
  padding: 1.5rem 0.3rem;
}
.product-display {
  padding-left: 3px;
  display: flex !important;
}
.icon-display {
  padding-right: 0.7rem;
}
.hide {
  display: none !important;
}
.show {
  background-color: #68b1f4;
  border-radius: 0.5rem;
}
.disable {
  background-color: #e5e5e5;
  border-radius: 0.5rem;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.1;
}
.over {
  opacity: 1;
}
.edit {
  text-align: left;
  color: #ffffff;
  font-family: 'Source Sans Pro';
  font-size: calc(2rem + 0.390625vw);
  align-items: center;
  vertical-align: middle;
  margin-top: 0.6rem;
  padding-left: 0.2rem;
}
.quote {
  text-align: left;
  color: #105fa8;
  font-family: 'Source Sans Pro';
  font-size: calc(1.9rem + 0.390625vw);
  margin: 1px 0px 10px 0px;
}
.quotes-heading-label {
  text-align: left;
  color: #105fa8;
  font-family: 'Source Sans Pro Light';
  font-size: calc(1.8rem + 0.390625vw);
  display: inline-block;
  width: 80%;
  padding-right: 0rem;
}
.menu-right {
  display: inline-block;
  width: 20%;
  text-align: right;
  padding-right: 0rem;
}
.navigation-placeholder {
  height: 50px;
  width: 100%;
  border-bottom: 0.2rem solid #e5e5e5;
}
.menu-backdrop {
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
@media only screen and (max-width: 600px) {
  .quote-label {
    font-size: 2.6rem;
  }
}
</style>
