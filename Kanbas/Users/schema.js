import mongoose from "mongoose";

// non relational database do not require specifying the structure, or schema of the data stored in collections.
// That responsibility has been delegated to the applications using the non relational databases.
// Mongoose schemas describe the structure of the data being stored in the database and
// it's used to validate the data being stored of modified through the Mongoose library.
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
  },
  { collection: "users" }
);

export default userSchema;
