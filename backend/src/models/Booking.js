const mongoose = require('mongoose');


// Create Table of Bookings
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    //relacionamento de id de usuario e id de spot
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
})

module.exports = mongoose.model('Booking', BookingSchema);