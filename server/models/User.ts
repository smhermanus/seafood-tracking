import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  role: string;
}

const userSchema: Schema = new Schema({
  email: String,
  password: String,
  role: String,
});

export default mongoose.model<IUser>('User', userSchema);