var assert = require('chai').assert;
var expect = require('chai').expect;
var reverseString = require('../src/ReverseString').ReverseString;

describe("Reverse string", function() {
    it('should return string type', function() {
        expect(reverseString("hello")).to.be.a('string');
    })
    it('should pass TestCase 1', function() {
        expect(reverseString("hello")).to.eql("olleh");
    });
    it('should pass TestCase 2', function() {
        expect(reverseString("Howdy")).to.eql("ydwoH");
    });
    it('should pass TestCase 3', function() {
        expect(reverseString("Greetings from Earth")).to.eql("htraE morf sgniteerG");
    });
})
