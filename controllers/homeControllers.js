import projectModel from "../models/projectModel.js";

const homeController = async (req, res) => {
  try {
    const projects = await projectModel.find();
    res.render("home", { projects });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export default homeController;
