const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price:   
 {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required:   
 true,
  },
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer',
    required: true,
  },
  image: {
    type: String,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;