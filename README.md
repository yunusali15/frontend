# frontend

KE Web Frontend

Install node.js https://nodejs.org/en/  
Install git https://git-scm.com/downloads

## Git Flow:

### Do Once

1. Git clone your personal repo to anywhere in your computer such as Documents.  
   To do so, open git bash and enter command eg: _git clone https://github.com/keviiweb/frontend.git_  
   Now you will have the project in your com.

### Every time you want to develop code

2. To make changes, **pull from the team repo first** to get latest changes using _git pull_ (Default remote called origin points to your fork on GitHub, not the original repo it was forked from.
3. Recommened to create and switch to a new branch for development in your personal git repo using _git checkout -b new-branch-name_ and start coding shit.
4. To update the changes you made to your own repo, stage the files using _git add_, commit it using _git commit_ and push the changes using _git push_
5. Open pull request to the main branch.
6. Wait for Eu Zin or Chuan An to approve the Pull Request.


## To run the project

1. Open the folder in some IDE eg Visual Studio Code.
2. Open the terminal and go to the project path.
3. Important to type _npm install_ for the first time to download the node_modules folder required for the project as they are not included.
4. Type _npm start_ to run the project.
5. Should be able to see it on http://localhost:3000/
