const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    validate: {
      validator: function(v) {
        return (-90 <= v) && (v <= 90);
      },
      message: props => `${props.value} is not a valid latitude`
    }
  },
  longitude: {
    type: Number,
    validate: {
      validator: function(v) {
        return (-180 <= v) && (v <= 180);
      },
      message: props => `${props.value} is not a valid longitude`
    }
  }
});

module.exports = {
  LocationSchema: LocationSchema,
  Location: mongoose.model('location', LocationSchema)
};