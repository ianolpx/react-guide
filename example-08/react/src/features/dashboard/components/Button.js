import React from 'react';

function Button({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: '10px', fontSize: '16px' }}>
      {label}
    </button>
  );
}

export default Button;