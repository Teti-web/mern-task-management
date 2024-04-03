import { model, Schema, Document, Model } from "mongoose";
import mongoose from "mongoose";

// Define IUser interface
export interface IUser extends Document {
  name: string;
  email: string;
  phone?: string;
  password: string;
}

// Define UserSchema
const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

// Define and export User model
const User: Model<IUser> = model<IUser>("User", UserSchema);
export default User;
