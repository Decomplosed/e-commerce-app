const express = require('express')
const cartsRepo = require('../repositories/carts')

const router = express.Router()

router.post('/cart/products', async (req, res) => {
  if (!req.session.cartId) {
    const cart = await cartsRepo.create({ items: [] })
    req.session.cartId = cart.id
  } else {
    const cart = await cartsRepo.getOne(req.session.cartId)
  }

  res.send('Product added to cart')
})

module.exports = router