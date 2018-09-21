console.log("starting App.js...");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

var result = notes.addNote();
console.log("result", result);

var user = os.userInfo();

// Original Line
// fs.appendFile('greetings.text', 'Hello');

// Option if warning (when v6 above)
// fs.appendFileSync('greetings.text', `Hello ${user.username}! You are ${notes.age}. `);