import model from "./model.js";

export const createModule = (module) => {
  delete module._id;
  return model.create(module);
};

export const findAllModule = (courseId) => model.find({ course: courseId });

export const updateModule = (moduleId, module) =>
  model.updateOne({ id: moduleId }, { $set: module });

export const deleteModule = (moduleId) => model.deleteOne({ id: moduleId });
