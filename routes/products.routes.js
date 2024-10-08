const express = require('express');
const{ faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/',(req,res)=>{
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

//debe ir antes de lo que es dinamico para que no choque
router.get('/filter', (req, res)=>{
  res.send('Yo soy un filter');
})

router.get('/:id', (req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name:'Product 2',
    price: 2000
  });
});

router.post('/', (req, res) =>{
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})

router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
})

router.delete('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'deleted',
    id,
  });
})

module.exports = router;

