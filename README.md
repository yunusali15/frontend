# frontend

KE Web Frontend

Install node.js https://nodejs.org/en/  
Install git https://git-scm.com/downloads

## Git Flow:

### Do Once

1. Fork this team repo to your own Github account.
2. Git clone your personal repo to anywhere in your computer such as Documents.  
   To do so, open git bash and enter command eg: _git clone https://github.com/{yourusername}/frontend.git_  
   Now you will have the project in your com.

### Every time you want to develop code

3. To make changes, **pull from the team repo first** to get latest changes using _git pull_ (Default remote called origin points to your fork on GitHub, not the original repo it was forked from. To keep track of the original repo, you need to add another remote named upstream
   _git remote add upstream https://github.com/keviiweb/frontend.git_)
4. Recommened to create and switch to a new branch for development in your personal git repo using _git checkout -b new-branch-name_ and start coding shit.
5. To update the changes you made to your own repo, stage the files using _git add_, commit it using _git commit_ and push the changes using _git push_
6. Open pull request to the team repo.
7. Merge if nothing wrong.

TLDR Pull from team repo, develop and push to individual repo. Create PR from own repo to team.

## To run the project

1. Open the folder in some IDE eg Visual Studio Code.
2. Open the terminal and go to the project path.
3. Important to type _npm install_ for the first time to download the node_modules folder required for the project as they are not included.
4. Type _npm start_ to run the project.
5. Should be able to see it on http://localhost:3000/
