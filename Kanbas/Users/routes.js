import * as dao from "./dao.js";

// The variable will remember who is currently signed in as long as the server is running
// let currentUser = null;

// The Node.js server we've been implementing uses routes to interact with the user interface and the DAOs to talk to the database.
export default function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };
  const findUserById = async (req, res) => {};
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    // currentUser = await dao.findUserById(userId);
    res.session["currentUser"] = await dao.findUserById(userId);
    res.json(status);
  };

  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    // check if there's already a user with the username
    if (user) {
      res.status(400).json({ message: "Username already taken" });
      return;
    }
    // currentUser = await dao.createUser(req.body);
    const currentUser = await dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signin = async (req, res) => {
    const { username, password } = req.body;
    const userExist = await dao.findUserByUsername(req.body.username);
    // check if there's already a user with the username
    if (userExist) {
      const userCredentialCheck = await dao.findUserByCredentials(
        username,
        password
      );
      // check if there's a user with the username and password
      if (userCredentialCheck) {
        // currentUser = userCredentialCheck;
        // res.json(currentUser);
        req.session["currentUser"] = userCredentialCheck;
        res.json(userCredentialCheck);
        return;
      }
      res
        .status(400)
        .json({ message: "Username and Password didn't match! Try again!" });
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  };

  const signout = (req, res) => {
    // currentUser = null;
    req.session.destroy();
    res.sendStatus(200);
  };

  const profile = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };

  app.post("/api/users", createUser);
  app.delete("/api/users/:userId", deleteUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
