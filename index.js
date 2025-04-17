const express = require("express");
const request = require("request");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

// Включаем CORS
app.use(cors());

app.get("/", function (req, res) {
  const streamUrl = "http://radio.volnafm.ru:8000/ekb"; // Без .m3u
  req.pipe(request(streamUrl)).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
