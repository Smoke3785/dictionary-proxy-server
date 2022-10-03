# Dictionary Proxy Server

This is a proxy server for the [Free Dictionary API](https://dictionaryapi.dev/) which allows one app to distribute requests - preventing the API from limited your requests. It comes pre-configured to deploy to [Fly.io](https://fly.io/) and _shouldn't_ rack up any charges, even on the hobbyist-tier.

## Deployment

To deploy the proxy server, install the **flyctl** command line tool:

```
iwr https://fly.io/install.ps1 -useb | iex
```

Create an account on their website (or run `flyctl auth signup`) , and then run:

```
flyctl auth login
```

Once you're authenticated, run:

```
flyctl launch
```

**Do not** set up an SQL database, and **do** deploy now. Alternatively, **do not** deploy now and later run:

```
flyctl deploy
```

Should be pretty straightforward.

## Usage

Usage is incredibly straightforward. The api endpoint simulates the [Free Dictionary API](https://dictionaryapi.dev/) endpoint, so all you have to do in your code is run something like:

```js
// Node.js

const axios = require('axios);

const APP_NAME = `<YOUR APP'S NAME>`
const WORD = `<YOUR WORD>`

axios.get(`https://${APP_NAME}.fly.dev/api/v2/entries/en/${WORD}`).then((response)=> {
  console.log(response)
}).catch(e=> {
  console.log(e)
})
```

I have found that three proxies @ 100 requests/second **total** is enough to prevent overload for quite a while, but with five proxies + local requests running @ 100 requests/second **total** I have never been rate limited.

I don't reccommend using this for long periods of time as that's fairly rude, but for an application like mine (where the data needs retrieved in bulk once) this can speed up the rate that you can ingest data dramatically.

Made by Owen Rossi-Keen
[GitHub](https://github.com/Smoke3785/) **|** [Website](https://owenrossikeen.com/) **|** [Donate](https://owenrossikeen.com/donate)
