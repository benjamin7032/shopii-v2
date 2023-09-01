const express = require('express');
const router = express.Router();
const product = require('../../models/product');

router.get('/', (req, res) => {
    res.render('admin/addProduct')
})

router.post('/', (req, res, next) => {
    const newProduct = new product(req.body)
    newProduct.save()
        .then(() => res.redirect('/admin'))
        .catch(next)
})

module.exports = router;