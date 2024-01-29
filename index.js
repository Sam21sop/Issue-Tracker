import express from 'express';
import path from 'path';
import { ApplicationErrorHandler } from './utility/errorHandling.js';
import homeRouter from './routes/homeRoutes.js';
import projectRouter from './routes/projectRoutes.js';
import issueRouter from './routes/issueRoutes.js';


const server = express()

// middleware
server.use(express.urlencoded({ extended: false }));
server.use(express.json())

// set default template
server.set("view engine", 'ejs');
server.set("views", path.resolve(path.join("views")))
server.use(express.static(path.resolve(path.join("public"))))

// server.get('/', (req, res)=> {
//     res.render("home")
// })

// define routes
server.use('/', homeRouter);
server.use('/projects', projectRouter);
server.use('/projects/:projectId/issues', issueRouter);

// server.use(ApplicationErrorHandler)

export default server;