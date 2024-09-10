const express = require('express');
const productsRouter = require('./products.routes.js');
const usersRouter = require('./users.routes.js');
const categoriesRouter = require('./categories.routes.js');


function routerApi(app){

  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;  //exportando o módulo para ser usado em outros ar
