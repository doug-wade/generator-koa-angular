Generated using the [Yeoman](http://yeoman.io/) generator [koa-angular](https://github.com/prekolna/generator-koa-angular) (still under development)

# Prerequisites
You must install:
* any version of [io.js](https://iojs.org/) OR [node.js](https://nodejs.org/) version 0.12 or higher
* [gulp](http://gulpjs.com) (npm install -g gulp gulp-cli)

You should install:
* the [bunyan](https://github.com/trentm/node-bunyan) cli to make the logs readable (npm install -g bunyan).

If you want to continuously run the tests while developing, you may also want:
* [karma](http://karma-runner.github.io/0.8/index.html) (npm install -g karma karma-cli)
* [protractor](http://angular.github.io/protractor/#/) (npm install -g protractor)
* [mocha](http://mochajs.org/) (npm install -g mocha)

# Starting the server
    npm install
    gulp

then navigate to localhost:3000 in your favorite browser.  If you installed the [bunyan](https://github.com/trentm/node-bunyan) cli, then pipe the logs through bunyan to make them more readable:
    gulp | bunyan

# Running the tests

    npm install
    # Download the Selenium webdriver
    node_modules/protractor/bin/webdriver-manager update
    gulp compile
    gulp test

Note that to end the mocha and test tasks, you have to manually interrupt the selenium standalone process  (ctrl + c)

# Other tasks

Check out the generated gulpfile to discover all the tasks you can run.  Most are run as needed by the watch task when you run the default target, but there are a couple of others you may want to run:

    # See if any dependencies are out of date
    gulp checkDependencies

    # Remove all the generated build code
    gulp clean

### Note for Node.js
The gulp mocha target uses generators, which require the --harmony flag on Node.js.  So, to invoke the mocha task or the test task, gulp must be invoked using node, e.g.

    node --harmony `which gulp` test
    node --harmony `which gulp` mocha
