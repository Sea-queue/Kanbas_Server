// import Database from "../Database/index.js";
import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  // get all courses
  app.get("/api/courses", async (req, res) => {
    // const courses = Database.courses_db;
    // res.send(courses);
    const courses = await dao.findAllCourse();
    res.json(courses);
  });

  app.post("/api/courses", async (req, res) => {
    // const course = { ...req.body, _id: new Date().getTime().toString() };
    // Database.courses_db.push(course);
    // res.send(course);
    const course = await dao.createCourse(req.body);
    res.json(course);
  });

  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    // Database.courses_db = Database.courses_db.filter((c) => c._id !== id);
    // res.sendStatus(204);
    try {
      const status = await dao.deleteCourse(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  });

  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    try {
      const status = await dao.updateCourse(id, course);
      res.sendStatus(204);
    } catch (error) {
      res.sendStatus(400);
    }
    // Database.courses_db = Database.courses_db.map((c) =>
    //   c._id === id ? { ...c, ...course } : c
    // );
  });

  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const course = await dao.findCourseById(id);
      res.send(course);
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
    // const course = Database.courses_db.find((c) => c._id === id);
    // if (!course) {
    //   res.status(404).send("Course not found");
    //   return;
    // }
    // res.send(course);
  });
}
