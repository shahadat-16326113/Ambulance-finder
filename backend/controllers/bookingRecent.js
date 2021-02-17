const Booking = require('../models/booking')


exports.get_booking_recent = (req, res) => {
    
    Booking
      .findById({...req.params})
      .then(() => {
        res.json({ message: 'All Recent Booking' })
      })
      .catch((err) => {
        console.log(err)
      })
}