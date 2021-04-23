// Write your tests here!
const expect = require('chai').expect;
const {caesar} = require('../src/caesar');

describe("caesar", () => {
    it("Returns false if shift value is equal to 0", () => {
        const expected = false;
        const actual = caesar("zebra magazine", 0);

      expect(actual).to.eql(expected);
    });

    it("Returns false if shift is < -25", () => {
        const expected = false
        const actual = caesar("zebra magazine", -26);

      expect(actual).to.equal(expected);
    });

    it("Return false if > 25", () => {
        const expected = false
        const actual = caesar("zebra magazine", 26);

      expect(actual).to.eql(expected);
    });

   it("Return false if shift is not present", () => {
        const expected = false
        const actual = caesar("zebra magazine", undefined);

      expect(actual).to.eql(expected);
    });

    it("Handles shift that goes past the end of the alphabet", () => {
        const expected = "cheud pdjdclqh"
      const actual = caesar("zebra magazine", 3);

      expect(actual).to.eql(expected)
    });
});