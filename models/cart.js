const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema({
    idAccount: {type: String},
    idProduct: {type: String},
    name: {type: String},
    price: {type: Number},
    imagePath: {type: String},
    quantity: {type: Number}
}, {
    timestamps: true
}); //tạo collection mới trong MongoDB tên là Carts

module.exports = mongoose.model('Cart', Cart);