const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Dinesh:qwertyuioplkjhgfdsa@cluster0.mnxslcl.mongodb.net/dineshdb", {})
    .then(() => {
        console.log('db connected');
    })
    .catch(err => {
        console.error('db connection error:', err);
    });

const dbfields = new mongoose.Schema({
    tabletype: {
        type: String
    },
    tableguest: {
        type: Number
    },
    date: {
        type: Date
    },
    time: {
        type: String
    },
    myemail: {
        type: String
    }
});

const modulefileexport = mongoose.model("Dineshdetails", dbfields);

module.exports = modulefileexport;