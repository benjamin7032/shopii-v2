const express = require('express');
const router = express.Router();
const product = require('../../models/product');
const cart = require('../../models/cart');

const jwt = require('jsonwebtoken')
const SECRET_KEY = 'secret'

const cookieParser = require('cookie-parser')
router.use(cookieParser());

router.get('/:id', (req, res, next) => {
    try {
        product.findOne({_id: req.params.id})
        .then(prd => {
            var token = req.cookies.token
            var accountid = jwt.verify(token, SECRET_KEY)
            cart.findOne({
                idAccount: accountid,
                idProduct: prd._id
            })
            .then(data => {
                if(data){
                    return cart.updateOne({
                        idAccount: accountid,
                        idProduct: prd._id
                    }, {
                        quantity: data.quantity + 1
                    })
                }else{
                    return cart.create({
                        idAccount: accountid,
                        idProduct: prd._id,
                        name: prd.name,
                        price: prd.price,
                        imagePath: prd.imagePath,
                        quantity: 1
                    })
                }
            })
        })       
        .then(data => {
            res.redirect('/product')
        })
        
    } 
    catch (err) {

    }
})

router.get('/', (req, res, next) => {
    try {
        var token = req.cookies.token
        var accountid = jwt.verify(token, SECRET_KEY)
        cart.find({
            idAccount: accountid
        })
        .then(data => {
            if(data){
                var sum = 0
                for(obj of data){
                    sum += obj.price * obj.quantity
                }
                data = data.map(dt => dt.toObject())
                if(sum){
                    res.render('home/cart', {carts: data, total: sum})
                }
                else{
                    res.render('home/cart', {message: 'Cart empty'})
                }
            }else{
                
            }
        })
        .catch(next)       
    } 
    catch (err) {

    }
})

module.exports = router