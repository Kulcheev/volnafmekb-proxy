const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

app.get('/', (req, res) => {
  const streamUrl = 'http://radio.volnafm.ru:8000/ekb.m3u';
  req.pipe(request(streamUrl)).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`);
});
