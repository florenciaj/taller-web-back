const router = require('express').Router()
const { getProducts, getProduct, createProduct, changeProduct, deleteProduct } = require('../controller/productController')

router.get('/api/product', getProducts)

router.get('/api/product/:_id', getProduct)

router.post('/api/product', createProduct)

router.put('/api/product/:_id', changeProduct)

router.delete('/api/product/:_id', deleteProduct)

module.exports = router