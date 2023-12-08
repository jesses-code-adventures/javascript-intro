/*
 * We have reached your first project!
 *
 * Note: You'll need to google some things to get this working.
 * We haven't covered importing functions and modules yet.
 *
 */

/*****************************************************************************************************************
    EXERCISE!

    It's your first day as a data analyst for the NBA.
    Stan, the engineer before you was fired for pulling data from their API too often.
    Stan cost the NBA millions of dollars in server moneys due to a loop that never ended.

    Your first job is to write a caching solution to prevent this from happening again.
    This means the data will be pulled from the API and saved to the disk if it doesn't exist.
    If the file does exist, just load the data from there.

    To do this, write a function that saves the output of getPlayersFromApi() to a file and returns it.
    If the file already exists, read the file and return the contents.

    *** Implement the above and then come back to this point! ***

    With your caching solution, you need to save some more sample data.
    First, delete your previous output json file.
    Then refactor your code to fetch 10 pages worth of players.

    getPlayersFromApi() takes one optional argument of a page number.
    We haven't been passing a page number so far, so it's been defaulting to 1.
    Solving this stage will involve stepping through numbers 1-10 and passing them to getPlayersFromApi().

    *** Implement the above and then come back to this point! ***

    Now that you have a bunch of data, we can solve the actual business problem.
    Another fuckup by the last engineer was that he captured a lot of incomplete data.

    A player should have the following:
    - An id
    - A first_name
    - A last_name
    - A height_feet
    - A height_inches
    - A height_feet
    - A weight_pounds
    - A position (the length of the string value of position must be > 0)
    - A team

    Sadly, many of these values are null in the database.
    You need to write a new file (clean_players.json) of only the players that have values for all fields.

******************************************************************************************************************/

// This gives you access to the getPlayersFromApi() function that the previous engineer wrote.
// You need to call the function with await (ie const players = await getPlayersFromApi();)
// If you are calling the function within a function, you need to use async (ie async function myFunction() { ... })
// We'll explore async & await in more detail later.
// If you're interested in how this function works, ctrl+click (or cmd+click on mac) the name to be taken to it.
import { getPlayersFromApi } from "./helpers/players.js";
// Like in the last chapter, we'll use fs to work with the file system.
import fs from "fs";
// You'll use path.join() to join the output directory name with your filename.
import path from "path";
