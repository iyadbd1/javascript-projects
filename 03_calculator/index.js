// // max lenght for output is 12 digits
// let output = "0",
//   exp = "0",
//   ans = 0;
// const maxLength = 10;

// // get html elements
// const screen = document.getElementById("screen");

// function display(str) {
//   screen.textContent = str;
// }

// function operation([a, op, b]) {
//   switch (op) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;

//     default:
//       break;
//   }
// }

// function parse(expr) {
//   [, a, op, b] = expr.match(/(\d+)\s*([+\-*/])\s*(\d+)/);
//   return [a, op, b];
// }

// function evaluate(expr) {
//   return operation(parse(expr)).toFixed(3);
// }

// display(output);

// function isDigit(char) {
//   return "0123456789".includes(char);
// }

// function isOperation(char) {
//   return "+-*/".includes(char);
// }

// //
// function calculate(x) {
//   if (x === "=") {
//     if (isDigit(exp[exp.length - 1])) {
//       ans = evaluate(exp);
//       output = exp = ans.toString();
//       display(output);
//     }
//   } else {
//     if (exp.length < maxLength) {
//       if (exp[exp.length - 1] === ".") {
//         if (isDigit(x)) {
//           exp += x;
//           output = exp;
//           display(output);
//         }
//       } else {
//         if (isOperation(exp[exp.length - 1]) && isOperation(x)) {
//           exp[exp.length - 1] = x;
//         } else {
//           exp += x;
//         }
//         output = exp;
//         display(output);
//       }
//     }
//   }
// }

// Easier method

const screen = document.getElementById("screen");

function appendToScreen(x) {
  screen.value += x;
}

function clearScreen() {
  screen.value = "";
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (err) {
    screen.value = "Error";
  }
}
