const express = require("express")
const { addOne } = require("../controllers/QuizItems")
const router = express.Router()

router.post('/addOne',addOne )


module.exports = router