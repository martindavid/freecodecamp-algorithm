var assert = require('chai').assert;
var expect = require('chai').expect;
var diffArray = require('../src/DiffTwoArray').DiffTwoArray;

describe("Sum All In Range", function() {
    it('should return an array', function() {
        expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.be.a('array');
    })
    it('should return ["pink wool"]', function() {
        expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
            .to.eql(["pink wool"]);
    })
    it('should return ["diorite", "pink wool"]', function() {
        expect(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
            .to.eql(["pink wool","diorite"]);
    })
    it('should return an empty array', function() {
        expect(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])).to.eql([]);
    })
    it('should return [4]', function() {
        expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.eql([4]);
    })
    it('should return ["piglet", 4]', function() {
        expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).to.eql(["piglet", 4]);
    })
    it('should return ["snuffleupagus", "cookie monster", "elmo"]', function() {
        expect(diffArray([], ["snuffleupagus", "cookie monster", "elmo"] )).to.eql(["snuffleupagus", "cookie monster", "elmo"]);
    })
    it('should return [1, "calf", 3, "piglet", 7, "filly"]', function() {
        expect(diffArray([1, "calf", 3, "piglet"], [7, "filly"])).to.eql([1, "calf", 3, "piglet", 7, "filly"]);
    })
})
