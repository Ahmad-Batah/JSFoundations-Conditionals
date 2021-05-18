const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi, I'm ${name}.`);

const num1 = parseInt (prompt("Please enter the first number : "));
const num2 = parseInt(prompt("Please enter the second number : "));

let operation = prompt("Please choose the operation (+, -, /, *):");
if (num1 && num2){
if (operation ==="+") console.log(num1 + num2);
  else if (operation ==="-") console.log(num1 - num2);
  else if (operation ==="/") console.log(num1 / num2);
  else if (operation ==="*") console.log(num1 * num2);
else console.log("the operation is invalid")
}

  else console.log("the numbers were invalid")

  
   





