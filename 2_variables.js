/*
 * Variables are containers for storing data values.
 * For example, in the statement below, x is the variable.
 */

/*****************************************************************************************************************
    Example
******************************************************************************************************************/

const x = 5;

/*
 * This means that any time we use x in our code, it will be replaced with 5.
 * Typically in our programs we want to use variables as much as possible, because it makes the code more reusable.
 * Conventionally if your variable is going to be one value that never changes, capitalized variable names are used.
 * For example, if we wanted to store the value of pi, we would write:
 */

/*****************************************************************************************************************
    Example
******************************************************************************************************************/

const PI = 3.14;

/*
 * The const keyword is used to declare a constant variable, meaning it cannot be reassigned. You could not do x = 6 now that we have defined x.
 * If you want to be able to reassign a variable, you can use the let keyword.
 * For example, if we were incrementing a counter, we would use `let y = 0;` and then `y = y + 1;` to increment it.
 */

/*****************************************************************************************************************
    Example
******************************************************************************************************************/

let y = 0;
y = y + 1; // y is now 1

/*
 * A nice thing to understand about how this works under the hood, is that the variable name is just a reference to the value.
 * This means instead of storing 5 in our computer's memory every time we use x, we store it once and then x provides an "address" or "pointer" to that value.
 * For a value like 5, this optimization doesn't do a lot, but you can imagine if x was a list of 1000 records with performance stats, this saves a tonne of memory.
 * This detail isn't crucial to understand right now, but it will be referenced as you learn more about programming.
 */

/*****************************************************************************************************************

    EXERCISE!

    Exercise 1: Create a const called myName and set it equal to your name
    Print myName to the terminal using console.log.
    Write your code below and then run `node 2_variables.js` to print the output.

******************************************************************************************************************/
