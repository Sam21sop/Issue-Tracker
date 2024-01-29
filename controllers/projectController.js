import projectModel from "../models/projectModel.js";
import issueModel from "../models/issueModel.js";

export const createProjectForm = (req, res) => {
  res.render('createProject');
};

export const createProject = async (req, res) => {
  try {
    const { name, description, author } = req.body;

    // Validate inputs (add more validation as needed)

    // Create a new project
    const newProject = new projectModel({ name, description, author });
    await newProject.save();

    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


export const projectDetails = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const project = await projectModel.findById(projectId);

    if (!project) {
      return res.status(404).send('Project not found.');
    }

    // Fetch issues related to the project
    let issues = await issueModel.find({ projectId });

    // Apply filters
    const { labels, author, search } = req.query;
    if (labels) {
      const labelsArray = labels.split(',').map(label => label.trim());
      issues = issues.filter(issue => issue.labels.some(label => labelsArray.includes(label)));
    }
    if (author) {
      issues = issues.filter(issue => issue.author.toLowerCase().includes(author.toLowerCase()));
    }
    if (search) {
      issues = issues.filter(issue =>
        issue.title.toLowerCase().includes(search.toLowerCase()) ||
        issue.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    res.render('projectDetails', { project, issues });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};



// export const projectDetails = async (req, res) => {
//   try {
//     // get project id from params
//     const projectId = req.params.projectId;

//     // find project using projectId
//     const project = await projectModel.findById(projectId);

//     // if project not found send appropriate response
//     if (!project) {
//       return res.status(404).send("Project not Found");
//     }

//     // find project issue using projectId
//     const projectIssue = await issueModel.find({ projectId });

//     //if not found project issues return appropriate response
//     if (!projectIssue) {
//       return res.status(404).send("Issue not found");
//     }

//     // if issues found the respond
//     res.render("projectDetails", { project, issues: projectIssue });
//   } catch (error) {
//     res.status(500).send("Internal Server Error");
//   }
// };

// export const createProjectForm = (req, res) => {
//   res.render("createProject");
// };

// export const createProject = async (req, res) => {
//   try {
//     // get project details  from body
//     const { name, description, author } = req.body;

//     // create schema/model of project
//     const newProject = await projectModel({ name, description, author });

//     // save in database/mongodb
//     await newProject.save();

//     // redirect the same/home page
//     res.redirect("/");
//   } catch (error) {
//     res.status(500).send("Internal Server Error!");
//   }
// };
