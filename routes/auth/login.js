const express = require('express');
const router = express.Router();
const account = require('../../models/account');

//jsonwebtoken
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'secret'

router.get('/', (req, res) => {
    res.render('auth/login');
})

router.post('/', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    account.findOne({ username: username, password: password})
        .then(data => {
            if(data){
                var token = jwt.sign({_id: data._id}, SECRET_KEY)
                res.cookie('token', token, { expires: new Date(Date.now() + 900000), httpOnly: true })
                res.redirect('/')
            }else{
                console.log('sai tk or mk')
                res.redirect('/login')
            }   
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;