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

		var total = 0; 
		// Fail if input is not an array
		if( !Array.isArray(arr_of_numbers) ) 
			return "arrays only";

		// Ensure array contains only numbers
		for( var i = 0; i < arr_of_numbers.length; i++){
			if(typeof arr_of_numbers[i] !== "number" )
				return "only numbers in array";
		}

		for(var j = 0; j < arr_of_numbers.length; j++){
			total += arr_of_numbers[j];
		}

		return total;

	}
}

module.exports = CoolClass