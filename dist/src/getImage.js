"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require('request');
function getPhoto() {
    const url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
    console.log(url);
    request(url, (err, res, body) => console.log(err, res, body));
}
exports.default = getPhoto;
;
