import React, { useState } from 'react';
import axios from 'axios';

function ProtectedData() {
  const [data, setData] = useState('');

  const fetchProtectedData = async () => {
    try {
      const res = await axios.get('http://localhost:3003/protected', { withCredentials: true });
      setData(res.data.message);
    } catch (err) {
      alert('접근 실패: 인증 필요');
    }
  };

  return (
    <div>
      <button onClick={fetchProtectedData}>보호된 데이터 가져오기</button>
      <p>{data}</p>
    </div>
  );
}

export default ProtectedData;
