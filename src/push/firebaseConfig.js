import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBHSOqRiVp0h6vbYGgOVSr8FP35F2HqXjo",
  authDomain: "pwa-app-react-aced5.firebaseapp.com",
  databaseURL: "https://pwa-app-react-aced5.firebaseio.com",
  projectId: "pwa-app-react-aced5",
  storageBucket: "pwa-app-react-aced5.appspot.com",
  messagingSenderId: "1057638247028"
};

// Init firebase
firebase.initializeApp(config);

let messaging = firebase.messaging();
// Add the public key generated from the console here.
messaging.usePublicVapidKey("BIUucy26ANIooG1WJH4vFyRbVT8VKeS_mYzP8OdQQsD0F7JeZUNONdWnNREe3AmtjMaM-UGX9qITfZLlKtSsnTc");

export {messaging};