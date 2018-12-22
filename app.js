console.log ('Bot is starting')

let Twit = require('twit') //import twit to node
let config = require('./config') //import tokens
let T = new Twit(config)

let userID = {
    follow : '3593619134'
}

function tweeted (err, data, response) {
    if (err) {
        console.log('Something went wrong')
    } else {
        console.log(data)
    }
}

let stream = T.stream('statuses/filter', userID, tweeted)

stream.on('tweet', function (tweet) {
    let tweetID = {
        id : tweet.id_str
    }
    T.post('statuses/retweet/:id', tweetID, tweeted)
  })

// T.post('statuses/retweet/:id', { id: '343360866131001345' }, function (err, data, response) {
//     console.log(data)
//   })

// const stream = T.stream('statuses/filter', { follow: ['3593619134'] });
// stream.on('tweet', (tweet) => {
//      const tweetId = tweet.id_str;
//       T.post('statuses/retweet/:id', { id: tweetId }, => (err, data, response) {
//        console.log(data)
//       })
// });