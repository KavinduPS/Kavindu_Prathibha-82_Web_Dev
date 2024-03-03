const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getUserRecipes} = require('../controllers/userControllers')

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/profile', getUserRecipes);

module.exports = router;