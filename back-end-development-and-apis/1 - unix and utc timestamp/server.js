// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

/**
 * Returns the current datetime in UNIX and UTC.
 */

app.get("/api", function(req, res) {
  let currentDate = new Date();
  let unixDate = utcToUnix(currentDate);
  let utcDate = unixToUTC(currentDate);

  res.json({unix: unixDate, utc: utcDate});
})

/**
 * Takes a date (be it in UNIX or UTC).
 *  
 * Returns a JSON object containing that date in both UNIX (ie. milliseconds from Jan 1, 1970) and UTC, if it's parsable by new Date().
 * Returns a JSON object containing an error message otherwise
 */

app.get("/api/:date", function(req, res) {
  let date = req.params.date;
  let inUnix = isUnix(date);

  // Checks if the date is in UNIX format. If so, parses it fom a string into a number so it's parsable.
  if (inUnix == true) {
    date = parseInt(date);
  }

  // attempts to parse the date.
  date = new Date(date);

  if (isNaN(date)) {
    // sends an error message
    let errorMessage = {error: "Invalid Date"};
    res.json(errorMessage);
  } else {
    // creates the json
    let unixDate = utcToUnix(date)
    let utcDate = unixToUTC(date);
    res.json({unix: unixDate, utc: utcDate});
  }
});

/**
 * Determines if a date is in UNIX format (ie. seconds)
 * @param aDate - the date to be checked
 * @return true if so; returns false otherwise.
 */

function isUnix(aDate) {
  // the pattern that determines if a date is in UNIX format.
  let unixRegex = /^[0-9]+$/;
  return unixRegex.test(aDate)
}

/**
 * Parses a date in unix time (ie. seconds from Jan 1, 1970)
 * @param utc - the utc time to be converted into unix.
 * @return utc time converted to unix time
 */

function utcToUnix(utc) {
  return parseInt(utc.getTime());
}

/**
 * Parses a date in UTC/GMT time
 * @param unix - the unix time to be converted into unix.
 * @return unix time converted to utc time
 */

function unixToUTC(unix) {
  return unix.toUTCString();
}


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
