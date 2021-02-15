require('dotenv').config();
const express = require('express'),
 cors = require('cors'),
 routes = require('./routes'),

 PORT = process.env.PORT || 3001,
 app = express();

  //Middleware
  app.use(cors())
  app.use(express.json())

  //Serve static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  //Routes
  app.use(routes)

  //Start server
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });