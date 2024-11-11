import React, { useState } from 'react';

function ParentComponent() {
    const [value, setValue] = useState('');
  
    return (
      <div>
        <InputComponent value={value} onChange={setValue} />
        <DisplayComponent value={value} />
      </div>
    );
  }

function InputComponent({ value, onChange }) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

function DisplayComponent({ value }) {
    return <p>{value}</p>;
  }

export default ParentComponent;
