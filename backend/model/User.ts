import { Document, model, Schema } from 'mongoose';

interface UserResponse extends Document {
  username: string;
  password: string;
  _id: string;
}

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

export default model<UserResponse>('User', User);
