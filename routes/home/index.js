const express = require('express');
const router = express.Router();

const authRouter = require('./auth')
const aboutRouter = require('./about')
const cartRouter = require('./cart')
const contactRouter = require('./contact')
const paymentRouter = require('./payment')
const productRouter = require('./product')

router.use('/', authRouter)
router.use('/about', aboutRouter)
router.use('/cart', cartRouter)
router.use('/contact', contactRouter)
router.use('/payment', paymentRouter)
router.use('/product', productRouter)

module.exports = router;