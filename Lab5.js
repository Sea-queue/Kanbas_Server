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
};
export default Lab5;
