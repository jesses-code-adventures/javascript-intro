/*
 * Welcome to learning about variables in javascript!!
 * Variables are containers for storing data values.
 * For example, in the statement below, x is the variable.
 */

const x = 5;

/*
 * This means that any time we use x in our code, it will be replaced with 5.
 * Typically in our programs we want to use variables as much as possible, because it makes the code more reusable.
 * Conventionally if your variable is going to be one value that never changes, capitalized variable names are used.
 * For example, if we wanted to store the value of pi, we would write:
 */

const PI = 3.14;

/*
 * A nice thing to understand about how this works under the hood, is that the variable name is just a reference to the value.
 * This means instead of storing 5 in our computer's memory every time we use x, we store it one and then x provides an "address" or "pointer" to that value.
 * For a value like 5, this optimization doesn't do a lot, but you can imagine if x was a list of 1000 records with performance stats, this saves a tonne of memory.
 */
