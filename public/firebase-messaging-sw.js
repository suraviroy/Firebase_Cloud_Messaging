// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token


importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');



// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCac_97ImqQPCHeEZjydNoBJGGXuqh3Xto",
  authDomain: "ndg-notification.firebaseapp.com",
  projectId: "ndg-notification",
  storageBucket: "ndg-notification.appspot.com",
  messagingSenderId: "125776744603",
  appId: "1:125776744603:web:581e2f9fe29b8818a2763e",
  measurementId: "G-NJH787XZ4Z"
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}


// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  console.log("Body",payload.notification.body)
  
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});


