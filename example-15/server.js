const jwt = require('jsonwebtoken');

sample_db = {
    'id': 'John',
    'password': 'password',
    'role': 'user'
}

let token = '';
// Login ID/PW 확인
if (sample_db.id === 'John' && sample_db.password === 'password') {
    console.log('Login Success');

    // 사용자 정보로 토큰 생성
    token = jwt.sign({ userId: sample_db.id, role: sample_db.role },
        'secretKey', { expiresIn : '1h' });

    console.log('JWT:', token);
}

// token 확인
let decoded = jwt.verify(token, 'secretKey');
console.log('Decoded:', decoded);



