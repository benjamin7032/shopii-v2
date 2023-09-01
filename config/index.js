const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/shop');
        console.log('Connect successfully')
    }
    catch (err) {
        console.log('Error connecting')
    }
}

module.exports = { connect }