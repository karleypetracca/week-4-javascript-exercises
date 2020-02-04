// // #1 - print numbers


// function printNumbers(startNum, endNum) {
//   let loop = startNum;
//   while (loop <= endNum) {
//     console.log(loop);
//     loop ++;
//   }
// }

// printNumbers(1, 10);


//************************************//


// // #2 - print square


// function printSquare(size) {
//   for (let i = 0; i < size; i++) {
//     console.log("*".repeat(size));
//   }
// }

// printSquare(5)


//************************************//


// // #3 - print box


// function printBox(width, height) {
//   let end = "*".repeat(width);
//   console.log(end);
//   for (let i = 2; i < height; i++) {
//     console.log("*" + " ".repeat(width-2) + "*");
//   }
//   console.log(end);
// }

// printBox(6, 5)


//************************************//


// // #4 - print banner


// function printBanner(text) {
//   let end = "*".repeat(text.length + 4);
//   console.log(end);
//   console.log("* " + text + " *");
//   console.log(end);
// }

// printBanner("Welcome to DigitalCrafts")


//************************************//


// // #5 - factor number


// function factorNumber(num) {
//   let list = []
//   for (i = 0; i <= num; i++) {
//     if ((num % i) === 0) {
//       list.push(i);
//     }
//   }
//   console.log(list);
// }

// factorNumber(120);


//************************************//


// // #6 - caesar cipher pt1 (to cipher)


// const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'

// function toCaesarCipher(text, offset) {
//   let ltext = text.toLowerCase()
//   let cipher = ""
//   for (i = 0; i < (ltext.length); i++) {
//     if (ltext[i] === " ") {
//       cipher += " ";
//     }
//     else {
//       let cipherValue = alphabet[(alphabet.indexOf(ltext[i])) + offset];
//       cipher += cipherValue;
//     }
//   }
//   console.log(cipher[0].toUpperCase() + cipher.substr(1));
// }

// toCaesarCipher("Genius without education is like silver in the mine", 13)


//************************************//


// // #7 - caesar cipher pt2 (from cipher)


// const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'

// function fromCaesarCipher(text, offset) {
//   let ltext = text.toLowerCase()
//   let cipher = ""
//   for (i = 0; i < (ltext.length); i++) {
//     if (ltext[i] === " ") {
//       cipher += " ";
//     }
//     else {
//       let cipherValue = alphabet[(alphabet.indexOf(ltext[i])) + offset];
//       cipher += cipherValue;
//     }
//   }
//   console.log(cipher[0].toUpperCase() + cipher.substr(1));
// }

// fromCaesarCipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13)


//************************************//


// #8 - leetspeak


// function leetspeak(string) {
//   let ustring = string.toUpperCase()
//   let newString = "";
//   for (i = 0; i < string.length; i++) {
//     switch (ustring[i]) {
//       case "A":
//         newString += 4;
//         break;
//       case "E":
//         newString += 3;
//         break;
//       case "G":
//         newString += 6;
//         break;
//       case "I":
//         newString += 1;
//         break;
//       case "O":
//         newString += 0;
//         break;
//       case "S":
//         newString += 5;
//         break;
//       case "T":
//         newString += 7;
//         break;
//       default:
//         newString += ustring[i];
//     }
//   }
//   console.log(newString);
// }
        
// leetspeak('Leet');


//************************************//


// // #8 - long-long vowels


// function longLongVowels(string) {
//   let vowels = "aeiou";
//   let lstring = string.toLowerCase();
//   let newString = "";
//   for (let i = 0; i < lstring.length; i++) {
//     if (vowels.indexOf(lstring[i])+1) {
//       if (lstring[i] === lstring[i-1]) {
//         newString += lstring[i].repeat(4);
//       } else {
//         newString += lstring[i];
//       }
//     } else {
//       newString += lstring[i];
//     }
//   }
//   console.log(newString);
// }

// longLongVowels("Good cheese");
// longLongVowels("Cheese");
// longLongVowels("Aaron");


//************************************//


// // #9 - sum numbers


