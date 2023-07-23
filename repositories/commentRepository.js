const { comments } = require('../models');

// 댓글 조회
async function getCommentsBySitterId(UserId) {
  return comments.findAll({ where: { UserId } });
}

// 댓글 작성
async function createComment(text, rating, UserId) {
  console.log(UserId, text, rating);
  return await comments.create({ comment: text, rating, UserId });
}

// 댓글 수정
async function updateComment(commentId, text, rating) {
  const comment = await comments.findByPk(commentId);
  console.log('넌 뭐냐아아아아아 :', comment);
  if (!comment) {
    throw new Error('해당 댓글을 찾을 수 없습니다.');
  }
  comment.comment = text;
  comment.rating = rating;
  await comment.save();
  return comment;
}

// 댓글 삭제
async function deleteComment(commentId) {
  const comment = await comments.findByPk(commentId);
  if (!comment) {
    throw new Error('해당 댓글을 찾을 수 없습니다.');
  }
  await comment.destroy();
}

module.exports = {
  getCommentsBySitterId,
  createComment,
  updateComment,
  deleteComment,
};
