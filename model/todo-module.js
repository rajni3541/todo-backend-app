const mongoose = require('mongoose')

const newSchema = new mongoose.Schema({
    todoName:{
        type:String,
        required:true
    },

    todoDescription:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('todo-list',newSchema)