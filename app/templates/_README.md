Generated using the [Yeoman](http://yeoman.io/) generator [koa-angular](https://github.com/prekolna/generator-koa-angular) (still under development)

# Prerequisites
You must install:
* any version of [io.js](https://iojs.org/) OR [node.js](https://nodejs.org/) version 0.12 or higher
* [gulp](http://gulpjs.com) (npm install -g gulp gulp-cli)

If you want to continuously run the tests while developing, you may also want:
* [karma](http://karma-runner.github.io/0.8/index.html) (npm install -g karma karma-cli)
* [protractor](http://angular.github.io/protractor/#/) (npm install -g protractor)
* [mocha](http://mochajs.org/) (npm install -g mocha)

# Starting the server
    npm install
    gulp

then navigate to localhost:3000 in your favorite browser

# Running the tests

    npm install
    # Download the Selenium webdriver
    node_modules/protractor/bin/webdriver-manager update
    gulp compile
    gulp test

Note that to end the mocha and test tasks, you have to manually interrupt the selenium standalone process  (ctrl + c)

### Note for Node.js
The gulp mocha target uses generators, which require the --harmony flag on Node.js.  So, to invoke the mocha task or the test task, gulp must be invoked using node, e.g.

    node --harmony `which gulp` test
    node --harmony `which gulp` mocha
