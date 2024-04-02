import Database from "../Database/index.js";

function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = Database.modules.filter((m) => m.course === cid);
    console.log("get all", modules);
    res.send(modules);
  });

  app.post("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    Database.modules.push(newModule);
    res.send(newModule);
  });

  app.delete("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    Database.modules = Database.modules.filter((m) => m._id !== mid);
    res.sendStatus(200);
  });

  app.put("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    Database.modules = Database.modules.map((m) => {
      if (m._id === mid) {
        return req.body;
      } else {
        return m;
      }
    });
    // This is not persistent!
    // const moduleIndex = Database.modules.findIndex((m) => {
    //   m._id === mid;
    // });
    // Database.modules[moduleIndex] = {
    //   ...Database.modules[moduleIndex],
    //   ...req.body,
    // };
    // Database.modules.push(Database.modules[moduleIndex]);
    // console.log(Database.modules[moduleIndex]);
    res.sendStatus(204);
  });
}

export default ModuleRoutes;
