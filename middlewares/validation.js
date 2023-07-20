const validator = require('express-validator');
const { body, validationResult } = validator;

//단일 요청에 유효성 검사
const validate = function (req, res, next) {
  //req 객체들을 검증하고 오류인걸 errors 변수로 할당
  const errors = validationResult(req);
  //만약 오류가 없다면 다음 미들웨어로 전달
  if (errors.isEmpty()) {
    next();
  }
  //오류가 있다면 400 코드를 설정하고 json(메시지를 생성)
  else {
    res.status(400).json({
      //에러 메세지는 errors배열을 순회하며 오류 메시지를 생성.
      errorMessage: errors.array().map((v, idx) => `${v.msg}`),
    });
  }
};

// 회원가입 설정
const defaultValidate = {
  createUser: [
    body('nickname').trim().notEmpty().withMessage('닉네임을 입력해주세요.'),
    body('name').trim().notEmpty().withMessage('이름을 입력해주세요.'),
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('이메일 형식이 아닙니다. 확인해주세요.'),
    body('password')
      .custom((value, { req }) => {
        if (value != req.body.confirm) {
          throw new Error('확인 비밀번호와 일치하지 않습니다.');
        } else {
          return value;
        }
      })
      .matches(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,12}$/)
      .withMessage(
        '숫자와 문자, 기호를 포함한 6~12자리 비밀번호를 입력해주세요.'
      ),
    body('address').optional({ nullable: true, checkFalsy: true }),
    body('phone')
      .not()
      .contains('-')
      .withMessage("'-'를 빼고 입력해주세요.")
      .isLength({ min: 10, max: 11 })
      .withMessage('핸드폰 번호를 확인해주세요.')
      .optional({ nullable: true, checkFalsy: true }),
    validate,
  ],
};

module.exports = defaultValidate;
