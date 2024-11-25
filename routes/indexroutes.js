const express = require('express')
const router = express.Router()

const thread_controller = require('../controllers/threadcontroller')

router.get("/", thread_controller.getAllThreads)

router.post("/", thread_controller.postThread)

router.get("/:id",  thread_controller.getThreadById)

router.post("/:id",  thread_controller.postThreadById)


module.exports = router