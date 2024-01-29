import { Router } from "express";
import { createProject, createProjectForm, projectDetails } from "../controllers/projectController.js";


const projectRouter = Router();

projectRouter.get('/create', createProjectForm);
projectRouter.post('/create', createProject);
projectRouter.get('/:projectId', projectDetails);

export default projectRouter;



// router.get('/:projectId/issues/create', projectsController.createIssueForm);
// router.post('/:projectId/issues/create', projectsController.createIssue);
