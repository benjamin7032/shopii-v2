const express = require('express');
const router = express.Router();
const cart = require('../../models/cart');

const jwt = require('jsonwebtoken')
const SECRET_KEY = 'secret'

const cookieParser = require('cookie-parser')
router.use(cookieParser());

router.get('/', (req, res, next) => {
    try {
        var token = req.cookies.token
        var accountid = jwt.verify(token, SECRET_KEY)
        cart.find({
            idAccount: accountid
        })
        .then(data => {
            var sum = 0
            for(obj of data){
                sum += obj.price * obj.quantity
            }
            res.render('home/payment', {total: sum})

        })
        .catch(next)       
    } 
    catch (err) {}
})

router.post('/', (req, res, next) => {
    try {
        var token = req.cookies.token
        var accountid = jwt.verify(token, SECRET_KEY)
        cart.deleteMany({
            idAccount: accountid
        })
        .then(data => {
            res.render('home/thanks')
        })
        .catch(next)       
    } 
    catch (err) {}   
})

module.exports = router;