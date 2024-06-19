// fibonacci sequence

// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

// function fibs(number) {
//      number = number - 2;
//      let result = [];
//      let firstNum = 0;
//      let secondNum = 1;

//      result.push(firstNum);
//      result.push(secondNum);

//      while(number > 0) {
//           let resultNum = firstNum + secondNum;
//           firstNum = secondNum;
//           secondNum = resultNum;

//           result.push(resultNum);
//           number--;
//      }

//      return result;
// }

// let output = fibs(8);

// output.forEach(element => {
//      console.log(element);
// });


// Now write another function fibsRec which solves the same problem recursively.

// function fibsRec(number) {
//      if (number == 0) {
//           return 0;
//      } else if(number == 1) {
//           return 1;
//      } else {
//           return fibsRec(number - 1) + fibsRec(number - 2);
//      }
// }

// function fibs(number) {
//      let result = [];
//      for (let i = 0; i < number; i++) {
//           result.push(fibsRec(i));
//      }

//      return result;
// }

// let output = fibs(8);
// output.forEach(element => {
//      console.log(element);
// });


