

// Write a function called finder that accepts two parameters, the first one is a strong and the second is an array
// have your function return true if the string is found in the array and false if it is not
var nums = ["Javascript", "hello", "world"];

var finder = function(argument){
	for (var i = 0; i < nums.length; i++){
		if (argument === nums[i]){
			return true;
		};
	};
	return false;
};

finder("Javascript");
// ----------------------------------------------------------------------------------