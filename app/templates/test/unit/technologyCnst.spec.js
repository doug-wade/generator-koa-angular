describe("technologyCnst", function() {
  beforeEach(function() {
    return module("<%= name %>");
  });
  return it("should be properly formatted", inject(function(TECHNOLOGIES) {
    return TECHNOLOGIES.forEach(function(technology) {
      expect(technology.link).to.be.ok;
      expect(technology.name).to.be.ok;
      expect(technology.link).to.be.a("string");
      return expect(technology.name).to.be.a("string");
    });
  }));
});
