const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({


    id: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    status:{
        type: Boolean,
        required: true,
    },

})

module.exports = mongoose.model('Booking', bookingSchema)