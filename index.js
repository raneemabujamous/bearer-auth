"use strict";
require("dotenv").config();
const server = require("./src/server");
const { startup } = require("./src/server");
// Start up DB Server

const { db } = require("./src/auth/models/index.js");
db.sync().then(() => {
  // Start the web server
  server.startup(3000);
});
