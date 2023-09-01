const express = require('express');
const router = express.Router();
const product = require('../../models/product');

router.get('/', (req, res, next) => {
    product.find({})
        .then(products => {
            products = products.map(product => product.toObject())
            res.render('home/product', {products})
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    product.findOne({_id: req.params.id})
        .then(product => {
            product = product.toObject()
            res.render('home/productDetail', {product: product})
        })
        .catch(next)
})

module.exports = router;