const express = require('express')
router = express.Router()
userRoute = require('../controller/userController')

router.get('/', userRoute.userController)

module.exports = router