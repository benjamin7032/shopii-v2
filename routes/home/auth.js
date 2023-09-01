const express = require('express');
const router = express.Router();
const account = require('../../models/account');

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
            if(data){
                next()
            }
            else{
                console.log('k co quyen')
            }
        })
        .catch(err =>{

        })
    }
    catch(err){
        //console.log('loi token')
        res.redirect('/login')
    }
})

router.get('/', (req, res, next) => {
    res.render('home')
})

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
})

module.exports = router;