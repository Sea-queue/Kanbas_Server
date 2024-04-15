import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    id: String,
    name: { type: String, required: true, unique: true },
    number: String,
    startDate: Date,
    endDate: Date,
    image: String,
  },
  { collection: "courses" }
);

export default courseSchema;
