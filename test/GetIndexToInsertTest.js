var assert = require('chai').assert;
var expect = require('chai').expect;
var getIndexToIns = require('../src/GetIndexToInsert').GetIndexToInsert;

describe("Reverse string", function() {
    it('should return 3', function() {
        expect(getIndexToIns([10, 20, 30, 40, 50], 35)).to.eql(3);
    })
    it('should return 2', function() {
        expect(getIndexToIns([10, 20, 30, 40, 50], 30)).to.eql(2);
    })
    it('should return 1', function() {
        expect(getIndexToIns([40, 60], 50)).to.eql(1);
    })
    it('should return 0', function() {
        expect(getIndexToIns([3, 10, 5], 3)).to.eql(0);
    })
    it('should return 2', function() {
        expect(getIndexToIns([5, 3, 20, 3], 5)).to.eql(2);
    })
    it('should return 2', function() {
        expect(getIndexToIns([2, 20, 10], 19)).to.eql(2);
    })
    it('should return 3', function() {
        expect(getIndexToIns([2, 5, 10], 15)).to.eql(3);
    })
})
