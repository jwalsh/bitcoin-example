var bitcoin = require('bitcoin');
//these are some configurations that will need adjusting based on the configuration of your bitcoin.conf file
var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'user',
  pass: 'pass'
});
//change the address to the address stored on your bitcoin core instance

let config = {}

var address = "mneUFSS4hz8deEfQqXypQ3Ho36tASNhirL"
var message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales augue ut commodo tempus. Nullam porta libero vel urna viverra hendrerit. "
var signature1 = ""

client.signMessage(address, message, function(err, signature){
  if(err){
    return console.error(err);
  }

  signature1 = signature;
  client.verifyMessage(address, signature1, message, function(err, boolVal){
    if (err){
      return console.error(err);
    }
    console.log(address)
    console.log(message)
    console.log(signature1)
    console.log(boolVal)

  });
  console.log("signature "+signature)
})
