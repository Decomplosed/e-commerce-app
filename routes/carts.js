const express = require('express')
const cartsRepo = require('../repositories/carts')

const router = express.Router()

router.post('/cart/products', async (req, res) => {
  let cart
  if (!req.session.cartId) {
    cart = await cartsRepo.create({ items: [] })
    req.session.cartId = cart.id
  } else {
    cart = await cartsRepo.getOne(req.session.cartId)
  }

  const existingItem = cart.items.find(item => item.id === req.body.productId)


  res.send('Product added to cart')
})

module.exports = router