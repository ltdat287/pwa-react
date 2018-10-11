import * as admin from 'firebase-admin';

const serviceAccount = require('./pwa-app-react-aced5-firebase-adminsdk-ckugy-487c09296e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pwa-app-react-aced5.firebaseio.com'
});

const admin_message = admin.messaging();

export function sendTokenTopic(registrationTokens, topic) {
  // Subscribe the devices corresponding to the registration tokens to the
  // topic.
  admin_message.subscribeToTopic(registrationTokens, topic)
    .then(function (response) {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log('Successfully subscribed to topic:', response);
    })
    .catch(function (error) {
      console.log('Error subscribing to topic:', error);
    });
}

export function sendMessageTopic(message) {
  // Send a message to devices subscribed to the provided topic.
  admin_message.send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
}