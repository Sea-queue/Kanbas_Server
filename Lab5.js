const assignment = {
  id: 1,
  title: "NODE.js Assignment",
  description: "create a nodejs server with express js",
  due: "2024-10-10",
  completed: false,
  score: 0,
};

const module = {
  id: 2,
  name: "Week 12",
  description: "Interpretor in OCaml",
  course: "NodeJS",
};

const Lab5 = (app) => {
  app.get("/a5/welcome", (req, res) => {
    res.send("Welcome to A5");
  });

  app.get("/a5/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString());
  });

  app.get("/a5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const subtraction = parseInt(a) - parseInt(b);
    res.send(subtraction.toString());
  });

  app.get("/a5/multiply/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const multiply = parseInt(a) * parseInt(b);
    res.send(multiply.toString());
  });

  app.get("/a5/divide/:a/:b", (req, res) => {
    const { a, b } = req.params;
    if (b === "0") {
      res.send("invalid denominator; try again...");
    } else {
      const divide = parseInt(a) / parseInt(b);
      res.send(divide.toString());
    }
  });

  app.get("/a5/calculator", (req, res) => {
    const { a, b, operation } = req.query;
    let result = 0;
    switch (operation) {
      case "add":
        result = parseInt(a) + parseInt(b);
        break;
      case "subtract":
        result = parseInt(a) - parseInt(b);
        break;
      case "multiply":
        result = parseInt(a) * parseInt(b);
        break;
      case "divide":
        if (b === "0") {
          result = "invalid denominator; try again...";
          break;
        } else {
          result = parseInt(a) / parseInt(b);
          break;
        }
      default:
        result = "Invalid operation";
    }
    res.send(result.toString());
  });

  app.get("/a5/assignment", (req, res) => {
    res.json(assignment);
  });

  app.get("/a5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });

  app.get("/a5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  app.get("/a5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = newScore;
    res.json(assignment);
  });

  app.get("/a5/assignment/status/:newStatus", (req, res) => {
    const { newStatus } = req.params;
    assignment.completed = newStatus;
    res.json(assignment);
  });

  app.get("/a5/module", (req, res) => {
    res.json(module);
  });

  app.get("/a5/module/name", (req, res) => {
    res.json(module.name);
  });

  app.get("/a5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.send(module);
  });

  app.get("/a5/module/description/:newDescription", (req, res) => {
    const { newDescription } = req.params;
    module.description = newDescription;
    res.send(module);
  });
};
export default Lab5;
