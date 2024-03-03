const asyncHandler = require('express-async-handler');
const Recipe = require('../models/recipeModel')
const User = require('../models/userModel')

// @desc Get recipe
// @route GET api/recipe

const getRecipe = asyncHandler(async (req, res) => {
try {
    const recipes = await Recipe.find({});
    res.status(200).json(recipes);
} catch (error) {
    req.status(500).json(error);
}
});

// @desc Set recipe
// @route POST api/recipe

const createRecipe = asyncHandler(async (req, res) => {
    const {ingredients, instructions, timeToCook} = req.body;
    if(!req.body.ingredients || !req.body.instructions || !req.body.timeToCook) {
            res.status(400);
            throw new Error("Please add all required fields");
    }
    
    const newRecipe = await Recipe.create({
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        timeToCook: req.body.timeToCook,
    })

    res.status(200).json(newRecipe);
})

module.exports = {getRecipe, createRecipe}