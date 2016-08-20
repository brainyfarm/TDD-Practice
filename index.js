/**
* class CoolClass
* contains some cool methods
*/
class CoolClass{
	
	/**
	* sum method sums up all numbers in an array
	* @param arr
	* @return sum of all num
	*/
	sum(arr_of_numbers) {
		// Fail if input is not an array
		if( !Array.isArray(arr_of_numbers) ) return "arrays only";
	}
}

module.exports = CoolClass