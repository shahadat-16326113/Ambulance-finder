const router = require('express').Router()
const bookingRecentController = require('../controllers/bookingRecent')

router.get('/bookingRecent/:id', bookingRecentController.get_booking_recent)




module.exports = router