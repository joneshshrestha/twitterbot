console.log ('Follow bot starting')

let Twit = require('twit') //import twit to node
let config = require('./config') //import tokens
let T = new Twit(config)

//setting up a user stream 
let stream = T.stream('user')
//anytime someone follows me
stream.on ('tweet', tweetEvent)

function tweetEvent (eventMsg) {
    console.log("follow event!")
    let name = eventMsg.source.name
    let screenName = eventMsg.source.screen_name
    tweetIt('.@' + screenName + ' thank you for following me!' )
}

function tweetIt(txt) {


    let tweet = {
        status : txt
    }

    T.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response) {
        if (err) {
            console.log('something went wrong')
        } else
            console.log('It worked!')
    }
}
    