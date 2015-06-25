"use strict"

technologies = [
<% if (templateEngine === "Jade") { %>
  {
    "name": "Jade",
    "link": "http://jade-lang.com/"
  },
<% } %>
<% if (cssPreprocessor === "Stylus") { %>
  {
    "name": "Stylus",
    "link": "http://learnboost.github.io/stylus/"
  },
<% } %>
  {
    "name": "Coffeescript",
    "link": "http://coffeescript.org/"
  },
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
