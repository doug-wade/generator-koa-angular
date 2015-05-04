'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  prompting: function() {
    var done = this.async();

    this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'What would you like to call your webapp?',
      default : this.appname // Default to current folder name
    }, {
      type    : 'list',
      name    : 'jsTranspiler',
      message : 'Which Javascript transpiler would you like to use?',
      choices : [ 'Coffeescript', 'None' ],
      default : 'Coffeescript'
    }, {
      type    : 'list',
      name    : 'templateEngine',
      message : 'Which template engine would you like to use?',
      choices : [ 'Jade', 'None' ],
      default : 'Jade'
    }, {
      type    : 'list',
      name    : 'cssPreprocessor',
      message : 'Which CSS preprocessor would you like to use?',
      choices : [ 'Stylus', 'None' ],
      default : 'Stylus'
    }], function (answers) {
      this.name = answers.name;
      this.jsTranspiler = answers.jsTranspiler;
      this.templateEngine = answers.templateEngine;
      this.cssPreprocessor = answers.cssPreprocessor;

      if (answers.templateEngine === "Jade") {
        this.templateExtension = "jade";
      } else {
        this.templateExtension = "html";
      }

      if (answers.jsTranspiler === "Coffeescript") {
        this.transpilerExtension = "coffee";
      } else {
        this.transpilerExtension = "js";
      }

      done();
    }.bind(this));

  },
  writing: function () {
    var context = {
        cssPreprocessor: this.cssPreprocessor,
        name: this.name,
        jsTranspiler: this.jsTranspiler,
        templateEngine: this.templateEngine,
        templateExtension: this.templateExtension,
        transpilerExtension: this.transpilerExtension
    };

    this.copy('images/yeoman.png', './images/yeoman.png');

    if (this.jsTranspiler === 'Coffeescript') {
      this.template('server/app.coffee', './server/app.coffee', context);
      this.template('server/logger.coffee', './server/logger.coffee', context);

      this.template('test/e2e/technologies.scenarios.coffee', './test/e2e/technologies.scenarios.coffee', context);
      this.template('test/server/app.spec.coffee', './test/server/app.spec.coffee', context);
      this.template('test/unit/technologyCnst.spec.coffee', './test/unit/technologyCnst.spec.coffee', context);
      this.template('test/unit/technologyCtrl.spec.coffee', './test/unit/technologyCtrl.spec.coffee', context);

      // TODO: Use composability to generate Angular.js webapp using the Yeoman team's generator:
      // https://github.com/yeoman/generator-angular

      this.template('webapp/app.coffee', 'webapp/app.coffee', context);
      this.template('webapp/technologyCnst.coffee', 'webapp/technologyCnst.coffee', context);
      this.template('webapp/technologyCtrl.coffee', 'webapp/technologyCtrl.coffee', context);

      this.template('gulpfile.coffee', './gulpfile.coffee', context);
    } else if (this.jsTranspiler === 'None') {
      this.template('server/app.js', './server/app.js', context);
      this.template('server/logger.js', './server/logger.js', context);

      this.template('test/e2e/technologies.scenarios.js', './test/e2e/technologies.scenarios.js', context);
      this.template('test/server/app.spec.js', './test/server/app.spec.js', context);
      this.template('test/unit/technologyCnst.spec.js', './test/unit/technologyCnst.spec.js', context);
      this.template('test/unit/technologyCtrl.spec.js', './test/unit/technologyCtrl.spec.js', context);

      this.template('webapp/app.js', 'webapp/app.js', context);
      this.template('webapp/technologyCnst.js', 'webapp/technologyCnst.js', context);
      this.template('webapp/technologyCtrl.js', 'webapp/technologyCtrl.js', context);

      this.template('gulpfile.js', './gulpfile.js', context);
    }

    if (this.templateEngine === 'Jade') {
      this.template('views/index.jade', './views/index.jade', context);
    } else if (this.templateEngine === 'None'){
      this.template('views/index.html', './views/index.html', context);
    }

    this.template('_bower.json', './bower.json', context);
    this.template('_bowerrc', './.bowerrc', context);
    this.template('_gitignore', './.gitignore', context);
    this.template('_package.json', './package.json', context);
    this.template('_README.md', './README.md', context);
    this.template('karma.conf.js', './karma.conf.js', context);
    this.template('protractor.conf.js', './protractor.conf.js', context);
  },
  install: function() {
    this.installDependencies();
  }
});
