let bodyParser = require("koa-bodyparser");
let bunyan     = require("koa-bunyan");
let gzip       = require("koa-gzip");
let json       = require("koa-json");
let koa        = require("koa");
let livereload = require("koa-livereload");
let logger     = require("./logger.js");
let parse      = require("co-body");
let route      = require("koa-route");
let serve      = require("koa-static");
let session    = require("koa-session");
let views      = require("co-views");

let app        = module.exports = koa();

app.use(bunyan(logger, {
  level: "info",
  timeLimit: 250
}));

app.use(gzip());
app.use(json());
app.use(session(app));
app.use(livereload());
app.use(bodyParser());

let render = views("views/");

app.use(serve("public/"));

require("koa-qs")(app);

app.use(route.get("/", function*() {
  this.redirect("/index.html");
}));

app.listen(3000);
