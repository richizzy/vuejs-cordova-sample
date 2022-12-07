import ApiService from './ApiService';

const APPLICATION_JSON = 'application/json';

const ProductsApiService = {
  getProductDefinition(productId) {
    // setup request object
    const request = {
      url: '/products-process-api/v1/products/' + productId + '/active/definition',
      config: {
        auth: {
          username: '5068a8cd4f9c47b0842199300b693c80',
          password: '89edEb32300742b0A43A860E1e6742D8',
        },
        headers: {
          'Content-Type': APPLICATION_JSON,
          'Access-Control-Allow-Origin': '*',
        },
      },
    };
    // return a promise with a product definition callback
    return ApiService.get(request.url, request.config);
  },
  calculateResults(requestBody, productId) {
    // setup request object
    const request = {
      url: '/products-process-api/v1/products/' + productId + '/_calculate',
      body: requestBody,
      config: {
        auth: {
          username: '5068a8cd4f9c47b0842199300b693c80',
          password: '89edEb32300742b0A43A860E1e6742D8',
        },
        headers: {
          'Content-Type': APPLICATION_JSON,
          'Access-Control-Allow-Origin': '*',
        },
      },
    };
    // return a promise with calculateResults response callback
    return ApiService.post(request.url, request.body, request.config);
  },
};

export default ProductsApiService;
