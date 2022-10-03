const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const axios = require('axios');

app.get(['/', '/api/v2/entries/en/:word'], (req, res) => {
  word = req.params['word'];

  if (word) {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        console.log(response);
        res.status(200).json(response.data);
      })
      .catch((e) => {
        res.send(e);
      });
  }
});

app.listen(port, () =>
  console.log(`Dictionary API proxy listening on port ${port}!`)
);
