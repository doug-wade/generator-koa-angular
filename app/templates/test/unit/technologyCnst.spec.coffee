describe("technologyCnst", ->

  beforeEach -> module "<%= name %>"

  it("should be properly formatted", inject((TECHNOLOGIES)->
    TECHNOLOGIES.forEach((technology) ->
      expect(technology.link).to.be.ok
      expect(technology.name).to.be.ok

      expect(technology.link).to.be.a("string")
      expect(technology.name).to.be.a("string")
      )
    )
  )
)
