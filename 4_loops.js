/*
 * You can program almost anything using loops and functions.
 * We'll explore functions in the next chapter, but here we're using loops.
 * You use loops when you have an array of data in javascript and need to do something with each of the values.
 * Below we're going to create an array of objects that represent user records, and we're going to print out the name of each user.
 * Here we define an array that contains 3 objects
 */
const users = [
  {
    // Object 1
    name: "Jesse",
    email: "jesse@givetel.com",
    age: 77,
  },
  {
    // Object 2
    name: "Angus",
    email: "angus@givetel.com",
    age: 78,
  },
  {
    // Object 3
    name: "Liam",
    email: "liam@givetel.com",
    age: 17,
  },
];

/*
 * Here we loop through the array of users and print out each user's name.
 * Notice that we need to use parentheses around the for loop condition.
 * We also need to use "const user of users".
 * const is used here because the "user" variable is being defined for the "scope" this loop only.
 * Scope is a technical term that can be a little confusing, but you can think of it as the "area" where a variable lives.
 * If we tried to console.log(user.name) outside of the loop, it would not work because the variable "user" is out of scope.
 */
for (const user of users) {
  console.log(user.name);
}

/*
 * Another way to define a loop is to use the "traditional" for loop.
 * This is the same as the above loop, but it's a little more verbose.
 * The "traditional" for loop is useful when you need to do something a specific number of times, or do tricky things like iterate over every second item in an array.
 */
for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}

/*
 * Breaking down the above loop:
 * 1. let i = 0; - This is the starting point of the loop. We're defining a variable called "i" and setting it to 0. We use let because we're adding 1 to i each time we loop.
 * 2. i < users.length; - This is the condition that must be true for the loop to continue.
 * In this case, we're saying that the loop should continue as long as i is less than the length of the users array.
 * 3. i++ - This is the "increment" part of the loop. We're saying that after each loop, we want to add 1 to i.
 * If we needed every second value in the array, we would do i += 2 instead of i++.
 * 4. console.log(users[i].name); - This is the code that runs each time the loop runs.
 * In this case, we're printing out the name of the user at index i in the users array.
 * The first time the loop runs, i is 0, so we're printing out the name of the user at index 0. This is the first item of the array.
 */

/*
 * The last type of loop we'll look at is the while loop.
 * The while loop is useful when you don't know how many times you need to loop.
 * In this example, we're going to loop until we find a user with an age of 18.
 * We're going to use a variable called "found" to keep track of whether we've found a user with an age of 18.
 * We're also going to use a variable called "i" to keep track of which user we're looking at.
 */
let found = false;
let i = 0;
while (!found) {
  if (users[i].age === 18) {
    found = true;
  }
  i++;
}

/*
 * Breaking down the above loop:
 * 1. let found = false; - We're defining a variable called "found" and setting it to false.
 * 2. let i = 0; - We're defining a variable called "i" and setting it to 0.
 * 3. while (!found) { - This is the condition that must be true for the loop to continue.
 * In this case, we're saying that the loop should continue as long as found is false.
 * 4. if (users[i].age === 18) { - This is the code that runs each time the loop runs.
 * In this case, we're checking if the age of the user at index i in the users array is 18.
 * If it is, we set found to true, which will cause the loop to stop.
 * 5. i++; - This is the "increment" part of the loop. We're saying that after each loop, we want to add 1 to i.
 * 6. } - This is the end of the if statement.
 * 7. } - This is the end of the while loop.
 * If we didn't find a user with an age of 18, the loop would continue forever.
 * While loops are really nice for working with ongoing streams of data.
 */
