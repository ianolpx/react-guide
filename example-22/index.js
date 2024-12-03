const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const bcrypt = require('bcrypt');


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

// Middleware: JWT 검증 함수
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer 토큰 형태

  if (!token) {
    return res.status(401).json({ message: '토큰이 필요함' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: '유효하지 않은 토큰' });
    }
    req.user = user; // 토큰에서 해석된 사용자 정보 저장
    next();
  });
}

app.post('/register', (req, res) => {
  const users = readData();
  const newUser = { id: Date.now(), ...req.body };
  if (!newUser.email || !newUser.password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  const hashedPassword = bcrypt.hashSync(newUser.password, 10);
  newUser.password = hashedPassword;
  users.push(newUser);
  writeData(users);
  res.status(201).json(newUser);
});

// Login API
app.post('/login', (req, res) => {
  const users = readData();
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/users', authenticateToken, (req, res) => {
  const users = readData();
  res.json(users);
});

app.get('/users/:id', authenticateToken, (req, res) => {
  const users = readData();
  const user = users.find((u) => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: 'User not found' });
});

app.put('/users/:id', authenticateToken, (req, res) => {
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

app.delete('/users/:id', authenticateToken, (req, res) => {
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
