const bcrypt = require('bcrypt');

// 비밀번호 해싱
const password = 'hellworld';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    return console.error(err);
  }

  console.log('Generated Hash:', hash);

  // 해시에서 정확한 Salt 추출
  const salt = hash.substring(0, 29); // $2b$10$ 이후의 salt 포함
  console.log('Extracted Salt:', salt);
});
