const express = require('express');
const router = express.Router();
const account = require('../../models/account');
const product = require('../../models/product');

const jwt = require('jsonwebtoken')
const SECRET_KEY = 'secret'

const cookieParser = require('cookie-parser')
router.use(cookieParser());

router.use('/', (req, res, next) =>{
    try {
        var token = req.cookies.token
        var id = jwt.verify(token, SECRET_KEY)
        account.findOne({
            _id: id
        })
        .then(data => {
            var role = data.role
            if(role == 1){
                next()
            }
            else{
                res.render('admin/noPermission')
            }
        })
        .catch(err =>{

        })
    }
    catch(err){
        res.redirect('/login')
    }
})

router.get('/', (req, res, next) => {
    product.find({})
        .then(products => {
            products = products.map(product => product.toObject())
            res.render('admin', {products})
        })
        .catch(next)
})

module.exports = router;