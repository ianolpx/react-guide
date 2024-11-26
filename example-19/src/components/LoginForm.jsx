import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [protectedData, setProtectedData] = useState('');

  // 로그인 함수
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3003/login', {
        username: username,
        password: password,
      });

      console.log(response);

      const token = response.data.token; // 서버에서 받은 JWT
      localStorage.setItem('token', token); // Local Storage에 저장
      alert('로그인 성공');
    } catch (error) {
      alert('로그인 실패');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
