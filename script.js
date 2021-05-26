// create a new function called operate. 
// takes an operator and 2 numbers and then calls one of the (add, sub, mult, div) functions on the numbers. 
function operate(number1, operator, number2) {

if (operator === '+') { 
    return number1 + number2; 
}

if (operator === '-') { 
    return number1 - number2; 
}

if (operator === 'x') { 
    return number1 * number2;
}

if (operator === '/') { 
    return number1 / number2;
} else { 
    return 'ERROR';
}
}; 

//go back and create a basic HTML calculator with digit buttons and = key and display
//come back to do the JS later for it. 



// Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.




//Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses
// an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
// You should already have the code that can populate the display, so once operate() has been called, update the display with 
// the ‘solution’ to the operation.
// You need to figure out how to store all the values and call the operate function with them. 

