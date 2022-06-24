// take the operator from the user through prompt box in JavaScript.  
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
// accept the number from the user through prompt box  
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; // declaration of the result variable.  
  
// use if, elseif and else keyword to define the calculator condition in JavaScript.  
if (operator == '+') { // use + (addition) operator to add two numbers  
    result = number1 + number2;  
}  
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
    result = number1 - number2;  
}  
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
    result = number1 * number2;  
}  
else if (operator == '*') { // use / (division) operator to divide two numbers  
    result = number1 / number2;  
}  
else {  
    window.alert("This is not an operator. \nRefresh to Try Again")
   }  
  
// display the result of the Calculator  
window.alert(" Result is" + result);  