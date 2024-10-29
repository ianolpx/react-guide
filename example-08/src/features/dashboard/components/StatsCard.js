import React from 'react';

function StatsCard({ title, value }) {
  return (
    <div style={
      { border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '8px',
        margin: '10px' 
        }}>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
}

export default StatsCard;