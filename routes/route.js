const router = require('express').Router()
const { getProducts, getProduct, createProduct, changeProduct, deleteProduct } = require('../controller/productController')
const { getUser, createUser } = require('../controller/userController')
const { body, validationResult } = require('express-validator');


router.get('/api/product', getProducts)

router.get('/api/product/:_id', getProduct)

router.post('/api/product', createProduct)

router.put('/api/product/:_id', changeProduct)

router.delete('/api/product/:_id', deleteProduct)


router.get('/api/user/:firebaseId'
    // ,
    //     body('email', 'Ingresar un email válido')
    //         .exists()
    //         .isEmail(),
    //     body('name', 'Ingresar un nombre')
    //         .exists()
    //         .isString()
    //         .isLength({ min: 3 }),
    //     body('surname', 'Ingresar un apellido')
    //         .exists()
    //         .isString()
    //         .isLength({ min: 3 }),
    //     body('address', 'Ingresar una dirección valida')
    //         .exists()
    //         .isLength({ min: 10 })
    , getUser)

router.post('/api/user', createUser)

module.exports = router