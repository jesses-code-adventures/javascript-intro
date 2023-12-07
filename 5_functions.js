/*
 * Functions are fundamental to basically every programming language. They allow us to write code once and then use it over and over again.
 * With our earlier examples, we've been raw-dogging our code in the file we're in. It runs top to bottom, and that's it.
 * Here we will explore creating functions that we can redeploy throughout our code.
 * We will also touch on scope a little more, as functions are a great way to control scope.
 * Here is a basic example of a function.
 */

/**
 * This function adds two variables together.
 * Adding a comment like this above the comment is called a docstring.
 * If you add docstrings to your functions, hovering over them in your editor will show the docstring.
 * Docstrings are great for adding explanations or apologies for your future self.
 */
function add(a, b) {
  return a + b;
}

const x = 1;
const y = 2;
const sum = add(x, y);
console.log(sum);
