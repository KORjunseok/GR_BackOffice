const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/user.controller');
const usersController = new UsersController();
const validator = require('../middlewares/validation.js');

// 회원가입 기능
router.post('/signup', validator.createUser, usersController.signup);

// 로그인 기능
router.post('/login', usersController.loginUser);

// 회원정보 수정
router.put('/users/:userId', validator.updateUser, usersController.updateUser);

// 회원정보 삭제
router.delete('/users/:userId', usersController.deleteUser);

module.exports = router;