// function sumNumbers(array) {
//   let sumNum = 0;
//   for (i = 0; i < array.length; i++) {
//     sumNum += array[i];
//   }
//   console.log(sumNum);
// }

// sumNumbers([1, 4, 8]);


//************************************//


// // #10 - just positives


// function positiveNumbers(array) {
//   let posNum = [];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] >= 0) {
//       posNum.push(array[i]);
//     }
//   }
//   console.log(posNum);
// }

// positiveNumbers([1, -3, 5, -3, 0]);
// positiveNumbers([1, 2, 3]);
// positiveNumbers([-1, -2, -3]);


//************************************//


// // #11 - matrix addition


// function matrixAdd(m1, m2) {
//   addMatrix = []
//   for (i = 0; i < m1.length; i++) {
//     addMatrix.push([m1[i][0] + m2[i][0], m1[i][1] + m2[i][1]]);
//   }
//   console.log(addMatrix);
// }

// matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]);


//************************************//


// // #12 - matrix multiplication


// function matrixMultiply(m1, m2) {
//   let value1 = (m1[0][0] * m2[0][0]) + (m1[0][1] * m2[1][0]);
//   let value2 = (m1[0][0] * m2[0][1]) + (m1[0][1] * m2[1][1]);
//   let value3 = (m1[1][0] * m2[0][0]) + (m1[1][1] * m2[1][0]);
//   let value4 = (m1[1][0] * m2[0][1]) + (m1[1][1] * m2[1][1]);
//   console.log([[value1, value2], [value3, value4]]);
// }

// matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]);


//************************************//


// #13 - rock paper scissors


// function rockPaperScissors(p1, p2) {
//   let result = "";
//   switch (true) {
//     case (p1 === "rock" && p2 === "rock"):
//     case (p1 === "paper" && p2 === "paper"):
//     case (p1 === "scissors" && p2 === "scissors"):
//       result += "draw";
//       break;
//     case (p1 === "rock" && p2 === "scissors"):
//     case (p1 === "paper" && p2 === "rock"):
//     case (p1 === "scissors" && p2 === "paper"):
//       result += "player 1 wins";
//       break;
//     case (p1 === "rock" && p2 === "paper"):
//     case (p1 === "paper" && p2 === "scissors"):
//     case (p1 === "scissors" && p2 === "rock"):
//       result += "player 2 wins";
//       break;
//     default:
//       result += "error, try again";
//   }
//   console.log(result)
// }

// rockPaperScissors('rock', 'scissors');
// rockPaperScissors('rock', 'paper');
// rockPaperScissors('paper', 'paper');


//************************************//


// // #13 - tic tac toe

// function ticTacToe (array) {
//   switch (true) {
//     case ((array[0][0] === array[0][1]) && (array[0][0] === array[0][2])): // checks 1st row
//       return array[0][0];
//       break;
//     case ((array[1][0] === array[1][1]) && (array[1][0] === array[1][2])): // checks 2nd row
//       return array[1][0];
//       break;
//     case ((array[2][0] === array[2][1]) && (array[2][0] === array[2][2])): // checks 3rd row
//       return array[2][0];
//       break;
//     case ((array[0][0] === array[1][0]) && (array[0][0] === array[2][0])): // checks 1st column
//       return array[0][0];
//       break;
//     case ((array[0][1] === array[1][1]) && (array[0][1] === array[2][1])): // checks 2nd column
//       return array[0][1];
//       break;
//     case ((array[0][2] === array[1][2]) && (array[0][2] === array[2][2])): // checks 3rd column
//       return array[0][2];
//       break;
//     case ((array[0][0] === array[1][1]) && (array[0][0] === array[2][2])): // checks diagonal from top left
//       return array[0][0];
//       break;
//     case ((array[2][0] === array[1][1]) && (array[2][0] === array[0][2])): // checks diagonal from bottom left
//       return array[2][0];
//       break;
//     default:
//       result += "null";
//   }
// }

// console.log(ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ]))
// console.log(ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ]))
// console.log(ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ]))