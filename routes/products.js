const express = require('express')
const productsRepo = require('../repositories/products')

const router = express.Router()

router.get('/', async (req, res) => {
  const products = productsRepo.getAll()
  res.send('Products!!!!')
})

module.exports = router