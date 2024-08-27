const express = require("express")
const { testController } = require("../Controllers/test")

const router = express.Router()

router.get('/' , testController)

module.exports = router