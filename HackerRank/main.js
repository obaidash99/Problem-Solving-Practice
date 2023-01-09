// Day 1 Week 1 ###########################################

// function plusMinus(arr) {
// 	// Write your code here
// 	let pos = 0,
// 		neg = 0,
// 		zero = 0,
// 		length = arr.length;
// 	if (arr.length > 0) {
// 		for (let i = 0; i < arr.length; i++) {
// 			if (arr[i] > 0) {
// 				pos = pos + 1;
// 			} else if (arr[i] < 0) {
// 				neg = neg + 1;
// 			} else {
// 				zero = zero + 1;
// 			}
// 		}
// 		let posAverage = (pos / length).toFixed(6);
// 		let negAverage = (neg / length).toFixed(6);
// 		let zeroAverage = (zero / length).toFixed(6);

// 		console.log(posAverage);
// 		console.log(negAverage);
// 		console.log(zeroAverage);
// 	} else {
// 		return 'Invalid Input';
// 	}
// }
// plusMinus([-4, 3, -9, 0, 4, 1]);

// Day 2 Week 1 ###########################################

// let example = [5, 5, 5, 5, 5];
let example = [1, 3, 5, 7, 9];

// function miniMaxSum(arr) {
// 	let spare = [...arr];

// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[0] === arr[i]) {
// 			var equal = arr[i] * 4;
// 		} else {
// 			for (let i = 0; i < arr.length; i++) {
// 				let minArr = [];

// 				for (let j = 0; j < arr.length; j++) {
// 					if (arr[i] > arr[j]) {
// 						minArr.push(arr[i]);
// 						minArr.length >= 4 ? arr.splice(arr.indexOf(arr[i]), 1) : null;
// 					}
// 				}
// 			}
// 			var minSum = 0;
// 			for (let i = 0; i < arr.length; i++) {
// 				minSum = minSum + arr[i];
// 			}

// 			for (let i = 0; i < spare.length; i++) {
// 				let minArr = [];

// 				for (let j = 0; j < spare.length; j++) {
// 					if (spare[i] < spare[j]) {
// 						minArr.push(spare[i]);
// 						minArr.length >= 4 ? spare.splice(spare.indexOf(spare[i]), 1) : null;
// 					}
// 				}
// 			}
// 			var maxSum = 0;
// 			for (let i = 0; i < spare.length; i++) {
// 				maxSum = maxSum + spare[i];
// 			}
// 		}
// 	}
// 	minSum && maxSum ? console.log(minSum, maxSum) : console.log(equal, equal);
// }

// function miniMaxSum(arr) {
// 	let sum = arr.reduce((a, b) => a + b);
// 	let maxVal = Math.max(...arr);
// 	let minVal = Math.min(...arr);
// 	console.log(sum - maxVal + ' ' + (sum - minVal));
// }

// miniMaxSum(example);

// Day 3 Week 1 ###########################################

// function timeConversion(s) {
// 	let hours = +`${+s[0]}${+s[1]}`;
// 	let mins = s[3] + s[4];
// 	let secs = s[6] + s[7];
// 	let time = s[8] + s[9];

// 	if (hours < 12 && time[0] === 'A') {
// 		if (hours < 10) {
// 			hours = `0${hours}`;
// 		}
// 		return `${hours}:${mins}:${secs}`;
// 	} else {
// 		if (hours === 12 && time[0] === 'A') {
// 			hours = '00';
// 			return `${hours}:${mins}:${secs}`;
// 		}
// 		if (hours === 12 && time[0] === 'P') {
// 			return `${hours}:${mins}:${secs}`;
// 		} else {
// 			hours = hours + 12;
// 			return `${hours}:${mins}:${secs}`;
// 		}
// 	}
// }

// console.log(timeConversion('12:45:54AM'));

// Lonely Integer ###########################################

let a = [1, 2, 3, 4, 3, 2, 1];

console.log([...new Set(a)]);

console.log(a.filter((x, i, a) => a.indexOf(x) === i));
