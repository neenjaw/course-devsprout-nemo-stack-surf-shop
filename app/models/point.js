const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  coordinates: {
    type: [Number],
    required: true,
    validate: {
      validator: function(point) {
        const [longitude, latitude] = point;

        const validLongitude = longitude && (-180 <= longitude) && (longitude <= 180); 
        const validLatitude = latitude && (-90 <= latitude) && (latitude <= 90);

        return validLongitude && validLatitude;
      },
      message: props => `${props.value} is not a valid point.`
    }
  }
});

module.exports = {
  PointSchema: PointSchema,
  Point: mongoose.model('point', PointSchema)
};
