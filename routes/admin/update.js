const express = require('express');
const router = express.Router();
const product = require('../../models/product');

router.get('/:id', (req, res, next) => {
    product.findById(req.params.id)
        .then(product => {
            product = product.toObject()
            res.render('admin/updateProduct', {product})
        })
        .catch(next)
})

router.post('/:id', (req, res, next) => {
    product.updateOne({ _id: req.params.id}, req.body)
        .then(() => res.redirect('/admin'))
        .catch(next)
})

module.exports = router;