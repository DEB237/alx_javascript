#!/usr/bin/node
const request = require('request');

const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`

request.get(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else {
      const films = JSON.parse(body).results;
      const moviesWithWedge = films.filter((film) => 
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
      );
      console.log(moviesWithWedge.length);
    }
  });