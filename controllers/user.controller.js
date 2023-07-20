const UserService = require('../services/user.service');

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  // 회원가입
  signup = async (req, res, next) => {
    try {
      const { email, password, nickname, address, role, phone } = req.body;
      const signup = await this.userService.createUser(
        email,
        password,
        nickname,
        address,
        role,
        phone
      );

      console.log('Look here:', signup);

      res.status(200).json('회원가입이 완료되었습니다.');
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ errorMessage: '회원가입에 실패했습니다.' });
    }
  };

  // 로그인
  loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;

      const token = await this.userService.loginUser(email, password);

      // JWT 토큰 발생하여 쿠키 생성
      await res.cookie('authorization', `petsitter ${token}`);

      return res.status(200).json({ message: '로그인이 성공했습니다.' });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(401).json({ message: '로그인이 실패했습니다.' });
    }
  };

  // 회원가입 정보 수정
  updateUser = async (req, res) => {
    try {
      const { email, password, nickname, address, role, phone } = req.body;
      const { userId } = req.params;

      await this.userService.updateUser(
        userId,
        email,
        password,
        nickname,
        address,
        role,
        phone
      );

      return res.status(200).json({ message: '회원정보가 수정되었습니다.' });
    } catch (error) {
      console.error('Update Error:', error);
      res.status(500).json({ errorMessage: '회원정보 수정이 실패했습니다.' });
    }
  };

  // 회원정보 삭제
  deleteUser = async (req, res) => {
    try {
      const { userId } = req.params;

      await this.userService.deleteUser(userId);
      return res
        .status(200)
        .json({ message: '회원정보가 성공적으로 삭제되었습니다.' });
    } catch (error) {
      console.error('Delete Error:', error);
      res.status(500).json({ errorMessage: '회원정보 삭제가 실패했습니다.' });
    }
  };
}

module.exports = UserController;
