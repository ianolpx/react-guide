import React, { useState } from 'react';

function LocalStoragePage() {
  const [inputValue, setInputValue] = useState('local storage');
  const [localStorageData, setLocalStorageData] = useState('local storage');
  
  function updateLocalStorage() {
    localStorage.setItem('localStorageData', inputValue);
  }

  function getLocalStorage() {
    const localStorageData = localStorage.getItem('localStorageData');
    setLocalStorageData(localStorageData);
  }

  return (
    <div>
      <h1>Local Storage Page</h1>
      <p>
        This is an example of a page that uses local storage to store data.
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={updateLocalStorage}>Update Local Storage</button>
      <br /> <br />
      <button onClick={getLocalStorage}>Get Local Storage</button>
      <p>
        Local Storage: {localStorageData}
      </p>
    </div>
  );
}

export default LocalStoragePage;