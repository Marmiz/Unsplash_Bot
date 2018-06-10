const Twit = require('twit')
const config = require('./config')

interface TwitData {
  text: string;
}

const bot = new Twit(config)

bot.post('statuses/update', {
    status: 'hello world!'
  }, (err: Error, data: TwitData, response: Response) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`${data.text} tweeted!`)
    }
  })