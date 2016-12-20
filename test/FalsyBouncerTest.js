var assert = require('chai').assert;
var expect = require('chai').expect;
var bouncer = require('../src/FalsyBouncer').FalsyBouncer;

describe('Falsy Bouncer problem', function(){
  it("should return an array without false value - test case 1", function(){
    expect(bouncer([7, "ate", "", false, 9])).to.eql([7, "ate", 9]);
  });
  it("should return an array without false value - test case 2", function() {
    expect(bouncer(["a", "b", "c"])).to.eql(["a", "b", "c"]);
  });
  it("should return empty array", function(){
    expect(bouncer([false, null, 0, NaN, undefined, ""])).to.eql([]);
  });
  it("should return an array without false value - test case 3", function() {
    expect(bouncer([1, null, NaN, 2, undefined])).to.eql([1,2]);
  })
})
