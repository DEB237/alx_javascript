#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2]; // Get the API URL from command line arguments
const characterId = 18; // Character ID for Wedge Antilles

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;

    films.forEach((film) => {
      const characters = film.characters;
      characters.forEach((characterUrl) => {
        const id = characterUrl.split('/').slice(-2, -1)[0];
        if (id === characterId.toString()) {
          count++;
        }
      });
    });

    console.log(count);
  }
});
