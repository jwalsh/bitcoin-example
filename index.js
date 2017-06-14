var bitcoin = require('bitcoin');
// console.log(Object.keys(bitcoin));

var crypto = require('crypto');
// console.log(Object.keys(crypto));

var config = require('./config.json');

//these are some configurations that will need adjusting based on the configuration of your bitcoin.conf file
var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'user',
  pass: 'pass'
});
//change the address to the address stored on your bitcoin core instance

var address = config.address;
var message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales augue ut commodo tempus. Nullam porta libero vel urna viverra hendrerit. ";

client.signMessage(address, message, function(err, signature){
  if(err){
    return console.error(err);
  }

  client.verifyMessage(address, signature, message, function(err, boolVal){
    if (err){
      return console.error(err);
    }
    console.log('address', address)
    console.log('message', message)
    console.log('signature', signature)
    console.log('verified', boolVal)

    console.log(`~/opt/bitcoin/bin/bitcoin-cli verifymessage "${address}" "${signature}" "${message}"`)

  });

  console.log('signature', signature);
})
