var assert = require('chai').assert;
var expect = require('chai').expect;
var sumAll = require('../src/SumAllInRange').SumAllInRange;

describe("Sum All In Range", function() {
    it('should return number', function() {
        expect(sumAll([1, 4])).to.be.a('number');
    })
    it('should return 10', function() {
        expect(sumAll([1, 4])).to.eql(10);
    })
    it('should return 10', function() {
        expect(sumAll([4, 1])).to.eql(10);
    })
    it('should return 45', function() {
        expect(sumAll([5, 10])).to.eql(45);
    })
    it('should return 45', function() {
        expect(sumAll([5, 10])).to.eql(45);
    })
})
