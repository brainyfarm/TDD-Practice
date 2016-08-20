var chai = require("chai")
var assert = chai.assert
var expect = chai.expect

// Bring in the script
var coolClass = require("../index")

var myCalculator = new coolClass();

describe("Tests cases for the sum method", function(){
		it("return an error when anything other than array is passed", function(){
			expect( myCalculator.sum(1, 2, 3) ).to.equal("arrays only");
		})

		it("array element must be numbers only", function(){
			var badArray = ["1", 2, 3, " "]
			expect( myCalculator.sum(badArray) ).to.equal("only numbers in array");
		})

		it("When invoke with [1, 2, 3] should return 6", function(){
			var arr = [1, 2, 3]
			expect( myCalculator.sum(arr) ).to.equal(6);
		})
})