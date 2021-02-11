const router = require('express').Router()
const bookingRecentController = require('../controllers/bookingRecent')

router.get('/:id', bookingRecentController.get_booking_recent)




module.exports = router

