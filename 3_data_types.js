/*
 * Javascript is a dynamically typed language, meaning variables you have assigned as a certain type can be reassigned as another type.
 * For example, if we have a variable x that is a number, we can reassign it to be a string.
 */

/*****************************************************************************************************************
    Example
******************************************************************************************************************/

let x = 420;
x = "blaze it"; // x is now a string, and this is legal.

/*
 * This is different from "statically typed" languages like Java, where you would have to declare the type of x when you first create it.
 * For example, in Java you would write `int x = 420;` and then `x = "blaze it";` would be illegal.
 * This is a tradeoff between flexibility and safety. Javascript is more flexible, but Java is safer and static types allow the code to run faster, generally.
 * For a nice explanation on static vs dynamic typing, you can watch this short video https://www.youtube.com/watch?v=GqXpFycPWLE (5 minutes)
 * The guy in the video loves static types which we won't be using in Javascript, but he does a good job of explaining the difference.
 */

/*
 * There are 7 primitive data types in Javascript:
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Null (I typically think of this as "there is actively no value")
 * 5. Undefined (I typically think of this as "there is passively no value") (note: many feel having both "null" and "undefined" was a mistake in the design of Javascript)
 * 6. Symbol (you will rarely use this)
 * 7. BigInt (you will rarely use this)
 */

/*****************************************************************************************************************
    Example
******************************************************************************************************************/

const number_example = 7;
const string_example = "get money";
const boolean_example = true;
const null_example = null;
const undefined_example = undefined;
const symbol_example = Symbol("symbol_example"); // Don't stress about this for now
const bigint_example = 9007199254740991n; // Don't stress about this for now

/*
 * You will also commonly run into some more complex data types:
 * 1. Object
 * 2. Array
 */

/*****************************************************************************************************************
    Example
******************************************************************************************************************/

const object_example = {
  name: "Jesse",
  role: "Bad mutha fucker",
  age: 77,
};

const array_example = ["dog", "cat", "lemur"];

/*
 * Objects allow us to store key/value pairs, which is very common in most programming languages.
 * Arrays allow us to have a collection of values which we could "iterate" through.
 * Iterating is the process of going through the values in an array one at a time.
 * We will cover this in the next chapter.
 */

/*****************************************************************************************************************
    EXERCISE!
******************************************************************************************************************/

/*
 * Create variables with the below data types.
 * Next, log each one to the console with its type next to it.
 * For example, the print should look like "Number: 7"
 * Number
 * String
 * Boolean
 * Array
 * Object
 * Run the code you've written below using `node 3_data_types.js`
 */
