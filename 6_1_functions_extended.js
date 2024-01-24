/**
    * You may have noticed in the functions chapter that we put together a lot of the pieces we've looked at so far.
    * This chapter will spend a bit more time on functions so that we're comfortable with them.
**/


/*****************************************************************************************************************/

// Why do we use functions?

/**
    * Imagine a world where all of your code runs top-to-bottom and can't be reused.
    * Firstly, you would be repeating shit constantly - not desireable, especially if you need to come back and change things later.
    * Secondly, you wouldn't really know where you're doing certain things.
    * The fact that you can name functions lets you put behaviour for certain things in one place. This is called encapsulation.
    * Thirdly, finding out where problems are coming from would be a nightmare, unless you had really messy logging all throughout your code.
    * Functions allow you to organise that kind of thing in a specific place.
**/

/*****************************************************************************************************************/

// STEPPING BACK - What is a function at its core?

/**
    * You can think of a function as a "black box".
    * A black box takes in some input, does something with it, and returns some output.
    * It's an historical term that originated in the world of air travel, and it's used a lot in engineering/design circles.
    * On a plane, the pilots have their controls, and there is some "magic" that happens within the engine to make the plane fly.
    * The important thing to understand here is that the pilot doesn't need to know how the engine works to fly the plane.
    * To compare that to functions, the pilot is the programmer using the function, the controls are the function's arguments, and the engine is the body of the function.
    * For some context on this idea, watch this video from Vox. It's not about programming directly, but gives it gives you an idea of what we're doing.
    * https://www.youtube.com/watch?v=VGzpv96AQKg
**/

/*****************************************************************************************************************/

// Building a function

/**
    * Creating a function has the following steps:
    * 1. Telling the computer it's a function.
    * 2. Naming the function
    * 3. Defining the function's arguments
    * 4. Telling the user what the function returns (optional but good to do. we won't worry about it for now for simplicity)
    * 5. Writing the body of the function
    * 6. Returning the correct value.
**/

// What each step looks like

/**
    * 1. The "function" keyword
    * 2. You can choose any name, but you want it to be simple and descriptive. It should start with a lower case letter and use camelCase.
    * 3. Putting the arguments in parentheses. Some functions don't take arguments, but most do. If it doesn't take arguments, you still need the parentheses.
    * 4. The "returns" keyword followed by the type of value the function returns. We won't worry about this step in this chapter, for simplicity.
    * 5. The body of the function. This is where you write the code that does the thing you want the function to do. The body of the function is wrapped in squirly braces {}.
    * 6. The "return" keyword followed by the value you want to return. This is optional, but if you don't return anything, the function will return undefined.
**/

// Doing it pratically - in this example we don't do step 4 to keep things simple.
// I have annotated the step we're doing above each relevant part of the code.
// This example function takes two arguments and returns them, added together.
// Within the function, we also log the arguments to the console. This is part of the body of the function.

// 1.    2.             3.
function myFunctionName(argumentOne, argumentTwo) {
    // 5.
    console.log(argumentOne);
    console.log(argumentTwo);
    // 6.
    return argumentOne + argumentTwo;
}

/*****************************************************************************************************************/

// Calling a function

/**
    * Once you've written a function, you can call it.
    * If you don't call a function at any stage in your code, it will never run and is basically just random text in the file.
    * You can also call a function as many times as you like, and it should behave exactly the same every time.
    * Now that we've created our function above, which we can consider a black box that takes two inputs and returns one output, we can call it.
    * As you can see, we call the function 3 times here and none of the calls affect any other calls.
**/

myFunctionName(1, 2); // This returns the number 3.
myFunctionName(3, 4); // This returns the number 7.
myFunctionName(12, -10); // This returns the number 2.


/*****************************************************************************************************************/

// Exercise!

/**
    * Before starting this exercise, comment out the function calls above so that they don't run.
    * We're going to create a function called "calculateArea" that calculates the area of a rectangle.
    * The formula for calculating the area of a rectangle is width * height.
    * Our function will need to take two arguments, width and height. It will need to return one number - the area.
    * Please write the function below, and then use these function calls (uncommented) to test it.
    * console.log(calculateArea(1, 2)); // This should print 2.
    * console.log(calculateArea(5, 4)); // This should print 20.
    * console.log(calculateArea(2, 3)); // This should print 6.
**/

