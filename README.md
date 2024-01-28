# Issue-Tracker
Nodejs + ejs  application to track issues/bugs for a project


## Project Folder Structure
image here

## Front-End

#### Home Page
image here

#### Create Project Page
image here

#### Project Details Page
image here

#### Create Issue Page
image here


## Back-End

#### Data Model
1. Author Model
    - Name
    - Description
    - Author
2. Issue Model
    - Title 
    - Description
    - Labels
    - Author(ref: Author Model)

#### Routes
1. Home Routes
    - URL: http://localhost:${port}/
    - METHOD: GET (allProjectList)

2. Project Routes
    - URL: [
        - http://localhost:${port}/projects/:projectId,
        - http://localhost:${port}.projects/new-project
    ]
    - METHOD: GET POST (ProjectDetails, CreateProject)

3. Issue Routes
    - URL: http://localhost:${port}/issues/new-issue
    - METHOD: GET

