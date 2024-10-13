import React, {useState} from 'react';

function App() {
  const [text, setText] = useState('');


  function handleClick(num) {
    setText(`Clicked ${num} button`);
  }

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => handleClick(1)}>Click 1</button>
      <button onClick={() => handleClick(2)}>Click 2</button>
      <button onClick={() => handleClick(3)}>Click 3</button>
    </div>
  );
}

export default App;
