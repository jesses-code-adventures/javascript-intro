/*
 * Functions are fundamental to basically every programming language.
 * They allow us to write code once and then use it over and over again.
 * With our earlier examples, we've been raw-dogging our code in the file we're in. It runs top to bottom, and that's it.
 * Here we will explore creating functions that we can redeploy throughout our code.
 * We will also touch on scope a little more, as functions are a great way to control scope.
 * Here is a basic example of a function.
 */

/*****************************************************************************************************************
    Example
******************************************************************************************************************/

/**
 * This function adds two variables together.
 * Adding a comment like this above the function is called a docstring.
 * If you add docstrings to your functions, hovering over them in your editor will show the docstring.
 * Docstrings are great for adding explanations or apologies for your future self.
 * Optionally, you can add descriptions for the parameters of the function like this.
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 */
function add(a, b) {
  return a + b;
}

const x = 1;
const y = 2;
const sum = add(x, y);

/*
 * A function is declared by starting with "function"
 * Next is the the name of the function and parentheses containing the arguments to the function.
 * Next is the body of the function, which is signified using the squirly brace {
 * Inside the squirly braces, any variables you create belong inside the function ONLY.
 * This is to say we are in the scope of the function.
 * Using the keyword return, you can pass a value out of the function.
 * If you don't use the keyword return, the function will return undefined.
 */

/*
 * Now we'll write a couple more functions to play with as examples.
 */

/*****************************************************************************************************************
    Example
******************************************************************************************************************/

/**
 * This function takes a string and returns a new reversed string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
  let reversed = "";
  // A reverse for loop
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

/**
 * You may also see functions written like this - it's the same thing.
 * This function takes a string and returns a new reversed string.
 * Stylistically I prefer using the function keyword for clarity.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
const reverseStringArrowFunction = (str) => {
  return str.split("").reverse().join("");
};

/*****************************************************************************************************************
    EXERCISE!
******************************************************************************************************************/

/*
 * Write a function that takes an array of strings as an argument.
 * The function should return a new array with all the strings reversed.
 * You can use the reverse_string function above to help you.
 * Write your function below, then call it below the end of the function
 * run `node 5_functions.js`in the terminal to print the output.
 */
