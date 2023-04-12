const mongoose = require('mongoose');
const dbUri = 'mongodb+srv://saba:saba524@cluster0.0bypwzg.mongodb.net/test';

mongoose.connect(dbUri);

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
}