const express = require('express')

const router = express.Router()

router.post('/cart/products', (req, res) => {
  

  res.send('Product added to cart')
})

module.exports = router