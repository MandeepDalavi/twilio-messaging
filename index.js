const twilio = require("twilio");
const express = require("express");
const MessagingResponse = require("twilio/lib/twiml/MessagingResponse");
const app = express();
const port = 3000;

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH;
const twilioPhone = process.env.TWILIO_NUMBER;
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at "http://localhost:${port}`);
});