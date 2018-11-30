const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://oguzuser:123456a789@ds115434.mlab.com:15434/readyexample', { userMongoClient: true });
    
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    
    mongoose.connection.on('error', (err) => {
        console.log('MongoDb: error', err);
    });
}
