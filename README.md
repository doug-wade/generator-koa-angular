# generator-koa-angular [![Build Status](https://secure.travis-ci.org/prekolna/generator-koa-angular.svg?branch=master)](https://travis-ci.org/prekolna/generator-koa-angular)[![dependencies](https://david-dm.org/prekolna/generator-koa-angular.svg)](https://david-dm.org/prekolna/generator-koa-angular)

A [Yeoman](http://yeoman.io/) generator for using [Koa.js](http://koajs.com/) with [Angular.js](https://angularjs.org/). See [the example repository](https://github.com/prekolna/example-koa-angular) to browse the generated boilerplate.

# Usage

Install yo, grunt-cli, bower, generator-angular and generator-karma:

    npm install -g grunt-cli bower yo generator-karma generator-angular

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
