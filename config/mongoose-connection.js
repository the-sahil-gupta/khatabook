const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/khaatabook')
    .then(() => {
        console.log('Connected to Database');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });
  

module.exports = mongoose.connection;
  


