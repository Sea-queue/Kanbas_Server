import Database from "../Database/index.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses_db;
    res.send(courses);
  });

  app.post("/api/courses", (req, res) => {
    const course = { ...req.body, _id: new Date().getTime().toString() };
    Database.courses_db.push(course);
    res.send(course);
  });

  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses_db = Database.courses_db.filter((c) => c._id !== id);
    res.sendStatus(204);
  });

  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses_db = Database.courses_db.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });

  app.get("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = Database.courses_db.find((c) => c._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });
}
