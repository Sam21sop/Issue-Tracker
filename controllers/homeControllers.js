import projectModel from "../models/projectModel.js";


export const homeController = async (req, res) => {
  try {
    const projects = await projectModel.find();
    // res.render("home");
    res.render("home", { projects });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
