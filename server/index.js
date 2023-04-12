const express = require('express');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/index');
const cors = require('cors');


const app = express();

//local imports
const connectDb = require('./db.js')
const recipeRoutes = require('./controllers/recipe.controller.js')

//middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }))
app.use('/api/recipes', recipeRoutes)
app.use(errorHandler)

connectDb().
    then(() => {
        console.log('Database connection established successfully!')
        app.listen(3000, () => console.log('Server successfully started at 3000'))
    })
    .catch(err => console.log(err))

