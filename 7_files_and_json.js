/*
 * So far we've covered different ways to process data, but where does the data come from?
 * In the real world, you're often fetching it from a database or an external API.
 * An external API is basically like a website without the part you see.
 * Under the hood, when you go to www.google.com, you make a GET request to google.
 * The server then sends you back a response with the HTML, CSS, and JavaScript - a webpage.
 * Working with code, we don't need all that - most commonly we just work with JSON.
 * JSON stands for JavaScript Object Notation.
 * Since you've already worked with JavaScript objects and arrays, you basically know JSON.
 *
 * Throughout this tutorial we will commonly write JSON to a file and read it back.
 * I do this a lot when testing so you don't need to constantly fetch data from an API.
 * This speeds up your development process a lot.
 */

/*****************************************************************************************************************

    EXAMPLE

    Here we will create simple javascript object and write it to a json file.
    Then we will read the file and log the contents to the console.

******************************************************************************************************************/

import fs from "fs";
import path from "path";

// This is the path to the file we will write to.
const output_path = path.join("output", "person.json");

// This is a simple javascript object.
const person = {
  first_name: "Doug",
  last_name: "Hole",
  age: 30,
  is_cool: true,
};

// We can convert it to JSON using JSON.stringify().
// The null and 4 are optional parameters to make the output more readable.
const person_json = JSON.stringify(person, null, 4);

// We can then write the JSON to a file.
fs.writeFileSync(output_path, person_json);

// We can then read the file and log the contents to the console.
const person_json_from_file = fs.readFileSync(output_path, "utf8");
console.log(person_json_from_file);

// We can also do it with an array
const people = [
  person,
  { first_name: "Jeff", last_name: "Epstein", age: 40, is_cool: false },
  { first_name: "Fydor", last_name: "Dostoevsky", age: 77, is_cool: true },
];

const people_output_path = path.join("output", "people.json");
// The null and 4 are optional parameters to make the output more readable.
const people_json = JSON.stringify(people, null, 4);
fs.writeFileSync(people_output_path, people_json);
const people_json_from_file = fs.readFileSync(people_output_path, "utf8");
console.log(people_json_from_file);

// Open the files in the output directory and have a look at how the data is formatted.
// You might need to format with Prettier.
