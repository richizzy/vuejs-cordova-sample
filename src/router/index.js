import Vue from 'vue';
import Router from 'vue-router';
const ProductList = () => import('../pages/ProductList');
const ProductForm = () => import('../pages/ProductForm');
const ProductResults = () => import('../pages/ProductResults');
const About = () => import('../pages/About');
const Feedback = () => import('../pages/Feedback');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/mobile-quotes/',
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback,
    },
    {
      path: '/:productCode',
      name: 'ProductForm',
      component: ProductForm,
    },
    {
      path: '/:productId/results',
      name: 'ProductResults',
      component: ProductResults,
      props: true,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
