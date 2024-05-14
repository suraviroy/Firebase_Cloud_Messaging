import React, { useState, useEffect } from 'react';

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  return (
    <div>
      {isOnline ? (
        <p>You are online</p>
      ) : (
        <p>You are offline</p>
      )}
    </div>
  );
};

export default OnlineStatus;