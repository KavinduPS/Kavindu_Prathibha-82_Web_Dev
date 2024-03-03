const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/recipes', require('./routes/recipeRoute'));
app.use('/api/users', require('./routes/userRoute'));

app.use(errorHandler);

app.listen(port, ()=> {
    console.log('Listning on port 5000');
})