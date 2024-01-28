import express from 'express';
import path from 'path';
import { ApplicationErrorHandler } from './src/utility/errorHandling.js';
import homeRouter from './src/routes/homeRoutes.js';
import projectRouter from './src/routes/projectRoutes.js';
import issueRouter from './src/routes/issueRoutes.js';


const server = express()

// middleware
server.use(express.urlencoded({ extended: false }));
server.use(express.json())

// set default template
server.set("view engine", 'ejs');
server.set("views", path.resolve(path.join("src", "views")))

// server.get('/', (req, res)=> {
//     res.render("home")
// })

// define routes
server.use('/', homeRouter);
server.use('/projects', projectRouter);
server.use('/projects/:projectId/issues', issueRouter);

server.use(ApplicationErrorHandler)

export default server;