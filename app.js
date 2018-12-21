console.log ('Follow bot starting')

let Twit = require('twit') //import twit to node
let config = require('./config') //import tokens
let T = new Twit(config)

// T.post('statuses/retweet/:id', { id: '343360866131001345' }, function (err, data, response) {
//     console.log(data)
//   })

let tweetID = {
    id : ''
}

T.post('statuses/retweet/:id', tweetID, tweeted)

function tweeted (err, data, response) {
    if (err) {
        console.log('Something went wrong')
    } else {
        console.log('Success')
    }
}

// var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]

// var stream = T.stream('statuses/filter', { locations: sanFrancisco })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })

let userID = {
    id : ''
}

T.stream('user', userID, tweeted)

stream.on('user_update', function (tweet) {
    console.log(tweet)
  })
