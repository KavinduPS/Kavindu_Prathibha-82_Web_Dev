const mongoose = require('mongoose');

const recipeScema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        ingredients: {
            type: [String],
            required: true
        },
        instructions: {
            type: String,
            required: true
        },
        timeToCook: {
            type: String,
            required: true
        }

    }
)

module.exports = mongoose.model('recipeModel', recipeScema);
