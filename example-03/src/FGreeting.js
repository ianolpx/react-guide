import React, {useState} from 'react';

function FGreeting({name}) {
  const [greeting, setGreeting] = useState('Hello World!');

  const handleChangeGreeting = () => {
    if (greeting === 'Hello Universe!') {
      setGreeting('Hello World!');
      return;
    }
    setGreeting('Hello Universe!');
  };

  return (
    <div>
        <h1>{greeting} {name}</h1>
        <button onClick={handleChangeGreeting}>Change Greeting</button>
    </div>
    );
}

export default FGreeting;
