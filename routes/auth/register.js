const express = require('express');
const router = express.Router();
const account = require('../../models/account');

router.get('/', (req, res) => {
    res.render('auth/register')
})

router.post('/', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var fullname = req.body.fullname;
    var address = req.body.address;
    var phone = req.body.phone;

    account.findOne({
        username: username,
    })
    .then(data => {
        if(data){
            res.json('da ton tai')
        }else{
            return account.create({
                username: username,
                password: password,
                role: 0,
                fullname: fullname,
                address: address,
                phone: phone
            })
        }
    })   
    .then(data => {
        res.render('auth/registerConfirm')
    })
    .catch(err => {
        res.status(500).json('Tao tk that bai')
    })
})

module.exports = router;