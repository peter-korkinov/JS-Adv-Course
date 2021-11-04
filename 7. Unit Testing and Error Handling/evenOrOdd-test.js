const expect = require('chai').expect;
const { isOddOrEven } = require('./evenOrOdd');

describe('Even Or Odd tests', () => {
  it('Test invalid input returns undefined', () => {
    expect(isOddOrEven(0)).to.be.undefined;
    expect(isOddOrEven({})).to.be.undefined;
    expect(isOddOrEven()).to.be.undefined;
  });

  it('Test even string returns even', () => {
    expect(isOddOrEven('even')).to.be.string('even');
    expect(isOddOrEven('ev')).to.be.string('even');
    expect(isOddOrEven('')).to.be.string('even');
    expect(isOddOrEven('evenly')).to.be.string('even');
  })

  it('Test odd string returns odd', () => {
    expect(isOddOrEven('o')).to.be.string('odd');
    expect(isOddOrEven('odd')).to.be.string('odd');
    expect(isOddOrEven('oddly')).to.be.string('odd');
    expect(isOddOrEven('oddlyfy')).to.be.string('odd');
  })
})