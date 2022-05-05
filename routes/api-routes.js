const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/',controller.showIndex)

router.post('/add-todo', controller.addAllToDo)

router.get('/show-todo', controller.showAllToDo)

router.get('/perticular-todo/:id', controller.viewAToDo)

router.put('/modify-todo/:id', controller.modifyToDo)

router.delete('/delete-todo/:id', controller.deleteToDo)

module.exports = router