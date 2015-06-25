bower      = require "gulp-bower"
coffee     = require "gulp-coffee"
concat     = require "gulp-concat"
del        = require "del"
gulp       = require "gulp"
imagemin   = require "gulp-imagemin"
install    = require "gulp-install"
<% if (templateEngine === "Jade") { %>
jade       = require "gulp-jade"
<% } %>
karma      = require "karma"
livereload = require "gulp-livereload"
mocha      = require "gulp-mocha-co"
ngHtml2Js  = require "gulp-ng-html2js"
nodemon    = require "gulp-nodemon"
pngquant   = require "imagemin-pngquant"
protractor = require("gulp-protractor").protractor
ptor       = require "protractor"
<% if (cssPreprocessor === "Stylus") { %>
stylus     = require "gulp-stylus"
<% } %>
uglify     = require "gulp-uglify"

paths =
  bower       : "public/vendor"
  bowerjson   : "./bower.json"
  build       : "build"
  e2especs    : "test/e2e/*.scenarios.coffee"
  karmaconf   : __dirname + "/karma.conf.js" # TODO: remove __dirname
  images      : "./images/**/*.*"
  packagejson : "./package.json"
  partials    : "partials/*.<%= templateExtension %>"
  public      : "public"
  scripts     : "webapp/**/*.coffee"
  server      : "server/*.coffee"
  serverspecs : "test/server/*.spec.coffee"
  styles      : "./stylesheets/**/*.css"
  views       : "views/*.<%= templateExtension %>"

gulp.task "angular-views", ->
  gulp.src paths.partials
<% if (templateEngine === "Jade") { %>
    .pipe jade()
<% } %>
    .pipe ngHtml2Js(moduleName: "<%= name %>", prefix: "/partials/")
    .pipe concat "angular-views.min.js"
    .pipe gulp.dest paths.public + "/scripts"
    .pipe livereload()

gulp.task "bower", ->
  gulp.src [ paths.bowerjson ]
    .pipe install()

gulp.task "clean", ->
  del([paths.build, paths.public], (err, deletedFiles) ->
    console.log('Cleaned files:', deletedFiles.join(', ')))

gulp.task "images", ->
  gulp.src paths.images
    .pipe imagemin(
      optimizationLevel: 5
      use: [ pngquant() ])
    .pipe gulp.dest paths.public + "/images"
    .pipe livereload()

gulp.task "karma", (done) ->
  karma.server.start(
    configFile: paths.karmaconf,
    singleRun: true
  , done)

gulp.task "mocha", ->
  gulp.src paths.serverspecs
    .pipe mocha(reporter: "nyan")

gulp.task "npm", ->
  gulp.src [ paths.packagejson ]
    .pipe install()

gulp.task "protractor", [ "webdriver_update", "webdriver_standalone" ], ->
  gulp.src paths.e2especs
    .pipe protractor(configFile: "protractor.conf.js")
    .on "error", (e) -> throw e

gulp.task "server", ->
  nodemon
    script: paths.build + "/app.js"
    nodeArgs: [ "--harmony" ]
    ignore: [
      "./bower_components/**"
      "./node_modules/**"
      "./public/**"
      "./src/**"
      "./test/**"
      "./views/**"
      "./images/**"
    ]

gulp.task "server-scripts", ->
  gulp.src paths.server
    .pipe coffee bare: yes
    .pipe gulp.dest paths.build

gulp.task "scripts", ->
  gulp.src paths.scripts
    .pipe coffee()
    .pipe concat "all.js"
    .pipe uglify()
    .pipe gulp.dest paths.public + "/scripts"
    .pipe livereload()

gulp.task "styles", ->
  gulp.src paths.styles
    .pipe gulp.dest paths.public + "/stylesheets"
    .pipe livereload()

gulp.task "views", ->
  gulp.src paths.views
<% if (templateEngine === "Jade") { %>
    .pipe jade()
<% } %>
    .pipe gulp.dest paths.public
    .pipe livereload()

gulp.task "watch", ->
  gulp.watch paths.partials    , [ "angular-views" ]
  gulp.watch paths.bowerjson   , [ "bower" ]
  gulp.watch paths.images      , [ "images" ]
  gulp.watch paths.packagejson , [ "npm" ]
  gulp.watch paths.styles      , [ "styles" ]
  gulp.watch paths.scripts     , [ "scripts" ]
  gulp.watch paths.server      , [ "server-scripts" ]
  gulp.watch paths.views       , [ "views" ]

# Run the selenium webdriver
gulp.task "webdriver_standalone", ptor.webdriver_standalone

# Download the selenium webdriver
gulp.task "webdriver_update", ptor.webdriver_update

gulp.task "compile", [ "bower", "images", "views", "styles", "scripts", "server-scripts" ]
gulp.task "default", [ "compile", "watch", "server" ]
gulp.task "test", [ "mocha", "karma", "protractor" ]
