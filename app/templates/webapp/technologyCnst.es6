const technologies = [
  {
    "name": "Babel",
    "link": "https://babeljs.io/"
  }, {
    "name": "gulp",
    "link": "http://gulpjs.com"
  }, {
  <% if (templateEngine === 'Jade') { %>
    "name": "Jade",
    "link": "http://jade-lang.com/"
  }, {
  <% } %>
  <% if (cssPreprocessor === 'Stylus') { %>
    "name": "Stylus",
    "link": "http://learnboost.github.io/stylus/"
  }, {
  <% } %>
    "name": "Karma",
    "link": "http://karma-runner.github.io/0.8/index.html"
  }, {
    "name": "Koa.js",
    "link": "http://koajs.com"
  }, {
    "name": "Protractor",
    "link": "http://angular.github.io/protractor/#/"
  }
];

angular.module("<%= name %>").constant("TECHNOLOGIES", technologies);
