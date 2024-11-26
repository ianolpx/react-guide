import React, { useState } from 'react';
import axios from 'axios';

function ProtectedData() {
  const [data, setData] = useState('');

  // 보호된 API 호출 함수
  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem('token'); // Local Storage에서 JWT 가져오기
      console.log(token);
      const response = await axios.get('http://localhost:3003/protected', {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
        },
      });

      setData(response.data.message); // 보호된 데이터 메시지
    } catch (error) {
      setData(error.response?.data?.message || '접근 불가');
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
