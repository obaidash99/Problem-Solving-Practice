// Find Minimum and Maximum number in a list or array ==========================================================>> NOT SOLVED

// var min = function (list) {

// };

// // var max = function(list){
// //   return list[0];
// // }

// let arr = [2, 6, 8, 1, 6, 3, 5, 99, 55, 74, 0, 4, 7, 20, 19, 21];
// min(arr);
//
//
//
//

// Numbers less than 5 will be replaced by 0 and above or equal 5 will be replaced by 1 ============================>> SOLVED
// function fakeBin(x) {
// 	// let newNum = [];
// 	// for (let i = 0; i < x.length; i++) {
// 	// 	if (x[i] < 5) {
// 	// 		newNum.push('0');
// 	// 	} else {
// 	// 		newNum.push('1');
// 	// 	}
// 	// }
// 	// console.log(newNum.join(' '));

// 	return x.replace(/\d/g, (n) => '0000011111'[n]); // NOT MY SOLUTION
// }

// console.log(fakeBin('123456789'));
//
//
//

// Is he gonna survive?? ===========================================================================================>> SOLVED
// function hero(bullets, dragons) {
// 	return bullets / 2 >= dragons ? true : false;
// }

// console.log(hero(10, 5));
// console.log(hero(4, 5));
// console.log(hero(7, 5));
//
//
//

// Count the number of divisors of a positive integer n.  ==========================================================>> SOLVED

// function getDivisorsCnt(n) {
// 	let divisors = [];
// 	for (let i = 1; i <= n; i++) {
// 		n % i === 0 ? divisors.push(i) : 'not divisor';
// 	}
// 	return divisors.length;
// }

// console.log(getDivisorsCnt(5123));
//
//
//

// Say Wlcome in defferent languages  ==============================================================================>> NOT SOLVED

// const obj = {
// 	english: 'Welcome',
// 	czech: 'Vitejte',
// 	danish: 'Velkomst',
// 	dutch: 'Welkom',
// 	estonian: 'Tere tulemast',
// 	finnish: 'Tervetuloa',
// 	flemish: 'Welgekomen',
// 	french: 'Bienvenue',
// 	german: 'Willkommen',
// 	irish: 'Failte',
// 	italian: 'Benvenuto',
// 	latvian: 'Gaidits',
// 	lithuanian: 'Laukiamas',
// 	polish: 'Witamy',
// 	spanish: 'Bienvenido',
// 	swedish: 'Valkommen',
// 	welsh: 'Croeso',
// };

// console.log(obj.dutch);

// function greet(language) {
// 	return obj.hasOwnProperty('language') ? obj.language : 'Welcome';
// }

// console.log(greet('finnish'));
//
//
//

// Twice as old  ==============================================================================>> SOLVED

// function twiceAsOld(dadYearsOld, sonYearsOld) {
// 	let age = sonYearsOld * 2;
// 	let diff = dadYearsOld - age;
// 	return diff >= 0 ? diff : diff * -1;
// }

// console.log(twiceAsOld(55, 30));
//
//
//

// Testing 1-2-3  =============================================================================>> SOLVED

// var number = (array) => {
// 	let newArr = [];
// 	for (let i = 0; i < array.length; i++) {
// 		newArr.push(`${i + 1}: ${array[i]}`);
// 	}
// 	return newArr;
// };

// let arr = ['a', 'b', 'c'];
// console.log(number(arr));
//
//
//

// Get the Middle Character ====================================================================>> SOLVED

// function getMiddle(s) {
// 	let newName = s.split('');
// 	if (s.length % 2 === 0) {
// 		return newName[s.length / 2 - 1] + newName[s.length / 2];
// 	} else {
// 		return newName[Math.floor(s.length / 2)];
// 	}
// }

// let name = 'obaidaa';
// console.log(getMiddle(name));
//
//
//

// Calculate average  ==========================================================================>> SOLVED

// function findAverage(array) {
// 	let sum = 0;
// 	if (array.length > 0) {
// 		for (let i = 0; i < array.length; i++) {
// 			sum = sum + +array[i];
// 		}
// 		return sum / array.length;
// 	} else {
// 		return sum;
// 	}
// }

// let arr = [];
// console.log(findAverage(arr));
//
//
//

