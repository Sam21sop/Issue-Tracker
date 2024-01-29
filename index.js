import express from "express";
import path from "path";
import homeRouter from "./routes/homeRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import issueRouter from "./routes/issueRoutes.js";

const server = express();

// middleware
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// set default template
server.set("view engine", "ejs");
server.set("views", path.resolve(path.join("views")));
server.use(express.static(path.resolve(path.join("public"))));

// define routes
server.use("/", homeRouter);
server.use("/projects", projectRouter);
server.use("/projects/:projectId/issues", issueRouter);


export default server;
