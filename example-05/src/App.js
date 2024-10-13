import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Text: {value}</p>
    </div>
  );
}

export default App;
