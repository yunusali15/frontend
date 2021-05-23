# frontend
KE Web Frontend

Install node.js https://nodejs.org/en/    
Install git https://git-scm.com/downloads

## Git Flow:
### Do Once
1. Fork this team repo to your own Github account.
2. Git clone your personal repo to anywhere in your computer such as Documents.   
To do so, open git bash and enter command eg: *git clone https://github.com/{yourusername}/frontend.git*       
Now you will have the project in your com.
### Every time you want to develop code
3. To make changes, **pull from the team repo first** to get latest changes using *git pull* (Default remote called origin points to your fork on GitHub, not the original repo it was forked from. To keep track of the original repo, you need to add another remote named upstream
*git remote add upstream https://github.com/keviiweb/frontend.git*)
4. Recommened to create and switch to a new branch for development in your personal git repo using *git checkout -b new-branch-name* and start coding shit.
5. To update the changes you made to your own repo, stage the files using *git add*, commit it using *git commit* and push the changes using *git push*
6. Open pull request to the team repo.
6. Merge if nothing wrong.

TLDR Pull from team repo, develop and push to individual repo. Create PR from own repo to team.

## To run the project
1. Open the folder in some IDE eg Visual Studio Code.
2. Open the terminal and go to the project path.
3. Important to type *npm install* for the first time to download the node_modules folder required for the project as they are not included.
4. Type *npm start* to run the project.
5. Should be able to see it on http://localhost:3000/
