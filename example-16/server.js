const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3003;
const SECRET_KEY = 'your_secret_key'; // JWT 시크릿 키
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',  // 클라이언트 도메인
    credentials: true                 // 자격 증명 허용
  }));
// 쿠키 파싱 미들웨어
app.use(cookieParser());
// JSON 데이터 파싱
app.use(express.json());

sample_db = {
    'id': 'John',
    'password': 'password',
    'role': 'user'
}

// JWT 인증 미들웨어
function authenticateTokenFromCookie(req, res, next) {
  const token = req.cookies.token; // 쿠키에서 토큰 가져오기

  if (!token) {
    return res.status(401).json({ message: '토큰이 필요함' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: '유효하지 않은 토큰' });
    }
    req.user = user; // 검증된 사용자 정보 저장
    next();
  });
}

// 로그인 라우트 (쿠키에 JWT 저장)
app.post('/login', (req, res) => {
    const { id, password } = req.body;
    if (sample_db.id === id && sample_db.password === password) {
        const user = { id, role: sample_db.role };
        const token = jwt.sign(user, SECRET_KEY);
        res.cookie('token', token, { httpOnly: true });
        res.json({ message: '로그인 성공', token });
    } else {
        res.status(401).json({ message: '로그인 실패' });
    }
});

// 보호된 라우트
app.get('/protected', authenticateTokenFromCookie, (req, res) => {
  res.json({ message: '보호된 라우트 접근 성공', user: req.user });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중`);
});
