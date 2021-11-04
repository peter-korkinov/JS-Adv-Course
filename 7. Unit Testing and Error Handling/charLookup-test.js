const expect = require('chai').expect;
const {lookupChar} = require("./charLookup");

describe('charLookup tests', () => {
  it('Test success', () => {
    expect(lookupChar('testString', 1)).to.be.string('e');
  });

  it('Test incorrect input returns undefined', () => {
    expect(lookupChar(1, 1)).to.be.undefined;
    expect(lookupChar('testString', '1')).to.be.undefined;
    expect(lookupChar('testString', 1.1)).to.be.undefined;
    expect(lookupChar('testString')).to.be.undefined;
    expect(lookupChar(1)).to.be.undefined;
  });

  it('Test input string length lesser than index', () => {
    expect(lookupChar('testString', 10)).to.be.string('Incorrect index');
  });

  it('Test index with value less than 0', () => {
    expect(lookupChar('testString', -1)).to.be.string('Incorrect index');
  })
})