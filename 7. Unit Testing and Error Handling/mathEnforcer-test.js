const expect = require('chai').expect;
const {mathEnforcer} = require('./mathEnforcer');

describe('mathEnforcer object tests', () => {
  describe('addFive method tests', () => {
    it('success', () => {
      expect(mathEnforcer.addFive(10)).to.be.equal(15);
      expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
      expect(mathEnforcer.addFive(-5)).to.be.equal(0);
      expect(mathEnforcer.addFive(0.5)).to.be.closeTo(5.5, 0.1);
    });

    it('incorrect input type should return undefined', () => {
      expect(mathEnforcer.addFive('string')).to.be.undefined;
      expect(mathEnforcer.addFive()).to.be.undefined;
      expect(mathEnforcer.addFive([1])).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
    });
  });

  describe('subtractTen method tests', () => {
    it('success', () => {
      expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
      expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
      expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
      expect(mathEnforcer.subtractTen(0.5)).to.be.closeTo(-9.5, 0.1);
    });

    it('incorrect input type should return undefined', () => {
      expect(mathEnforcer.subtractTen('string')).to.be.undefined;
      expect(mathEnforcer.subtractTen()).to.be.undefined;
      expect(mathEnforcer.subtractTen([1])).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });
  });

  describe('sum method tests', () => {
    it('success', () => {
      expect(mathEnforcer.sum(10, 10)).to.be.equal(20);
      expect(mathEnforcer.sum(-10, -10)).to.be.equal(-20);
      expect(mathEnforcer.sum(-5, 5)).to.be.equal(0);
      expect(mathEnforcer.sum(5, 0.5)).to.be.closeTo(5.5, 0.1);
    });

    it('incorrect input type should return undefined', () => {
      expect(mathEnforcer.sum('string')).to.be.undefined;
      expect(mathEnforcer.sum()).to.be.undefined;
      expect(mathEnforcer.sum([1])).to.be.undefined;
      expect(mathEnforcer.sum('string', 1)).to.be.undefined;
      expect(mathEnforcer.sum(1)).to.be.undefined;
      expect(mathEnforcer.sum(1, [1])).to.be.undefined;
      expect(mathEnforcer.sum({}, {})).to.be.undefined;
    });
  });
})