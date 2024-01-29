import { Router } from "express";
import { createIssue, createIssueForm, getAllIssues } from "../controllers/issuesController.js";

const issueRouter = Router();

// issueRouter.get('/create', createIssueForm);
// issueRouter.post('/create', createIssue);

issueRouter.get('/', getAllIssues);
issueRouter.get('/create', createIssueForm);
issueRouter.post('/create', createIssue);


export default issueRouter;
