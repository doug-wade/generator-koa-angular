# What can I do?

The easiest thing you can do is run the code!  The README has instructions for how to get started.  I've used this stack for quite some time now, and it likely has some peculiarities that I am used to.  If you find something strange or grating or disorienting or confusing, please don't just assume you don't understand how it works, [submit an issue](https://github.com/doug-wade/generator-koa-angular/issues/new)!  If you have a great new idea (or even just a kinda okay idea), [submit an issue](https://github.com/doug-wade/generator-koa-angular/issues/new)!  If you find a bug, you guessed it, [submit an issue](https://github.com/doug-wade/generator-koa-angular/issues/new).

If you're more advanced, submit a pull request.  Issues that are up for grabs are annotated with the [Help Wanted tag](https://github.com/doug-wade/generator-koa-angular/labels/help%20wanted).  Don't worry if you've never done it before -- Github has a [great tutorial](https://help.github.com/articles/using-pull-requests/), and we're more than happy to help mentor you through the process.  Make sure to follow the guide below.


# Submitting a PR

In general

* Do your development on a feature branch
* Rebase onto the latest commit immediately before submitting
* Squash your commits
* Non-trivial refactorization should be discussed in an issue first
* Include a compelling description of your PR's purpose
* Test your code
* Follow the style guide

## Style Guide

This project uses double quotes, two space indentation, and uses of curly braces and parentheses only where required for
clarity.  We might not have followed these standards everywhere -- bonus points for including style improvements in PRs.

## Testing

You can generate a local generator for debugging and testing by linking the generator:

    npm link

Then generate a app as usual:

    yo koa-angular test-app

If you don't want to re-install the deps every time, you can regenerate the app over your existing code and it will build much faster, but make sure to test it in an empty directory with all the bells and whistles before you send a PR.
