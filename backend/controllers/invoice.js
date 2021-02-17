const Booking = require('../models/booking')


exports.get_booking_recent_invoice = (req, res) => {
    
    Booking
      .findById({...req.params})
      .then(() => {
        res.json({ message: 'All Recent Booking Invoice' })
      })
      .catch((err) => {
        console.log(err)
      })
}