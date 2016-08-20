var chai = require("chai")
var assert = chai.assert
var expect = chai.expect

// Bring in the script
var coolClass = require("../index")

describe("Tests cases for the sum method", function(){
		it("return an error when anything other than array is passed", function(){
			var myCalculator = new coolClass();
			expect( myCalculator.sum([1, 2, 3]) ).to.equal("arrays only");
		})
})