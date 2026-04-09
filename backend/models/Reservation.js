const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  guests: { type: Number, required: true },
  request: { type: String, default: '' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('reservation', ReservationSchema);
