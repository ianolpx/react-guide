import React from 'react';

// 사용자 목록 데이터
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' },
];

// 사용자 리스트 컴포넌트
function UserList() {
  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // 고유한 키인 user.id를 사용
        ))}
      </ul>
    </div>
  );
}

export default UserList;
