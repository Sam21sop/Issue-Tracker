import issueModel from "../models/issueModel.js";

class ProjectController {
  createProjectForm = (req, res) => {
    res.render("createProject");
  };


  createProject = async (req, res) => {
    try {
      const { name, description, author } = req.body;

      // Validate inputs (add more validation as needed)

      // Create a new project
      const newProject = new projectModel({ name, description, author });
      await newProject.save();

      res.redirect("/");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };


  projectDetails = async (req, res) => {
    try {
      const projectId = req.params.projectId;
      const project = await projectModel.findById(projectId);

      if (!project) {
        return res.status(404).send("Project not found.");
      }

      // Fetch issues related to the project
      let issues = await issueModel.find({ projectId });

      // Apply filters
      const { labels, author, search } = req.query;
      if (labels) {
        const labelsArray = labels.split(",").map((label) => label.trim());
        issues = issues.filter((issue) =>
          issue.labels.some((label) => labelsArray.includes(label))
        );
      }
      if (author) {
        issues = issues.filter((issue) =>
          issue.author.toLowerCase().includes(author.toLowerCase())
        );
      }
      if (search) {
        issues = issues.filter(
          (issue) =>
            issue.title.toLowerCase().includes(search.toLowerCase()) ||
            issue.description.toLowerCase().includes(search.toLowerCase())
        );
      }

      res.render("projectDetails", { project, issues });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
}

export default ProjectController;