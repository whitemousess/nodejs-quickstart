const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/shop-api');
        console.log("connection successfully");
    } catch (error) {
        console.log("connection error", error);
    }

}


module.exports = {connect};