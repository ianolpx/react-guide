const bcrypt = require('bcrypt');

const password = 'helloworld';

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error('해싱 에러:', err);
    return;
  }
  console.log('해싱된 비밀번호:', hash);
});
