const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// 댓글 조회
router.get('/sitter/:userId', commentController.getCommentsBySitterId);

// 댓글 작성
router.post('/sitter/:userId', commentController.createComment);

// 댓글 수정
router.put('/comment/:commentId', commentController.updateComment);

// 댓글 삭제
router.delete('/comment/:commentId', commentController.deleteComment);

module.exports = router;
