/**
 * Get a single page with the number passed as an argument.
 * @param {number} page - The page number to get.
 * @returns {object} - The page object and the total number of objects.
 */
async function getOnePage(page) {
  const queryParams = new URLSearchParams({
    page: page,
    per_page: 100,
  }).toString();
  const url = `https://www.balldontlie.io/api/v1/players/?${queryParams}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

/**
 * Represents a team.
 * @typedef {Object} Team
 * @property {number} id - The team's ID.
 * @property {string} city - The team's city.
 * @property {string} name - The team's name without the city.
 * @property {string} full_name - The team's full name including the city
 * @property {string} abbreviation - The team's abbreviation.
 * @property {string} conference - "east" or "west"
 * @property {string} division - The team's division
 */

/**
 * Represents a player.
 * @typedef {Object} Player
 * @property {number} id - The player's ID.
 * @property {string} first_name - The player's name.
 * @property {string} last_name - The player's last name.
 * @property {number} height_feet - The player's height in feet.
 * @property {number} height_inches - The player's height in inches.
 * @property {number} weight_pounds - The player's weight in pounds.
 * @property {string} position - The player's position.
 * @property {Team} team - The player's team.
 */

/**
 * Get a page of basketball players from the BallDontLie API.
 * @param {number} page - The page number to get.
 * @returns {Promise<Player[]>} - An array of player objects.
 * @throws {error} - An error is thrown if the API call fails.
 */
export async function getPlayers(page = 1) {
  const all_players = [];

  try {
    const response = await getOnePage(page);
    all_players.push(...response.data);
  } catch (error) {
    console.error(error);
  }

  return all_players;
}
