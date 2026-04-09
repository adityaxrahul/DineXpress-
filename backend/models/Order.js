const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: false 
  },
  items: [
      {
          name: { type: String, required: true },
          price: { type: Number, required: true }
      }
  ],
  totalAmount: {
      type: Number,
      required: true
  },
  status: {
      type: String,
      default: 'Placed'
  },
  date: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('order', OrderSchema);
