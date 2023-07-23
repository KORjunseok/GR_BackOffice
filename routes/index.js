const express = require('express');
const router = express.Router();

// 회원가입
const userRouter = require('./user.routes');

// 예약
const reservationRouter = require('./reservation.routes');

// 리뷰 및 평점
const commentRouter = require('./comments');

router.use('/', userRouter, reservationRouter, commentRouter);

module.exports = router;
