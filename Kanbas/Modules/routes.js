// import Database from "../Database/index.js";
import * as dao from "./dao.js";

function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    // const modules = Database.modules.filter((m) => m.course === cid);
    try {
      const modules = await dao.findAllModule(cid);
      res.send(modules);
    } catch (error) {
      res.sendStatus(404);
    }
  });

  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
    };
    // Database.modules.push(newModule);
    try {
      const addedModule = await dao.createModule(newModule);
      res.send(addedModule);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    // Database.modules = Database.modules.filter((m) => m._id !== mid);
    try {
      const status = await dao.deleteModule(mid);
      res.sendStatus(status);
    } catch (error) {
      res.sendStatus(error);
    }
  });

  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    try {
      const status = await dao.updateModule(mid, module);
      res.sendStatus(status);
    } catch (error) {
      res.sendStatus(400);
    }

    // Database.modules = Database.modules.map((m) => {
    //   if (m._id === mid) {
    //     return req.body;
    //   } else {
    //     return m;
    //   }
    // });
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
    // res.sendStatus(204);
  });
}

export default ModuleRoutes;
