'use strict';

var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({
  generateFiles: function () {
    var context = {
        name: this.name
    };

    this.copy('images/yeoman.png', './images/yeoman.png');

    this.template('server/app.coffee', './server/app.coffee', context);
    this.template('server/logger.coffee', './server/logger.coffee', context);

    this.template('test/e2e/technologies.scenarios.coffee', './test/e2e/technologies.scenarios.coffee', context);
    this.template('test/server/app.spec.coffee', './test/server/app.spec.coffee', context);
    this.template('test/unit/technologyCnst.spec.coffee', './test/unit/technologyCnst.spec.coffee', context);
    this.template('test/unit/technologyCtrl.spec.coffee', './test/unit/technologyCtrl.spec.coffee', context);

    this.template('views/index.jade', './views/index.jade', context);

    // TODO: Use composability to generate Angular.js webapp using the Yeoman team's generator:
    // https://github.com/yeoman/generator-angular

    this.template('webapp/app.coffee', 'webapp/app.coffee', context);
    this.template('webapp/technologyCnst.coffee', 'webapp/technologyCnst.coffee', context);
    this.template('webapp/technologyCtrl.coffee', 'webapp/technologyCtrl.coffee', context);

    this.template('_bower.json', './bower.json', context);
    this.template('_bowerrc', './.bowerrc', context);
    this.template('_gitignore', './.gitignore', context);
    this.template('_package.json', './package.json', context);
    this.template('_README.md', './README.md', context);
    this.template('gulpfile.coffee', './gulpfile.coffee', context);
    this.template('karma.conf.js', './karma.conf.js', context);
    this.template('protractor.conf.js', './protractor.conf.js', context);

    // generator.npmInstall()
  }
});
