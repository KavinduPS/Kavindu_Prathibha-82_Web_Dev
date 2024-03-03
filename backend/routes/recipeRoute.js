const express = require('express');
const router = express.Router();
const {getRecipe, createRecipe} = require('../controllers/recipeControllers')

router.get('/', getRecipe);
router.post('/', createRecipe);

module.exports = router;