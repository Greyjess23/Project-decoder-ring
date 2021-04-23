// Write your tests here!
const expect = require('chai').expect
const {substitution} = require('../src/substitution');

describe("substitution()", () => {
    it("Returns false if alphabet is not = to 26 charachters", () => {
        const alphabet = "notenough"
        const actual = substitution("message", alphabet)
        expect(actual).to.be.false
    })
    it("Returns the correct message after translation", () => {
        const alphabet = "qazwsxedcrfvtgbyhnujmikolp"
        const expected = substitution("Hello World", alphabet)
        const actual = "dsvvb kbnvw"
        expect(actual).to.equal(expected)
    })
    it("Returns false if there are duplicate charachters given in the alphabet", () => {
        const alphabet = "abcabcabcabcabcabcabcabcab"
        const actual = substitution("messge", alphabet)
        expect(actual).to.be.false
    })
    it("Maintains spaces when encoding", () =>{
        const alphabet = "qazwsxedcrfvtgbyhnujmikolp"
        const expected = substitution("Hello World", alphabet)
        const actual = "dsvvb kbnvw"
        expect(actual).to.equal(expected)
    })
    it("Maintains spaces when decoding", () =>{
        const alphabet = "qazwsxedcrfvtgbyhnujmikolp"
        const expected = substitution("dsvvb kbnvw", alphabet, false)
        const actual = "hello world"
        expect(actual).to.equal(expected)
    })
    it("Ignores capital letters", () => {
        const alphabet = "qazwsxedcrfvtgbyhnujmikolp"
        const expected = substitution("Hello World", alphabet)
        const actual = "dsvvb kbnvw"
        expect(actual).to.equal(expected)
    })
})