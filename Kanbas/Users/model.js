import mongoose from "mongoose";
import schema from "./schema.js";

// Mongoose models provide functions to interact with MongoDB programmatically.
// The functions are: find(), create(), updateOne(), removeOne(), etc.
// create mongoose model from the schema
const model = mongoose.model("UserModel", schema);
export default model;
