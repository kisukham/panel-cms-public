importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyATWdu0w4t3SQ01zFKolFkBVvd772F46JI",
  authDomain: "panelapp-a35b0.firebaseapp.com",
  projectId: "panelapp-a35b0",
  storageBucket: "panelapp-a35b0.appspot.com",
  messagingSenderId: "612269678975",
  appId: "1:612269678975:web:33b48b29d5c40fc587fa4a",
  measurementId: "G-524178LB87",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);

  // const title = message.notification.title;
  // const options = {
  //   body: message.notification.body,
  //   // icon: '/firebase-logo.png'
  // };

  // self.registration.showNotification(title, options);
});
