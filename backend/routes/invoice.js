const router = require('express').Router()
const invoiceController = require('../controllers/invoice')

router.get('/invoice/:id', invoiceController.get_booking_recent_invoice)




module.exports = router