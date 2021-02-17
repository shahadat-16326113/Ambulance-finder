const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    

    name: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    receiver:{
        type: String,
        required: true,
    }, 
    date: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
      
},

{ timestamps: true }

)

module.exports = mongoose.model('Review', reviewSchema)