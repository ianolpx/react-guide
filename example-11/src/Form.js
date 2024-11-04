import React, { useState } from 'react';

function MyForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출의 기본 동작(페이지 새로고침) 방지
    alert(`입력값: ${inputValue}`); // 페이지 새로고침 없이 값 출력
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
