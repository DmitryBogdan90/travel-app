import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    default: 'Cool country',
  },
  img: {
    type: String,
    default: '',
  },
  map: {
    type: Object,
    default: {
      lat: 51,
      lng: -0.91,
    },
  },
  video: {
    type: String,
  },
  sights: {
    type: [
      {
        img: { type: String, default: '' },
        name: { type: String },
        description: { type: String, default: 'Cool place' },
        rates: [
          {
            user: { type: String },
            rate: { type: Number },
          },
        ],
      },
    ],
    required: true,
    default: [],
  },
});

export default model('Country', schema);
