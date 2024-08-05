const express = require("express");
const path = require("path"); // path 모듈을 불러옵니다
const axios = require('axios');
const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, 'public')));

const airRouter = require('./routes/air');
app.use('/', airRouter);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
