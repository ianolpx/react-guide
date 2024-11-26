const express = require('express');
const app = express();
const cors = require('cors');
// const jwt = require('jsonwebtoken');
const fs = require('fs');

app.use(cors());
app.use(express.json()); // JSON 요청 본문 파싱

const PORT = 3003;
// const SECRET_KEY = 'your_secret_key'; // JWT 비밀 키
const DATA_FILE = './data.json';

// 데이터 읽기 함수
function readData() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

// 데이터 저장 함수
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.post('/users', (req, res) => {
  const users = readData();
  const newUser = { id: Date.now(), ...req.body };
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  users.push(newUser);
  writeData(users);
  res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
  const users = readData();
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const users = readData();
  const user = users.find((u) => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: 'User not found' });
});

app.put('/users/:id', (req, res) => {
  const users = readData();
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    writeData(users);
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.delete('/users/:id', (req, res) => {
  let users = readData();
  const initialLength = users.length;
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  
  if (users.length < initialLength) {
    writeData(users);
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(PORT, () => console.log(`서버 실행 중: http://localhost:${PORT}`));
