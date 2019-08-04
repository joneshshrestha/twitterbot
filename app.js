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

  
T.post('statuses/retweet/:id', { id: '343360866131001345' }, function (err, data, response) {
    console.log(data)
  })



// const stream = T.stream('statuses/filter', { follow: ['3593619134'] });
// stream.on('tweet', (tweet) => {
//      const tweetId = tweet.id_str;
//       T.post('statuses/retweet/:id', { id: tweetId }, => (err, data, response) {
//        console.log(data)
//       })
// });

let helloWorld = {q: "#helloworld", count: 100, result_type: "recent"}; 

// This function finds the latest tweet with the #helloworld hashtag, and retweets it.
function retweetLatest() {
	T.get('search/tweets', helloWorld, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}

// Try to retweet something as soon as we run the program...
retweetLatest();
// ...and then every hour/half after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(retweetLatest, 1000 * 60 * 30);