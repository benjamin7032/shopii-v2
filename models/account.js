const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Account = new Schema({
    username: {type: String},
    password: {type: String},
    role: {type: Number},
    fullname: {type: String},
    address: {type: String},
    phone: {type: String},
}, {
    timestamps: true
}); //tạo collection mới trong MongoDB tên là accounts

module.exports = mongoose.model('Account', Account);