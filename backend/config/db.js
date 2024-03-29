const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/recipeApp');
        console.log("MongoDB Connected!")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports =  connectDB;