const mongoose = require('mongoose');

module.exports = mongoose.model('Recipe', {
    recipeName: { type: String },
    recipeDescription: { type: String },
    recipeTime: { type: String },
    recipeRating: { type: Number },
},)