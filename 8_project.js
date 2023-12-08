/*
 * We have reached your first project!
 *
 * Note: You'll need to google some things to get this working.
 * We haven't covered reading and writing files yet.
 * We also haven't covered importing functions and modules yet.
 *
 */

/*****************************************************************************************************************
    EXERCISE!

    It's your first day as a statistician for the NBA.
    The person who had the job before you was fired for pulling data from their API too often.
    He cost the NBA millions of dollars in server costs due to a loop that never ended.

    Your first job is to write a caching solution to prevent this from happening again.
    This means the data will be saved to the disk if it doesn't exist, or loaded from the disk if it does.
    To do this, write a function that saves the output of getPlayers() to a file and returns it.
    If the file already exists, read the file and return the contents.

    *** Implement the above and then come back to this point! ***

    After you have written one page, you'll need to write 10 more pages.


******************************************************************************************************************/

// This gives you access to the getPlayers() function that the previous engineer wrote.
// You need to call the function with await (ie const players = await getPlayers();)
// If you are calling the function within a function, you need to use async (ie async function myFunction() { ... })
// If you're interested in how this function works, ctrl+click (or cmd+click on mac) the name to be taken to it.
import { getPlayers } from "./helpers/players.js";
// The fs module is built into node and allows us to work with the file system.
import fs from "fs";
import path from "path";

/**
 * @returns {Promise<import("./helpers/players.js").Player[]>} - An array of player objects.
 * */
async function getPlayersWithCache() {
  const output_path = path.join("output", "nba_api_output.json");
  const file_exists = fs.existsSync(output_path);
  const all_players = [];
  if (file_exists) {
    // If the file exists, read the file and return the contents.
    return JSON.parse(fs.readFileSync(output_path, "utf8"));
  } else {
    // If the file doesn't exist, call the getPlayers() function and save the output to a file.
    for (let i = 1; i < 11; i++) {
      const players = await getPlayers(i);
      all_players.push(...players);
    }
    fs.writeFileSync(output_path, JSON.stringify(all_players));
    return all_players;
  }
}

const players = await getPlayersWithCache();
for (const player of players) {
  console.log(player);
}
