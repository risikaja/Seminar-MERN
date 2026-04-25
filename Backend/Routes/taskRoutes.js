const express = require("express");
const { getTasks, setTask, updateTask, deleteTask } = require("../Controllers/taskControllers");
const router = express.Router();


//Routes

router.get('/', getTasks);

router.post('/', setTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);


module.exports = router;