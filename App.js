// before ES6 versions 12 where before module was created, need to use this style
// const express = require("express");
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import "dotenv/config";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();

// app.use(cors());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));
// this allows us to include the body in the requst
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Hello(app);
Lab5(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);
