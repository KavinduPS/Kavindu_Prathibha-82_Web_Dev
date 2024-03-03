const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

// @desc Register a user
// @route POST api/users/

const registerUser = asyncHandler( async (req, res) => {
    const {firstName, lastName, username, password} = req.body;
    if(!firstName || !lastName || !username || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    //Checking if user exits
    const checkUser = await User.findOne({username})
    if(checkUser) {
        res.status(400)
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({firstName, lastName, username, password: hashedPassword});

    if(newUser) {
        res.status(201).json({_id: newUser.id, firstName: newUser.firstName, lastName: newUser.lastName, username: newUser.username, token: generateJWT(newUser.id)});  
    }
    else {
        res.status(400)
        throw new Error("Error creating user");
    }
})

// @desc Login a user
// @route POST api/users/login

const loginUser = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password) {
        res.status(400);
        throw new Error("Login fields cannot be empty");
    }

    //Check for user email
    const checkUser = await User.findOne({username});

    if(checkUser && (await bcrypt.compare(password, checkUser.password))) {
        res.json({_id: checkUser.id, firstName: checkUser.firstName, lastName: checkUser.lastName, username: checkUser.username, token: generateJWT(checkUser.id)})
    }
    else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
})

// @desc Get user data
// @route GET api/users/profile
const getUserRecipes = asyncHandler(async (req, res) => {
    const {_id, username, savedRecipes} = await User.findById(req.user.id);
    res.status(200).json({id: _id, username, savedRecipes});

})


//Generate token
const generateJWT = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '7d'})
} 
module.exports = {registerUser, loginUser, getUserRecipes}