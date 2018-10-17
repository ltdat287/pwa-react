import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Privacy from "../../src/components/Privacy/index";

const {sendMessageTopic, sendTokenTopic} = require("./firebaseAdmin");

const express = require("express");
const path = require('path');
const fs = require("fs");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

app.set("port", process.env.PORT || 3001);

// The topic name can be optionally prefixed with "/topics/".
const topic = 'MESSAGE_TOPIC';
app.post('/api/add-token-topic', (req, res) => {
  let token = req.body.token;

  if (token) {
    let registrationTokens = [
      token
    ];

    sendTokenTopic(registrationTokens, topic);
    console.log('Sent token ' + token + ' to topic: ' + topic);
  }

  res.send({
    success: true
  });
});

app.get('/api/send-message', (req, res) => {
// See documentation on defining a message payload.
  const message = {
    notification: {
      title: "Background Message Title",
      body: "Background message body",
      // click_action: "/profile",
      // icon: "pwa-192x192.png"
    },
    topic: topic
  };

  sendMessageTopic(message);
  console.log('Send message to topic: ' + topic);

  res.send({
    success: true
  });
});

app.get('/privacy', (req, res) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    // render the app as a string
    const html = ReactDOMServer.renderToString(<Privacy />);

    // inject the rendered app into our html and send it
    res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
    );
  });
});

// Express only serves static assets in production
if (process.env.NODE_ENV !== "local") {
  app.use(express.static(path.join(__dirname, '/build')));

  // Handles any requests that don't match the ones above
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
  });
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

module.exports = {
  app
};