# Betaflight Documentation Revamp Project

This standalone repository contains a work in progress to update the existing Betaflight documentation using Docusaurus V3.8 with Typescript.
The current Betaflight website is built using Docusaurus V2, which is no longer supported and has security issues that are addressed in V3. 
Once all the docs have been transferred to V3, I will fork the betaflight.com repository and submit a pull request.


Additionally, as the Betaflight project continues to grow, gaining more features such as position hold and rudimentary fixed wing support, there is a need to refactor and reorganize the documentation to take better advantage of Docusaurus's features such as versioning and reactive images. 

To run the docs locally, install npm on your system and open a terminal in this project's root.
Then, do the following:

1. Prepare the environment: `npm run clear` followed by `rm package-lock.json`
2. Install packages: `npm install`
3. Run dev server: `npm run start`

The current temporary docs can be viewed here: https://www.spiffygoose.com/betaflightdocs/