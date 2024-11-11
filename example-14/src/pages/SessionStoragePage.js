import React , { useState } from 'react';

function SessionStoragePage() {
  const [inputValue, setInputValue] = useState('session storage');
  const [sessionStorageData, setSessionStorageData] = useState('session storage');

  function updateSessionStorage() {
    sessionStorage.setItem('sessionStorageData', inputValue);
  }

  function getSessionStorage() {
    const sessionStorageData = sessionStorage.getItem('sessionStorageData');
    setSessionStorageData(sessionStorageData);
  }

  return (
    <div>
      <h1>Session Storage Page</h1>
      <p>
        This is an example of a page that uses session storage to store data.
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={updateSessionStorage}>Update Session Storage</button>
      <br /> <br />
      <button onClick={getSessionStorage}>Get Session Storage</button>
      <p>
        Session Storage: {sessionStorageData}
      </p>
    </div>
  );
  
}

export default SessionStoragePage;