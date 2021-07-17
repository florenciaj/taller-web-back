const router = require('express').Router();
const { getProducts, getProduct, createProduct, changeProduct, deleteProduct } = require('../controller/productController');
const { getUser, createUser } = require('../controller/userController');
const { getBills, getBill, createBill } = require('../controller/billController');

router.get('/api/product', getProducts)

router.get('/api/product/:_id', getProduct)

router.post('/api/product', createProduct)

router.put('/api/product/:_id', changeProduct)

router.delete('/api/product/:_id', deleteProduct)

router.get('/api/user/:firebaseId', getUser)

router.post('/api/user', createUser)

router.get('/api/bill/:_id', getBill)

router.get('/api/bills', getBills)

router.post('/api/bill', createBill)

module.exports = router