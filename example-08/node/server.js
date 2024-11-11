const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const PORT = 3003;

app.get('/api/sample', (req, res) => {
  const response = { data: {
    users: 2100,
    sales: 2200,
    visits: 2300,
} };
  res.send(response.data);
});

app.post('/api/sample', (req, res) => {
  // receive data from the client
  const data = req.body;
  console.log(data);
  // send response to the client
  res.send({ message: 'Data received' });
}


app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중`);
});



