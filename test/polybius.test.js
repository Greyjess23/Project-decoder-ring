// Write your tests here!
const expect = require('chai').expect;
const {polybius} = require('../src/polybius');

describe("polybius()", () => {
    it("Returns 42 when translating 'i'", () => {
        const actual = polybius("i");
        const expected = "42";
        expect(actual).to.equal(expected);
    })
    it("Returns 42 when translating 'j'", () => {
        const actual = polybius("j");
        const expected = "42";
        expect(actual).to.equal(expected);
    })
    it("Ignores capitalize letters", () => {
        const actual = polybius("MessAge");
        const expected = "23513434112251";
        expect(actual).to.equal(expected);
    })
    it("Maintains spaces in the message when encoding", () => {
        const actual = polybius("A message");
        const expected = "11 23513434112251";
        expect(actual).to.equal(expected);
    })
    it("Maintains spaces in the message when decoding", () => {
        const actual = "11 23513434112251";
        const expected = polybius("A message");
        expect(actual).to.equal(expected);
    })
    it("Return (i/j) when translating '42'", () => {
        const actual = polybius('42', false);
        const expected = "(i/j)";
        expect(actual).to.equal(expected);
    })
 });       