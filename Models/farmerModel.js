const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  profileImage:   
 {
    type: String,
  },
});

const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;
