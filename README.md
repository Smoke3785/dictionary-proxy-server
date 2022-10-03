# Dictionary Proxy Server

This is a proxy server for the [Free Dictionary API](https://dictionaryapi.dev/) which allows one app to distribute requests - preventing the API from limited your requests. It comes pre-configured to deploy to [Fly.io](https://fly.io/) and _shouldn't_ rack up any charges, even on the hobbyist-tier.

# Deployment

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
