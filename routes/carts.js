const express = require('express')
const cartsRepo = require('../repositories/carts')

const router = express.Router()

router.post('/cart/products', (req, res) => {
  if (!req.session.cartId) {

  } else {

  }

  res.send('Product added to cart')
})

module.exports = router