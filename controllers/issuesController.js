import projectModel from "../models/projectModel.js";
import issueModel from "../models/issueModel.js";

export const createIssueForm = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const projectLabels = await projectModel.findById(projectId, "labels");
    res.render("createIssue", { labels: projectLabels.labels || [] });
  } catch (error) {
    // console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


export const createIssue = async (req, res) => {
  try {
    const { projectId, title, description, labels, author } = req.body;
    const newIssue = await issueModel({
      projectId,
      title,
      description,
      labels,
      author,
    });
    await newIssue.save();
    res.redirect(`/projects/${projectId}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


export const getAllIssues = async (req, res) =>{
  //get the projectId
  const projectId = req.params.projectId;

  // find all issues
  const allIssues = await issueModel.findById(projectId);

  // check if the issue is present of not
  if(!allIssues){
    return res.status(404).send("Issue not Fount")
  };

  // return res
  res.status(200).send("Issues found")

}
