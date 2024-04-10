// before ES6 versions 12 where before module was created, need to use this style
// const express = require("express");
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import ChatCompletionRoutes from "./OpenAI/Chat/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
ChatCompletionRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
