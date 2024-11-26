import React from 'react';
import LoginForm from './components/LoginForm';
import ProtectedData from './components/ProtectedData';

function App() {
  return (
    <div>
      <h1>React와 Node.js 연동 예제</h1>
      <LoginForm />
      <ProtectedData />
    </div>
  );
}

export default App;
