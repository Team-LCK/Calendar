const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title:{
        type:String,
        maxlength: 20
    },
    text:{
        type: String,
        maxlength: 100
    },
    year:{
        type: String        
    },
    month:{
        type: String
    },
    day:{
        type: String
    }
});

const Todo = mongoose.model('Todo',TodoSchema);

module.exports = {Todo};