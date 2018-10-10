importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-messaging.js");

// For Firebase
let config = {
  messagingSenderId: "1057638247028"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
  const title = payload.notification.title;
  console.log('payload', payload.notification.icon);
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  return self.registration.showNotification(title, options);
});