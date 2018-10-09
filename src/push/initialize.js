import firebase from 'firebase/app';

export function initializePush() {
  const messaging = firebase.messaging();

  // Add the public key generated from the console here.
  messaging.usePublicVapidKey("BIUucy26ANIooG1WJH4vFyRbVT8VKeS_mYzP8OdQQsD0F7JeZUNONdWnNREe3AmtjMaM-UGX9qITfZLlKtSsnTc");

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
    })
    .catch(error => {
      if (error.code === "messaging/permission-blocked") {
        console.log("Please Unblock Notification Request Manually");
      } else {
        console.log("Error Occurred", error);
      }
    });
}