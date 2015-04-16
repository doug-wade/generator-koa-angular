app = require "../../build/app.js"
request = require "supertest"
  .agent app.listen()

describe "GET /", ->
  it "should respond with a view", (done) ->
    request
      .get "/"
      .expect 200, done
