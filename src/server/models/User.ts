import { model, Schema, Document } from "mongoose";

const UserSchema = new Schema({
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

export default model<Document>("User", UserSchema);
