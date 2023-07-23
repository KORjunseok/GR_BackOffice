const express = require('express');
const router = express.Router();

const userRouter = require('./user.routes');
const reservationRouter = require('./reservation.routes');
const commentRouter = require('./comments');

router.use('/', userRouter, reservationRouter, commentRouter);

module.exports = router;
