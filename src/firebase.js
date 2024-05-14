import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from "firebase/messaging";

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console. 
const firebaseConfig = {
  apiKey: "AIzaSyCac_97ImqQPCHeEZjydNoBJGGXuqh3Xto",
  authDomain: "ndg-notification.firebaseapp.com",
  projectId: "ndg-notification",
  storageBucket: "ndg-notification.appspot.com",
  messagingSenderId: "125776744603",
  appId: "1:125776744603:web:581e2f9fe29b8818a2763e",
  measurementId: "G-NJH787XZ4Z"
};
// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);
initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
    return  getToken(messaging, {vapidKey:'BOCRu798BniOz9lI1w30LbNVl3es5Pt3A2hwqFo3XNrSgzIbcW_kjpuyc8bBq896Wg1hM83t1X69JHjOAFrDQew', })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };




  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });

  
  // export const registerServiceWorker = () => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.getRegistrations().then((registrations) => {
  //       for (const registration of registrations) {
  //         registration.unregister();
  //       }
  //     });
  //   }
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('/firebase-messaging-sw.js')
  //     .then(function(registration) {
  //       console.log('Registration successful, scope is:', registration.scope);
  //     }).catch(function(err) {
  //       console.log('Service worker registration failed, error:', err);
  //     });
  //   }
  // };
  