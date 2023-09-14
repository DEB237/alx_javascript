#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2]; // Get the Movie ID from command line arguments
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const movieData = JSON.parse(body);
    const characterUrls = movieData.characters;

    characterUrls.forEach((characterUrl) => {
      request.get(characterUrl, (error, response, characterBody) => {
        if (error) {
          console.error('Error:', error);
        } else {
          const characterData = JSON.parse(characterBody);
          console.log(characterData.name);
        }
      });
    });
  }
});