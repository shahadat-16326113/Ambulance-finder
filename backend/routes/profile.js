const router = require('express').Router()
const profileController = require('../controllers/profile')

router.post('/editUserProfile/:id', profileController.edit_user_profile)

router.post('/editDriverProfile/:id', profileController.edit_driver_profile)


module.exports = router