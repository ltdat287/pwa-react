import {messaging} from './firebaseConfig'
import {sendTokenApi} from "../fetch";

export function initializePush() {
  messaging
    .requestPermission()
    .then(() => {
      console.log("Have Permission");
      return messaging.getToken();
    })
    .then(token => {
      console.log("FCM Token:", token);
      //you probably want to send your new found FCM token to the
      //application server so that they can send any push
      //notification to you.

      sendTokenApi(token);
    })
    .catch(error => {
      if (error.code === "messaging/permission-blocked") {
        console.log("Please Unblock Notification Request Manually");
      } else {
        console.log("Error Occurred", error);
      }
    });
}

export function createEventForFirebaseMessage() {
  messaging.onMessage(function (payload) {
    console.log('Message received. ', payload);
  });

  // Callback fired if Instance ID token is updated.
  messaging.onTokenRefresh(function () {
    messaging.getToken()
      .then(function (refreshedToken) {
        console.log('Token refreshed. ', refreshedToken);
      })
      .catch(function (err) {
        console.log('Unable to retrieve refreshed token ', err);
      })
  });
}