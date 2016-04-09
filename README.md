# BookDashAdmin
Administration application for the BookDash NPO mobile apps.

## Setting Up Your Environment

1.  Make sure you have a recent version of node.js installed.  We prefer to use nvm to manage node versions which can be installed via curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
2.  Install the latest version of node.js...nvm install v5.10.1
3.  In the root directory install all of the modules via "npm install"
4.  Install the angular-cli node package via "npm install -g angular-cli"
5.  Install typings via "npm install typings -g"
6.  now install the project specific typings via "typings install --save --ambient firebase"
7.  do the same for jasmine typings via "typings install jasmine --save-dev --ambient"
8.  now start up the server with "ng serve"