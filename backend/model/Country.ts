import { Document, Schema, model } from 'mongoose';

interface CountryResponse extends Document {
  username: string;
  capital: string;
  info: string;
  sights: any;
}

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

export default model<CountryResponse>('Country', schema);