// Total amount of points ======================================================================>> SOLVED
// function points(games) {
// 	let points = 0;
// 	for (let i = 0; i < games.length; i++) {
// 		if (+games[i][0] > +games[i][2]) {
// 			points = points + 3;
// 		} else if (+games[i][0] === +games[i][2]) {
// 			points = points + 1;
// 		} else {
// 			points = points + 0;
// 		}
// 	}
// 	return points;
// }

// let plays = ['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4'];
// console.log(points(plays));
//
//
//

// Reverse words =================================================================================> SOLVED

// function reverseWords(str) {
// 	let split = str.split(' ');
// 	console.log('splitted: ' + split);
// 	let word = '';
// 	let reverse = '';

// 	for (let i = 0; i < split.length; i++) {
// 		word = split[i];
// 		console.log('word: ' + word);
// 		for (let j = word.length - 1; j >= 0; j--) {
// 			reverse = `${reverse}${word[j]}`;
// 			console.log(reverse);
// 		}
// 	}
// }

// let name = 'obaida shurbaji';
// // console.log(name.split(' ')[0].length);

// reverseWords(name);

// Friend or Foe? ================================================================================> SOLVED
// let friends = ['Ryan', 'Kieran', 'Mark'];

// function friend(friends) {
// 	let trueFriends = friends.filter((el) => el.length == 4);
// 	return trueFriends;
// }

// console.log(friend(friends));

// Transportation on vacation ====================================================================> SOLVED

// function rentalCarCost(d) {
// 	let rent = d * 40;
// 	// d >= 3 ? rent - 20 : d >= 7 ? rent - 50 : rent;
// 	return d < 3 ? rent : d < 7 ? rent - 20 : rent - 50;
// }
// console.log(rentalCarCost(7));

// Square Number Check ===========================================================================> SOLVED
// var isSquare = function (n) {
// 	if (n < 0) {
// 		return false;
// 	}
// 	return Number.isInteger(Math.sqrt(n)) ? true : false;
// };
// console.log(isSquare(1));

// Grasshopper - Summation =======================================================================> SOLVED
// var summation = function (num) {
// 	let sum = 0;
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 	}
// 	return sum;
// };

// console.log(summation(8))

// Cat years, Dog years ==========================================================================> SOLVED

// var humanYearsCatYearsDogYears = function (humanYears) {
// 	let cat = 0,
// 		dog = 0;
// 	for (let i = 1; i <= humanYears; i++) {
// 		if (i == 1) {
// 			cat += 15;
// 			dog += 15;
// 		} else if (i == 2) {
// 			cat += 9;
// 			dog += 9;
// 		} else {
// 			cat += 4;
// 			dog += 5;
// 		}
// 	}
// 	return [humanYears, cat, dog];
// };

// console.log(humanYearsCatYearsDogYears(2));

// Counting Duplicates ===========================================================================> SOLVED

// function duplicateCount(text) {
// 	let obj = {};
// 	let count = 0;

// 	for (let i of text) {
// 		i = i.toLowerCase();
// 		if (!obj[i]) {
// 			obj[i] = 1;
// 		} else {
// 			obj[i]++;
// 		}
// 	}
// 	// console.log(obj);
// 	for (let i in obj) {
// 		if (obj[i] > 1) {
// 			count++;
// 		}
// 	}
// 	// console.log(count);
// 	return count;
// }

// let name = 'aabb';
// duplicateCount(name);

// Even or Odd ===================================================================================> SOLVED
// function evenOrOdd(number) {
// 	return number % 2 == 0 ? 'Even' : 'Odd';
// }
// console.log(evenOrOdd(1))

// Sum Arrays ====================================================================================> SOLVED
// function sum(numbers) {
// 	'use strict';
// 	let sum = 0;
// 	if (numbers.length <= 0) {
// 		return 0;
// 	}
// 	numbers.map((el) => {
// 		sum += el;
// 	});
// 	return sum;
// }
// console.log(sum([]));

// Replace With Alphabet Position ================================================================> SOLVED

// const alphabetPosition = (text) =>
// 	[...text.replace(/[^a-z]/gi, '').toLowerCase()]
// 		.map((e) => e.charCodeAt() - 96)
// 		.join(' ');

// alphabetPosition("The sunset sets at twelve o' clock.");
