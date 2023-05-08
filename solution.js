// //////////// section1 /////////////////

// // Write a function named setAlarm that has two arguments.
// // The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
// // The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
// // The function should only return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm, of course!). It should return false otherwise.

// function setAlarm(employed, vacationing) {
//     if (employed && !vacationing) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(setAlarm(true, true)); // => returns false
// console.log(setAlarm(false, false)); // => returns false
// console.log(setAlarm(false, true)); // => returns false
// console.log(setAlarm(true, false)); // => returns true

// ////////////////// section 2 ///////////////////

// // Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.
// function addNumberCount(number) {
//     let count = 0;
//     for ( let i = 1; i < number; i ++) {
//         if (i % 2 !== 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(addNumberCount(16));

// ///////////////////section 3 ////////////////////

// // Write a function named trollsBeGone which receives one argument that should be a sentence (a string). The function should return a new string with all the vowels removed from the original string.
// function trollsBeGone(sentence) {
//     const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
//     const newSentence = sentence.replace(/[aeiouAEIOU]/g, "");
//     return newSentence;
// }

// console.log(trollsBeGone("This website is for losers LOL")); // => returns "Ths wbst s fr lsrs LL"

// /////////////////section 4 /////////////////////
// // Make an object named bankInfo with your banking info that includes the keys listed below. Each key should have a number value that can either be negative or positive (e.g. -500 or 500)
// const bankInfo = {
//     savings: 600,
//     checking: 800,
//     moneyMarket: 200,
//     creditCard: -2000
// };

// // Write a function called bankAccountSummary that accepts your bankInfo object as an argument. The function should calculate the total of your bank account and return it.

// function bankAccountSummary(bankInfo) {
//     const total = bankInfo.savings + bankInfo.checking + bankInfo.moneyMarket + bankInfo.creditCard;
//     return total;
// }

// console.log(bankAccountSummary(bankInfo));

// // Save your bankAccountSummary total to a variable called bankTotal
// const bankTotal =  bankAccountSummary(bankInfo);

// // Write another function called inTheRed that accepts your bank account summary total (number) as an argument. The function should return true if your total is less than 0, and false otherwise.
// function inTheRed(number) {
//     if (bankTotal < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // assume my bank total is -400
// console.log(inTheRed(bankTotal)); // returns true





