var app, request;

app     = require("../../build/app.js");
request = require("supertest").agent(app.listen());

describe("GET /", function() {
  return it("should respond with a view", function(done) {
    return request.get("/").expect(200, done);
  });
});
