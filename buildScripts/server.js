import express from 'express';
import path from 'path';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log('up and running on : ' + port);
});
