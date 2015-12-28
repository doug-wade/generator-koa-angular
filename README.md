# generator-koa-angular
[![Build Status](https://secure.travis-ci.org/doug-wade/generator-koa-angular.svg?branch=master)](https://travis-ci.org/doug-wade/generator-koa-angular)[![dependencies](https://david-dm.org/doug-wade/generator-koa-angular.svg)](https://david-dm.org/doug-wade/generator-koa-angular)[![npm version](https://badge.fury.io/js/generator-koa-angular.svg)](https://badge.fury.io/js/generator-koa-angular)

A [Yeoman](http://yeoman.io/) generator for using [Koa.js](http://koajs.com/) with [Angular.js](https://angularjs.org/). See [the example repository](https://github.com/doug-wade/example-koa-angular) to browse the generated boilerplate, or see [the example site live](http://dougwade.io).


# Usage

Install yo, gulp, bower, and generator-koa-angular:

    npm install -g gulp bower yo generator-koa-angular

Make a new directory, and cd into it:

    mkdir $app-name && cd $_

Run the generator, including an app name:

    yo koa-angular $app-name

Run gulp to start the server, and navigate to localhost:3000.  See the generated README.md for detailed instructions on the how to run the generated tests.


# Generators

Currently, the generator only supports scaffolding of the full application with a name:

    yo koa-angular $app-name


# Contributing

Please submit your issues, ideas, and PRs!  Any help is appreciated.


## Testing

You can generate a local generator for debugging and testing by linking the generator:

    npm link

Then generate a app as usual:

    yo koa-angular test-app

If you don't want to re-install the deps every time, you can regenerate the app over your existing code and it will build much faster, but make sure to test it in an empty directory with all the bells and whistles before you send a PR.


## Style Guide

This project uses double quotes, two space indentation, and uses of curly braces and parentheses only where required for
clarity.  I might not have followed these standards everywhere -- bonus points for including style improvements in PRs.


## PR Guide

* Do your development on a feature branch
* Rebase onto the latest commit immediately before submitting
* Squash your commits
* Non-trivial refactorization should be discussed in an issue first
* Include a compelling description of your PR's purpose


# License

Licensed under the [MIT License](http://opensource.org/licenses/mit-license.php)
