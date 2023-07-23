const commentService = require('../services/commentService');

// 댓글 조회
async function getCommentsBySitterId(req, res) {
  const { userId } = req.params;
  try {
    const comments = await commentService.getCommentsBySitterId(userId);
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '댓글 조회 중 오류가 발생했습니다.' });
  }
}

// 댓글 작성
async function createComment(req, res) {
  const { text, rating } = req.body;
  const { userId } = req.params;
  try {
    const comment = await commentService.createComment(text, rating, userId);
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '댓글 작성 중 오류가 발생했습니다.' });
  }
}

// 댓글 수정
async function updateComment(req, res) {
  const { commentId } = req.params;
  const { text, rating } = req.body;
  try {
    const comment = await commentService.updateComment(commentId, text, rating);
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '댓글 수정 중 오류가 발생했습니다.' });
  }
}

// 댓글 삭제
async function deleteComment(req, res) {
  const { commentId } = req.params;
  try {
    await commentService.deleteComment(commentId);
    res.json({ message: '댓글이 삭제되었습니다.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '댓글 삭제 중 오류가 발생했습니다.' });
  }
}

module.exports = {
  getCommentsBySitterId,
  createComment,
  updateComment,
  deleteComment,
};
