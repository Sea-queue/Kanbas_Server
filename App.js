// before ES6 versions 12 where before module was created, need to use this style
// const express = require("express");
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";

const app = express();
app.use(cors());
Hello(app);
Lab5(app);
app.listen(4000);
