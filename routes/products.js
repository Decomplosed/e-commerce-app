const express = require('express')
const productsRepo = require('../repositories/products')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send('Products!!!!')
})

module.exports = router