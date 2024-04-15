import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    description: String,
    course: { type: String, required: true },
    lessons: {
      type: String,
      id: String,
      name: String,
      description: String,
      module: String,
    },
  },
  { collection: "modules" }
);

export default moduleSchema;
