# Setup

Install Bitcoin Core

  https://bitcoin.org/en/download

Update `bitcoin.conf` with something like:

```
regtest=1
rpcuser=user
rpcpassword=pass
rpcport=8332
```

# Running

```
~/opt/bitcoin/bin/bitcoind
~/opt/bitcoin/bin/bitcoin-cli getnewaddress
```

# Validation

Update `config.json` with the address from `getnewaddress` then

`npm start`

You should see the `address`, `message`, and `signature` as output from the script.
