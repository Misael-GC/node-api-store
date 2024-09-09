const express = require('express');
const{ faker } = require('@faker-js/faker');


const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('Hello World!');
});

app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola, soy una nueva ruta');
});

app.get('/products',(req,res)=>{
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
app.get('/product/filter', (req, res)=>{
  res.send('Yo soy un filter');
})

app.get('/products/:id', (req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name:'Product 2',
    price: 2000
  });
});

app.get('/users', (req, res) =>{
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay parametros')
  }
});


app.get('/categories/:categoryId/products/:productId', (req, res) =>{
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
});



