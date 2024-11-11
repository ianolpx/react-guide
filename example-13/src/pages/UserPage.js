import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();  // URL 파라미터에서 'id'를 추출
  function onIncrease() {
    window.location.href = `/user/${parseInt(id) + 1}`;
  }

  return (
    <div>
      <h1>User ID: {id}</h1>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}

export default User;