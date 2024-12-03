const hashedPassword = '$2b$10$tvt6JX2kKXr1yIUX.KCTiuGRnXFJXYfxtfk00AWjVcucTeh3aqlWm';
const bcrypt = require('bcrypt');

const password = 'helloworld';


bcrypt.compare(password, hashedPassword, (err, result) => {
    if (err) {
      console.error('비교 에러:', err);
      return;
    }
    console.log('비밀번호 일치 여부:', result); // true 또는 false
  });
  