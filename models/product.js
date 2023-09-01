const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    name: {type: String},
    description: {type: String},
    imagePath: {type: String},
    price: {type: Number},
}, {
    timestamps: true
}); //tạo collection mới trong MongoDB tên là Products

module.exports = mongoose.model('Product', Product);