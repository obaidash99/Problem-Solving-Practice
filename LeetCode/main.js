// Two Sum problem:

var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				if (i !== j) {
					return [i, j];
				}
			}
		}
	}
};

let nums = [3, 2, 3];

console.log('######', twoSum(nums, 6));

// Roman to Integers problem

var romanToInt = function (s) {
	const roman = s.split('');
	const integers = roman.map((el) => {
		el == 'I'
			? el = 1
			: el == 'V'
			? 5
			: el == 'X'
			? 10
			: el == 'L'
			? 50
			: el == 'C'
			? 100
			: el == 'D'
			? 500
			: 1000;
	});

	// return roman, integers;
	console.log(roman);
	console.log(integers);
};

romanToInt('XII');
