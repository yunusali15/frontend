# frontend

KE Web Frontend

Install node.js https://nodejs.org/en/  
Install git https://git-scm.com/downloads

## Git Flow:

### Do Once

1. Git clone your personal repo to anywhere in your computer such as Documents.  
   To do so, open git bash and enter command eg: `git clone https://github.com/keviiweb/frontend.git`  
   Now you will have the project in your com.

### Every time you want to develop code

2. To make changes, **pull from the team repo first** to get latest changes using `git pull` (Default remote called origin points to your fork on GitHub, not the original repo it was forked from.
3. Recommened to create and switch to a new branch for development in your local git repo using `git checkout -b new-branch-name` and start coding shit.
4. To update the changes you made to your own repo, stage the files using `git add`, commit it using `git commit` and push the changes using `git push`
5. Open pull request to the main branch.
6. Wait for Eu Zin or Chuan An to approve the Pull Request.


## To run the project

1. Open the folder in some IDE eg Visual Studio Code.
2. Open the terminal and go to the project path.
3. Important to type `npm install` for the first time to download the node_modules folder required for the project as they are not included.
4. Type `npm start` to run the project.
5. Should be able to see it on http://localhost:3000/
