import { model, Schema, Document } from "mongoose";

const ProjectSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Blocked", "Done"],
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model<Document>("Project", ProjectSchema);
