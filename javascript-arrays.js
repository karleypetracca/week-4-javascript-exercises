// // 1. Write a JavaScript function to check whether an `input` is an array or not.

// function isArray(input) {
//     return Array.isArray(input);
// }
// console.log(isArray([1,2,6,7]));
// console.log(isArray("k"));



// // 2. Write a JavaScript function to get the first 'n' elements of an array.

// function numArrayElements(array, indexNum) {
//     let newArray = array.filter(function(element, index) {
//         if (indexNum > index) {
//             return element;
//         }
//     })
//     return newArray;
// }
// console.log(numArrayElements([1,2,6,7], 1));
// console.log(numArrayElements([1,2,6,7], 2));



// // 3. Write a simple JavaScript program to join all elements of the following array into a string. 

// function joinElements(array) {
//     return array.reduce(function(total, currentValue) {
//         return total + currentValue;
//     });
// }

// console.log(joinElements([1,2,6,7]));
// console.log(joinElements(["hello", "world"]));



// // 4. Write a JavaScript program which accept a number as input and insert dashes (-) between each number.
// // ```
// // Example: const numbers = 8675309
// // ```

// function insertDashes(num) {
//     num = num.toString()
//     let newNum = "";
//     for (i=0; i < num.length; i++) {
//         newNum += num[i] + "-";
//     }
//     return newNum.substring(0, num.length*2 -1, -1);
// }
// console.log(insertDashes(8675309));
// console.log(insertDashes(5678));



// // 5. Write a JavaScript program to sort the items of an array.

// function sortArray(array) {
//     array.sort();
//     array.sort(function(a, b) {
//         return a-b;
//     })
//     return array;
// }

// console.log(sortArray([1,7,6,4])); // should return [1,4,6,7]
// console.log(sortArray([1,"apple",6,4])); // should return [1,4,6,"apple"]
// console.log(sortArray(["papayas", "zebra", "apple", "findings"])); // should return ["apple", "findings", "papayas", "zebra"]



// // 6. Write a JavaScript program to find the most frequent item of an array.
// // ```
// // Sample array: const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// // ```

// function mostFrequentElement(array) {
//     let mostFrequent = [],
//         frequencyCount = [];
//     for (i = 0; i < array.length; i++) {
//         if (mostFrequent.includes(array[i])) {
//             frequencyCount[mostFrequent.indexOf(array[i])] += 1;
//         } else {
//             mostFrequent.push(array[i]);
//             frequencyCount.push(1);
//         }
//     }
//     let max = Math.max(...frequencyCount),
//         maxIndex = frequencyCount.indexOf(max);
//     return mostFrequent[maxIndex];
// }

// console.log(mostFrequentElement([1,7,4,4,1,8,1])); // should return 1
// console.log(mostFrequentElement([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])); // should return "a"



// // 7. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input `The Quick Brown Fox` the output should be `tHE qUICK bROWN fOX`.

// function switchCase(input) {
//     newInput = ""
//     for (i = 0; i < input.length; i++) {
//         if (input[i] === input[i].toUpperCase()) {
//             console.log("UpperCase! " + input[i])
//             newInput += input[i].toLowerCase();
//         } else if (input[i] === " ") {
//             newInput += input[i]
//         } else {
//             console.log("LowerCase! " + input[i])
//             newInput += input[i].toUpperCase();
//         }
//     }
//     return newInput;
// }

// console.log(switchCase("The Quick Brown Fox")); // returns "tHE qUICK bROWN fOX"



// 8. Write a JavaScript program which prints the elements of the following array. Note : Use nested for loops. 
// ```
// const arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// ```

// function printNestedElements(array) {
//     asd
// }

// const arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// console.log(printNestedElements(arr));

array = [16, "*", 13];

console.log(array[0] + array[1] + array[2]);


// 10.  There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// ```
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// ```

// function

// console.log()




// 11. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// ```
// const arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
// ```

// function

// console.log()




// 12. Write a JavaScript function to merge two arrays and removes all duplicates elements. 
// ```
// const arr1 = [1, 2, 3];
// const arr2 = [2, 30, 1];
// ```

// function

// console.log()




// ## use map() to solve these. 
// 13. Make an array of numbers that are doubles of the first array

// function

// console.log()




// 14. Take an array of numbers and make them strings. 

// function

// console.log()




// 15. Capitalize each of an array of names. 

// ## use filter() to solve this.

// function

// console.log()




// 16. Find all the strings in a array thats less than 5 letters
// ```
// const arr = ["Sometimes", "I", "give", "myself", "the", "creeps", "Sometimes", "my", "mind","plays", "tricks", "on", "me",
// "It", "all", "keeps", "adding", "up",
// "I", "think", "I'm", "cracking", "up"
// "Am", "I", "just", "paranoid?",]

// function

// console.log()



