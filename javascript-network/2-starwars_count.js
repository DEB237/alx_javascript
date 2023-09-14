#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2]; // Get the API URL from command line arguments
const characterId = 18; // Character ID for Wedge Antilles

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const films = JSON.parse(body).results;
    const count = films.filter((film) =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    ).length;
    console.log(count);
  }
});
