const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        savedRecipes: 
        [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],

    }
)

module.exports = mongoose.model('userModel', userSchema);