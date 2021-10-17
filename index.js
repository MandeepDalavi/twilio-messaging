const twilio = require("twilio");
const express = require("express");
const MessagingResponse = require("twilio/lib/twiml/MessagingResponse");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at "http://localhost:${port}`);
});