import { Router } from "express";
import ProjectController from "../controllers/projectController.js";

const projectController = new ProjectController()

const projectRouter = Router();

projectRouter.get('/create', projectController.createProjectForm);
projectRouter.post('/create', projectController.createProject);
projectRouter.get('/:projectId', projectController.projectDetails);

export default projectRouter;



// router.get('/:projectId/issues/create', projectsController.createIssueForm);
// router.post('/:projectId/issues/create', projectsController.createIssue);
