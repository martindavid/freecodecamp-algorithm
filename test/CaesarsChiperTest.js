var assert = require('chai').assert;
var expect = require('chai').expect;
var rot13 = require('../src/CaesarsChiper').CaesarsChiper;

describe("Caesars Chiper", function() {
    it('should return FREE CODE CAMP', function() {
        expect(rot13("SERR PBQR PNZC")).to.eql("FREE CODE CAMP");
    })
    it('should return FREE PIZZA!', function() {
        expect(rot13("SERR CVMMN!")).to.eql("FREE PIZZA!");
    })
    it('should return FREE LOVE?', function() {
        expect(rot13("SERR YBIR?")).to.eql("FREE LOVE?");
    })
    it('should return THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.', function() {
        expect(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."))
            .to.eql("THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.");
    })
})
