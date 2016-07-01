# BookDashAdmin

Administration application for the BookDash NPO mobile apps.

## Setting Up Your Environment

1.  Make sure you have a recent version of node.js installed.  We prefer to use nvm to manage node versions which can be installed via curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
2.  Install the latest version of node.js...nvm install v5.11.1
3.  Swith to this version of node via nvm use v5.11.1
4.  In the root directory install all of the modules via "npm install"
5.  If you have the angular-cli installed uninstall is in the version of node via "npm uninstall -g angular-cli" 
6.  Install the angular-cli node package via "npm install -g angular-cli@1.0.0-beta.8"
7.  Install typings via "npm install typings@0.7.12 -g"
8.  now install the project specific typings via "typings install --save --ambient firebase"
9.  do the same for jasmine typings via "typings install jasmine --save-dev --ambient"
10.  now start up the server with "ng serve"

## Contributing and other development notes

### Contributing

If you would like to contribute to this project please reach out to us.  We would love to have the help.

### Unit Tests

Given the fact that the team was new to Angular 2 and it is only used by a small number of people we opted to not add automated tests to it at this time.  This is something that we would love to layer in as more functionality is added and we are more comfortable with the framework.  This is also an area that would be a great way to get involved in the project and help to bring us along with our Angular2/Typescript TDD foo.  

## Development notes

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.8.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
