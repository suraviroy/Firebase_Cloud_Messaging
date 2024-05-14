import React, { useState } from 'react';
import tone from './ringtone/ring.mp3'



let notificationBody;
  export const setNotificationBody = (body) => {
    console.log('Meeting code sent:', body);
    notificationBody = body;
  };

const MyComponent = () => {
  // const playAudio = () => {
  //   const audio = new Audio(tone);
  //   audio.play().catch(error => console.error('Audio playback error:', error));
  // };

  
  const [message, setMessage] = useState('Hello');
  const [token, setToken] = useState('fRB8Wi0AsfwhMoHuzPcUQg:APA91bFvBnRNAq-fqjlcvo-vRfec3tobaufcegBMhO-EkLEs2feSFDt4v033RqE97feq06RwxZWk0ct-5fk2kBK88DA3JkblbpRZRLgyeuucbHs9U0ms5VAqaieMlP6Dvqg6Q9SDxP35'); // Set the actual device token here

  const sendNotification = () => {
    // fetch('http://localhost:8080/send', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ message, token }),
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     console.log('Notification sent successfully:', data);
    //     alert('Notification sent successfully');
    //   })
    //   .catch(error => {
    //     console.error('Error sending notification:', error);
    //     alert('Error sending notification');
    //   });
    // Notification data
    const notificationData = {
      profile_id: "91",
      title: "Notification Title",
      message: "Hello, this is a notification message",
      data: {
        key1: "value1",
        key2: "value2"
      }
    };
    const endpointUrl = 'http://139.59.60.236:8080/master/send_notification/';

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notificationData),
    };

    // Make the POST request
    fetch(endpointUrl, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Notification sent successfully:', data);
        // Handle the response from the server if needed
      })
      .catch(error => {
        console.error('Error sending notification:', error);
        // Handle errors during the fetch
      });

  };

  return (
    <div>
      <button onClick={sendNotification}>Play Ringtone</button>
    </div>
  );
};

export default MyComponent;


// import React, { useEffect } from 'react';
// import tone from './ringtone/ring.mp3';

// const MyComponent = () => {
//   useEffect(() => {
//     const audio = new Audio(tone);
//     audio.muted = true;
//     audio.play().catch(error => console.error('Audio playback error:', error));
//   }, []);

//   return (
//     <div>
//       {/* The button is still available for manual interaction */}
//       <button>Play Ringtone</button>
//     </div>
//   );
// };

// export default MyComponent;

