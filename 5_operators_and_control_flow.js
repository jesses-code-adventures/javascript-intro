/*

     This chapter will give you the building blocks for writing javascript code.
     Code runs top-to-bottom, and we can often think of chunks of code as procedures, or like a recipe.
     Within the procedures, you'll need to do different things in different situations.
     With this in mind, let's look at if statements and boolean logic.
     If statements are the most basic way to control the flow of your code.
     They allow you to run different code depending on the situation.

     They are generally structured:
     if (condition) // This is where we define when we want to run the code
     // For example we could say age > 25 for condition.
     { // Use a squirly brace to start the code that we want to run
       // Put code here
     } // Use a squirly brace to end the code that we want to run

     Combined:
     if (age > 25) {
         doSomething();
     }

     You can also add an else statement to run code when the condition is not true.
     if (age > 25) {
         doSomething();
     } else {
         doSomethingElse();
     }

*/

/*****************************************************************************************************************

    Example

    Let's say we have an array of baddies.
    We want to print out the name of the first baddie that is bad and is over 25
    At this point, we want to stop looping.

******************************************************************************************************************/

const baddies = [
  { name: "Ice Spice", age: 19, isBad: true },
  { name: "Rosie O'Donnell", age: 55, isBad: false },
  { name: "Shakira", age: 35, isBad: true },
  { name: "KinkyCougarNympho", age: 52, isBad: false },
];

for (const baddie of baddies) {
  // Use an if statement to check if the baddie is bad and over 25
  if (baddie.isBad && baddie.age > 25) {
    // We're inside the scope where this if statement is true
    // print out the baddie's name
    console.log(baddie.name, baddie.name); // We do it twice, because Shakira Shakira
    // Use break to stop looping
    break;
  }
}
