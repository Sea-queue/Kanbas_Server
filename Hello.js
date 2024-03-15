// console.log("Hello World");

export default function Hello(app) {
  app.get("/", (req, res) => {
    res.send("Welcome to Snell");
  });
  app.get("/hello", (req, res) => {
    res.send("Life is awesome");
  });
}
