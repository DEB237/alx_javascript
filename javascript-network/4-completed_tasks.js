#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2]; // Get the API URL from command line arguments

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const tasks = JSON.parse(body);
    const completedTasksByUser = {};

    tasks.forEach((task) => {
      if (task.completed) {
        if (completedTasksByUser[task.userId]) {
          completedTasksByUser[task.userId]++;
        } else {
          completedTasksByUser[task.userId] = 1;
        }
      }
    });

    console.log(completedTasksByUser);
  }
});
