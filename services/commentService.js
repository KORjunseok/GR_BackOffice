const commentRepository = require('../repositories/commentRepository');

// 댓글 조회
async function getCommentsBySitterId(UserId) {
  try {
    return await commentRepository.getCommentsBySitterId(UserId);
  } catch (error) {
    throw new Error('댓글 조회 중 오류가 발생했습니다.');
  }
}

// 댓글 작성
async function createComment(text, rating, UserId) {
  try {
    return await commentRepository.createComment(text, rating, UserId);
  } catch (error) {
    throw new Error('댓글 작성 중 오류가 발생했습니다.');
  }
}

// 댓글 수정
async function updateComment(commentId, text, rating) {
  try {
    return await commentRepository.updateComment(commentId, text, rating);
  } catch (error) {
    throw new Error('댓글 수정 중 오류가 발생했습니다.');
  }
}

// 댓글 삭제
async function deleteComment(commentId) {
  try {
    await commentRepository.deleteComment(commentId);
  } catch (error) {
    throw new Error('댓글 삭제 중 오류가 발생했습니다.');
  }
}

module.exports = {
  getCommentsBySitterId,
  createComment,
  updateComment,
  deleteComment,
};
