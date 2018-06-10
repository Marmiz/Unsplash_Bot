var request = require('request');

const  getPhoto = () => {
    const url: string = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
    request(url, 
        (err: Error, res: Response, body: string) => {
                const parsedBody: string = JSON.parse(body);
                console.log(parsedBody);
    });

};

module.exports = getPhoto;