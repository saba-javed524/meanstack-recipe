const ObjectId = require('mongoose').Types.ObjectId;


const validateDbId = (req, res, next) => {
    if (ObjectId.isValid(req.params.id) == false)
        res.status(400).json({
            error: 'given object id (${req.params.id}) is not valid'
        })
    else

        next()
}

const raise404Error = (req, res) => {
    res.status(404).json({
        error: 'no record with the given id : ' + req.params.id
    })
}

const errorHandler = (error, req, res, next) => {
    res.status(500).json({ error })
}

module.exports = {
    validateDbId,
    raise404Error,
    errorHandler
}