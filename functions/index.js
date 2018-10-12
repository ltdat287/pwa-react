const functions = require('firebase-functions');
const {app} = require('./server/server');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const web = functions.https.onRequest(app);

module.exports = {
  web
};