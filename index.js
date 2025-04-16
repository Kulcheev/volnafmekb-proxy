const express = require('express');
const request = require('request');
const app = express();

const PORT = process.env.PORT || 10000;
const RADIO_URL = 'http://radio.volnafm.ru:8000/ekb.m3u';

app.get('/', (req, res) => {
  request
    .get(RADIO_URL)
    .on('error', (err) => {
      console.error('Stream error:', err);
      res.status(500).send('Stream error');
    })
    .pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`);
});