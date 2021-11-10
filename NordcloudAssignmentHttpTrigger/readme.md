# How to run deployed version

This program is deployed as a Azure Function microservice.

You can trigger the function by opening following URL in your browser

https://nordcloudassignment.azurewebsites.net/api/NordcloudAssignmentHttpTrigger?code=J3JfaJgiLun7beiIv92XJF1aG3MH7LJD035SuXTkOLWPP0BJWRFZYw==

You can use the curl command line tool (https://curl.se/) or wget. Example for curl:

curl https://nordcloudassignment.azurewebsites.net/api/NordcloudAssignmentHttpTrigger?code=J3JfaJgiLun7beiIv92XJF1aG3MH7LJD035SuXTkOLWPP0BJWRFZYw==

You can use the Postman tool as well.

# Sensitive data leak in this version!

Warning: Code parameter in the URL contains a sensitive authorization key to trigger an Azure Function. In final solution it should not be included in readme.md file, which is commited to the repo.

# How to run the program locally

1. First you need to install TypeScript:

npm install -g typescript

2. Transpile TypeScript to Javascript:

tsc program.ts

3. Install Node.js if it's not installed

4. Run program.js via node

node program.js

# Development guidelines

Please use dev branch for development, test for testing purposes and master for production. Branches are already created.

Please follow the official PEP style guide for Python Code (as of 7/11/2021: https://www.python.org/dev/peps/pep-0008/)

Each time you want to commit the code, please run TypeScript linter.