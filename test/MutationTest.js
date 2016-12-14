var assert = require('chai').assert;
var expect = require('chai').expect;
var mutation = require('../src/Mutation').Mutation;

describe('Mutation Problem', function(){
  it('should return false - test case 1', function() {
    expect(mutation(["hello","hey"])).to.eql(false);
  });
  it('should return false - test case 2', function() {
    expect(mutation(["hello", "neo"])).to.eql(false);
  });
  it('should return false - test case 3', function() {
    expect(mutation(["voodoo", "no"])).to.eql(false);
  });

  it('should return true - test case 1', function() {
    expect(mutation(["hello", "Hello"])).to.eql(true);
  });
  it('should return true - test case 2', function() {
    expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).to.eql(true);
  });
  it('should return true - test case 3', function() {
    expect(mutation(["Mary", "Aarmy"])).to.eql(true);
  });
  it('should return true - test case 4', function() {
    expect(mutation(["Alien", "line"])).to.eql(true);
  });
  it('should return true - test case 5', function() {
    expect(mutation(["floor", "for"])).to.eql(true);
  });
});
