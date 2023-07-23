const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv'); //env환경변수를 로드하기 위해 가져옴
const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const routes = require('./routes/index.js');

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`포트: 서버 열림 : ${process.env.PORT}`);
});
