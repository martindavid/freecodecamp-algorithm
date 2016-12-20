var assert = require('chai').assert;
var expect = require('chai').expect;
var destroy = require('../src/SeekAndDestroy').SeekAndDestroy;

describe("Reverse string", function() {
    it('should return [1,1]', function() {
        expect(destroy([ 2, 3, 1, 1, 2, 3], 2, 3)).to.eql([1,1]);
    })
    it('should return [1,5,1]', function() {
        expect(destroy([1, 2, 3, 5, 1, 2, 3], 2, 3)).to.eql([1,5,1]);
    })
    it('should return [1]', function() {
        expect(destroy([3, 5, 1, 2, 2], 2, 3, 5)).to.eql([1]);
    })
    it('should return an empty array', function() {
        expect(destroy([2, 3, 2, 3], 2, 3)).to.eql([]);
    })
    it('should return ["hamburger"]', function() {
        expect(destroy(["tree", "hamburger", 53], "tree", 53)).to.eql(["hamburger"]);
    })
})
