const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(cors());
const PORT = 3003;
const SECRET_KEY = 'your_secret_key'; 

sample_db = {
    'id': 'John',
    'password': 'password',
    'role': 'user'
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


// Login API
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
    if (sample_db.id === username && sample_db.password === password) {
        const token = jwt.sign({ userId: sample_db.id, role: sample_db.role }, SECRET_KEY, { expiresIn: '1h' });
        res.send({ token });
    }
    else {
        res.status(401).send('Invalid username or password');
    }
});
            
// 공개 라우트
app.get('/', (req, res) => {
    res.send('모든 사용자가 접근 가능');
});
  
// 보호된 라우트
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: '인증된 사용자만 접근 가능', user: req.user });
});
  

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중`);
});
