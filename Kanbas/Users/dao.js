import model from "./model.js";

// Data Access Object (DAO) design pattern
// The Mongoose model created in the previous section provides low level functions such as find, create, updateOne, and deleteOne,
// that are deliberately vague since they need to be able to operate on any collection.
// It is good practice to wrap these low level generic functions into higher level functions
// that are specific to the use cases of the specific projects. For instance instead of just using the generic find() function,
// we'd prefer something such as findUsers() or findUserById() or findUserByUsername().

export const createUser = (user) => {
  // remove _id field just in case client sends it
  // delete operator removes a property from an object.
  delete user._id;
  // database will create _id for us instead
  // note the return statement for multi-line arrow function
  return model.create(user);
};
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>
  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });

export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });

export const deleteUser = (userId) => model.deleteOne({ _id: userId });
