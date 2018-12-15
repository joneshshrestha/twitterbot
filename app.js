console.log ('hello world!')

var Twit = require('twit') //import twit to node
var config = require('./config') //import tokens

var T = new Twit(config)
  
