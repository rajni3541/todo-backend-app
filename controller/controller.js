const todoModule = require('../model/todo-module')

exports.showIndex = (req,res) =>{
    res.send("running node api")
}


exports.addAllToDo = (req,res) =>{
    const post = new todoModule({
        todoName:req.body.todoName,
        todoDescription:req.body.todoDescription
    })

    post.save()
    .then(data =>{res.send(data)})
    .catch(err =>{res.send(err)})
}

exports.showAllToDo = (req,res) =>{
    todoModule.find()
    .then(result =>{
        res.send(result)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
}

exports.viewAToDo = (req,res) => {
    todoModule.findById(req.params.id)
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.send(err)
    })
}


exports.modifyToDo = (req,res) =>{
    todoModule.findById(req.params.id , (err,todo)=>{
        if(err)
        res.send(err)
        todo.todoName = req.body.todoName ? req.body.todoName : todo.todoName
        todo.todoDescription = req.body.todoDescription ? req.body.todoDescription : todo.todoDescription

        todo.save((err) => {
            if(err)
            res.send(err)
            res.json({
                message: 'TODO UPDATED SUCCESSFULLY',
                data: todo
            })
        })
    })
}

exports.deleteToDo = (req,res) =>{
    todoModule.deleteOne({

        
        _id:req.params.id
    }, (err) =>{
        if(err)
        res.semd(err)

        res.json({
            status : "Success",
            message : `successfully deleted ToDo: ${req.params.id}`
        })
    })
}