import React, { useState } from 'react';

// 로그인 컴포넌트
function Login({ onLogin }) {
  return (
    <div>
      <h2>로그인 페이지</h2>
      <button onClick={onLogin}>로그인</button>
    </div>
  );
}

// 로그아웃 컴포넌트
function Logout({ onLogout }) {
  return (
    <div>
      <h2>환영합니다!</h2>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
}

// 메인 앱 컴포넌트
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 핸들러
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // 로그아웃 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>React 로그인 예제</h1>
      {isLoggedIn ? (
        <Logout onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
