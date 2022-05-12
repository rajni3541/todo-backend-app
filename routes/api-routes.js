const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')
const cors = require('cors');

router.get('/',controller.showIndex)

router.post('/add-todo',cors(), controller.addAllToDo)

router.get('/show-todos',cors(), controller.showAllToDo)

router.get('/perticular-todo/:id',cors(), controller.viewAToDo)

router.put('/modify-todo/:id',cors(), controller.modifyToDo)

router.delete('/delete-todo/:id',cors(), controller.deleteToDo)

module.exports = router