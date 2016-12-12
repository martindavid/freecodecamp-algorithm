var assert = require('chai').assert;
var expect = require('chai').expect;
var chunkArrayInGroups = require('../../algorithm/ChunkyMonkey').ChunkArrayInGroups;

describe('Array', function() {
  describe('ChunkArrayInGroups', function () {
    it('should pass TestCase 1', function () {
      expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).to.eql([["a", "b"], ["c", "d"]]);
    });

    it('should pass TestCase 2', function () {
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).to.eql([[0, 1, 2], [3, 4, 5]]);
    });

    it('should pass TestCase 3', function () {
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).to.eql([[0, 1], [2, 3], [4, 5]]);
    });

    it('should pass TestCase 4', function () {
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).to.eql([[0, 1, 2, 3], [4, 5]]);
    });

    it('should pass TestCase 5', function () {
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).to.eql([[0, 1, 2], [3, 4, 5], [6]]);
    })

    it('should pass TestCase 6', function () {
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).to.eql([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
    });
  });
});
