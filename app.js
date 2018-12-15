console.log ('hello world!')

let Twit = require('twit') //import twit to node
let config = require('./config') //import tokens

let T = new Twit(config)

let params = {
    q: 'raninbow',
    count: 2
}

T.get ('search/tweets', params, gotData)

function gotData(err, data, response) {
    let tweets = data.statuses
    for (let i = 0; i < tweets.length; i++) {
        console.log (tweets[i].text)
        
    }
}
