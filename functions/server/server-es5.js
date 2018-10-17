'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _index = require('../../src/components/Privacy/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("./firebaseAdmin"),
    sendMessageTopic = _require.sendMessageTopic,
    sendTokenTopic = _require.sendTokenTopic;

var express = require("express");
var path = require('path');
var fs = require("fs");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set("port", process.env.PORT || 3001);

// The topic name can be optionally prefixed with "/topics/".
var topic = 'MESSAGE_TOPIC';
app.post('/api/add-token-topic', function (req, res) {
  var token = req.body.token;

  if (token) {
    var registrationTokens = [token];

    sendTokenTopic(registrationTokens, topic);
    console.log('Sent token ' + token + ' to topic: ' + topic);
  }

  res.send({
    success: true
  });
});

app.get('/api/send-message', function (req, res) {
  // See documentation on defining a message payload.
  var message = {
    notification: {
      title: "Background Message Title",
      body: "Background message body"
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

app.get('/privacy', function (req, res) {
  // point to the html file created by CRA's build tool
  var filePath = path.resolve(__dirname, 'build', 'index.html');

  fs.readFile(filePath, 'utf8', function (err, htmlData) {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    // render the app as a string
    var html = _server2.default.renderToString(_react2.default.createElement(_index2.default, null));

    // inject the rendered app into our html and send it
    return res.send(htmlData.replace('<div id="root"></div>', '<div id="root">' + html + '</div>'));
  });
});

// Express only serves static assets in production
if (process.env.NODE_ENV !== "local") {
  app.use(express.static(path.join(__dirname, '/build')));

  // Handles any requests that don't match the ones above
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
  });
}

app.listen(app.get("port"), function () {
  console.log('Find the server at: http://localhost:' + app.get("port") + '/'); // eslint-disable-line no-console
});

module.exports = {
  app: app
};
