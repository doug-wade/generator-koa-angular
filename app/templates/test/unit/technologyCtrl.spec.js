describe("TechnologyController", function() {
  beforeEach(function() {
    return module("<%= name %>");
  });
  return it("should attach the catalog to the scope", inject(function($rootScope, $controller) {
    var scope, underTest;
    scope = $rootScope.$new();
    underTest = $controller("TechnologyController", {
      "$scope": scope
    });
    expect(scope.technologies).to.be.a("array");
    return expect(scope.technologies).to.be.ok;
  }));
});
