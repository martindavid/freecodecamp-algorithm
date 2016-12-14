var assert = require('chai').assert;
var expect = require('chai').expect;
var palindrome = require('../src/Palindrome').Palindrome;

describe("Palindrome function", function(){
  it('should return a boolean', function() {
    expect(palindrome("eye")).to.be.a('boolean');
  });
  it('should return true - TestCase 1', function() {
    expect(palindrome("eye")).to.eql(true);
  });
  it('should return true - TestCase 2', function() {
    expect(palindrome("race car")).to.eql(true);
  });
  it('should return true - TestCase 3', function() {
    expect(palindrome("A man, a plan, a canal. Panama")).to.eql(true);
  });
  it('should return true - TestCase 4', function() {
    expect(palindrome("My age is 0, 0 si ega ym.")).to.eql(true);
  });
  it('should return true - TestCase 5', function() {
    expect(palindrome("0_0 (: /-\ :) 0-0")).to.eql(true);
  });

  it('should return false - TestCase 1', function() {
    expect(palindrome("not a palindrome")).to.eql(false);
  });
  it('should return false - TestCase 2', function() {
    expect(palindrome("almostomla")).to.eql(false);
  });
  it('should return false - TestCase 3', function() {
    expect(palindrome("1 eye for of 1 eye.")).to.eql(false);
  });
})
