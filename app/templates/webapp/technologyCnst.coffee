"use strict"

technologies = [
  {
    "name": "gulp"
    "link": "http://gulpjs.com"
  },
  {
    "name": "Karma"
    "link": "http://karma-runner.github.io/0.8/index.html"
  },
  {
    "name": "Koa.js"
    "link": "http://koajs.com"
  },
  {
    "name": "Protractor"
    "link": "http://angular.github.io/protractor/#/"
  }
]

angular.module("<%= name %>").constant("TECHNOLOGIES", technologies)
