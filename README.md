# README
Text-ile is a repository for text-based pattern printing to be used in the 20th anniversary HASTAC scuplture.

## Running locally
To work on the code locally, you can use any text editor you normally use to work with JavaScript (VSCode is what Nikki uses).  As we have been testing various libraries and modules, we've encoutered some CORS errors.  The fastest way around this is to view the project from a local server.

In VSCode, you can install the "Live Server" extension.  Starting a live server will sidestep any CORS issues.


## Contribution Workflow
1. Once you've found an issue to work on.... (see next section)
2. Assign that issue to yourself so that everyone knows you're taking it
3. Click on the "create a branch" link in the issue.  All of your code for the issue will go onto that branch.
4. (write code!)
5. When you're done, make sure all of your code is committed to your branch and pushed to origin. 
6. Open a pull request, explain your changes, and assign the PR to Nikki


## Choosing what to work on next
In order to decide what to work on next, go in this order:
1 - are there open pull requests that need review? Do those first
2 - Look for things you can complete before the Friday checkin.  In other words, if it's already Wednesday, try to choose something smaller than if it's Saturday morning. :) 
3 - unsure? just ask Nikki. 


## To Generate jsdocs
From the projct root: 
```
./node_modules/.bin/jsdoc -c jsdoc.conf.json -R README.md -r . 
```