//require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

//take command like arguements
var command = process.argv[2];
var media = process.argv[3];

if (command === "concert-this") {
    https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp
} else if (comand === "spotify-this-song") {

    spotify.search({ type: 'track', query: media }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data)
    };
} else if (command === "movie-this") {
    var queryURL = "https://www.omdbapi.com/?t=" + media + "&y=&plot=short&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.Runtime);
    });

} else if (command === "do-what-it-says") {
    var fs = require("fs");
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
          }
          console.log(data);
        
} else {
    console.log("Incorrect Input. Please Try again.");
    console.log("The correct inputs are as follows:");
    console.log("concert-this 'your_band_name'");
    console.log("spotify-this-song 'your_song_name'");
    console.log("movie-this 'your_movie_name'");
    console.log("do-what-it-says");
};

