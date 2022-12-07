const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.listen(port, () => {
  console.log('JSON Server is running');
});

server.get('/ebp-quote/ebp-quote/api/products-list', (request, response) => {
  const products = require('./data/products-list');
  response.status(200).jsonp(products);
});

server.get('/ebp-quote/ebp-quote/api/persist-data/AD50AD', (request, response) => {
  response.status(200).jsonp({});
});

server.get('/ebp-quote/ebp-quote/api/persist-data/DIAO19', (request, response) => {
  response.status(200).jsonp({});
});

server.get('/ebp-quote/ebp-quote/api/product-definition/AD50AD', (request, response) => {
  const ad50ad = require('./data/AD50AD-product');
  const data = {
    version: '1.0-SNAPSHOT',
    definition: JSON.stringify(ad50ad)
  };
  response.status(200).jsonp(data);
});

server.get('/ebp-quote/ebp-quote/api/product-definition/DIAO19', (request, response) => {
  const diao = require('./data/DIAO19-product');
  const data = {
    version: '1.0-SNAPSHOT',
    definition: JSON.stringify(diao)
  };
  response.status(200).jsonp(data);
});

server.post('/ebp-quote/ebp-quote/api/rates/DIAO19/1.0-SNAPSHOT', (request, response) => {
  const data = [
    {
      autoIncreaseBenefitRider: '1',
      baseAo: '0.0581',
      futureInsurabilityOptionRider: '1',
      modalFactors: '0.0875',
      occupationClassFactors: '0.8',
      sisAo: '0.0533',
      tobaccoFactor: '1',
      uwClassFactors: '1'
    }
  ];
  response.status(200).jsonp(data);
});

server.post('/ebp-quote/ebp-quote/api/rates/AD50AD/1.0-SNAPSHOT', (request, response) => {
  const data = [
    {
      baseRate: '1.35',
      spouseRate: '0.72',
      childrenRate: '0.41',
      modalFactors: '0.0875',
      ropRiderFactors: '1.4'
    }
  ];
  response.status(200).jsonp(data);
});
