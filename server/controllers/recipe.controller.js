const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Recipe = require('../models/recipe.model');
const { generateCrudMethods } = require('../services/index.js');
const { validateDbId, raise404Error } = require('../middleware');
const recipeCrud = generateCrudMethods(Recipe);

//get method
router.get('/', (req, res, next) => {
    recipeCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
})

//post method
router.post('/', (req, res, next) => {
    const newRecord = {
        recipeName: req.body.recipeName,
        recipeDetail: req.body.recipeDetail,
        recipeTime: req.body.recipeTime,
        recipeRating: req.body.recipeRating,

    }
    recipeCrud.create(newRecord)
        .then(data => res.status(201).json(data))
        .catch(err => next(err))
})

//search a specific recipe by id
router.get('/:id', validateDbId, (req, res, next) => {

    recipeCrud.getById(req.params.id)
        .then(data => {
            if (data) {
                res.send(data)
            }
            else { }
            raise404Error(req, res)
        })
        .catch(err => next(err))
})


//update method
router.put('/:id', validateDbId, (req, res, next) => {
    const updatedRecord = {
        recipeName: req.body.recipeName,
        recipeDetail: req.body.recipeDetail,
        recipeTime: req.body.recipeTime,
        recipeRating: req.body.recipeRating,

    }
    recipeCrud.update(req.params.id, updatedRecord)
        .then(data => {
            if (data) {
                res.send(data)
            }
            else { }
            raise404Error(req, res)
        })
        .catch(err => next(err))
})


//delete method
router.delete('/:id', validateDbId, (req, res, next) => {
    recipeCrud.delete(req.params.id)
        .then(data => {
            if (data) {
                res.send(data)
            }
            else { }
            raise404Error(req, res)
        })
        .catch(err => next(err))
})



module.exports = router