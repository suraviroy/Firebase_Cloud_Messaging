// import React, {useState, useEffect} from 'react'
// import toast, { Toaster } from 'react-hot-toast';
// import { requestForToken, onMessageListener } from './firebase';
// import addNotification from 'react-push-notification';
// import tone from './ringtone/ring1.wav';

// const Notificationn = () => {
//   const [notification, setNotification] = useState({title: '', body: ''});
//   const notify = () => {

//     addNotification({
//       title: notification.title,
//       body: notification.body, 
//       // icon: 'path/to/icon.png', 
//       sound: tone, // Provide the path to your custom sound file
//       native: true,
//       duration: 10000, // Adjust the duration as needed
//       theme: 'darkblue',
//       audio: true,
//     });
    
//   };
//   function ToastDisplay() {
//     return (
//       <div>
//         <p><b>{notification?.title}</b></p>
//         <p>{notification?.body}</p>
//       </div>
//     );
//   };
  
//   useEffect(() => {
//     if (notification?.title ){
//      notify()
    
//   }
//   }, [notification])

//   requestForToken();

//   onMessageListener()
//     .then((payload) => {
//       setNotification({title: payload?.notification?.title, body: payload?.notification?.body});     
//     })
//     .catch((err) => console.log('failed: ', err));

//   return (
//      <Toaster/>
//   )
// }

// export default Notificationn;




//********************************************************************************************************* */




////11111111111111111111111111111111111111
import React, {useState, useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { requestForToken, onMessageListener } from './firebase';
import addNotification from 'react-push-notification';
import tone from './ringtone/ring.mp3';

 

const Notificationn = () => {
  // const [notification, setNotification] = useState({title: '', body: ''});
  // const audio = new Audio(tone);
  
  // //const isChromeBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  
  // useEffect(() => {
  //   if (notification?.title ) {
  //     console.log("Meeting Id gettinggggggggggg  : ",notification?.body) ; 
  //   }
  //   }, [notification]);

  // const Notify =() =>{
  //         console.log('Notification received:', notification);
  //         fetch('http://127.0.0.1:5000/trigger-notification')
  //         .then(response => response.json())
  //         .then(data => {
  //           console.log('Notification triggered:', data.message);
  //         })
  //         .catch(error => {
  //           console.error('Error triggering notification:', error);
  //         });
  // }
  

//   requestForToken();

//   onMessageListener()
//     .then((payload) => {
//       setNotification({title: payload?.notification?.title, body: payload?.notification?.body}); 
//       console.log("Recived notification");   
//       console.log("Meeting Id gettinggggggggggg  : ",payload?.notification?.body) ;
//     })
//     .catch((err) => console.log('failed: ', err)); 

//   return (
//      <Toaster/>
//   )
 }

export default Notificationn;








//***************************************************************************************************** */






//************************************************************************************************* */

// import React, { useState, useEffect } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import { requestForToken, onMessageListener } from './firebase';
// import tone from './ringtone/ring.mp3';
// import useSound from 'use-sound';

// const Notificationn = () => {
//   const [notification, setNotification] = useState({ title: '', body: '' });
    
//   const notify = () => {
    
//     toast(<ToastDisplay />);
//   };
// //   const playAudio = () => {
// //     const audio = new Audio(tone);
// //     audio.play().catch(error => console.error('Audio playback error:', error));
// //   };

//   function ToastDisplay() {
//     return (
//       <div>
//         <p>
//           <b>{notification?.title}</b>
//         </p>
//         <p>{notification?.body}</p>
//       </div>
//     );
//   }

//   useEffect(() => {
//     if (notification?.title) {
//       setTimeout(() => {
//         notify();
//       }, 6000);
//     }
//   }, [notification]);



//   useEffect(() => {
//     requestForToken();
//   }, []);

//   useEffect(() => {
//     // Assume onMessageListener returns an object with a `remove` method
//     const messageListener = onMessageListener().then((payload) => {
//       setNotification({
//         title: payload?.notification?.title,
//         body: payload?.notification?.body,
//       });
//     });

//     return () => {
//       // Clean up any subscriptions or event listeners
//       messageListener.then(listener => listener.remove()).catch((err) => console.log('failed: ', err));
//     };
//   }, []);

//   return <Toaster />;
// };

// export default Notificationn;

