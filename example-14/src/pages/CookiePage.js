import React, { useState } from 'react';

function CookiePage() {
  const [inputValue, setInputValue] = useState('cookie');
  const [cookieData, setCookieData] = useState('cookie');

  function updateCookie() {
    document.cookie = `cookieData=${inputValue}`;
  }

  function getCookie() {
    // if (document.cookie.includes('cookieData')) {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('cookieData='))) {
      const cookieData = document.cookie
        .split('; ')
        .find((row) => row.startsWith('cookieData='))
        .split('=')[1];
      setCookieData(cookieData);
    }
  }

  return (
    <div>
      <h1>Cookie Page</h1>
      <p>
        This is an example of a page that uses cookies to store data.
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={updateCookie}>Update Cookie</button>
      <br /> <br />
      <button onClick={getCookie}>Get Cookie</button>
      <p>
        Cookie: {cookieData}
      </p>
    </div>
  );
}

export default CookiePage;