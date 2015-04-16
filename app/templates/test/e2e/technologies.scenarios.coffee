chai           = require "chai"
chaiAsPromised = require "chai-as-promised"

chai.use chaiAsPromised
expect = chai.expect

describe("<%= name %>", ->
  it("should have a title", ->
    browser.get "http://localhost:3000/"

    expect(browser.getTitle()).to.eventually.equal("<%= name %>")
  )

  it("should have a welcome banner", ->
    browser.get "http://localhost:3000/"
    banner = element(By.tagName("h1"))

    expect(banner.getText()).to.eventually.equal("'Allo 'Allo 'Allo!")
  )
)
