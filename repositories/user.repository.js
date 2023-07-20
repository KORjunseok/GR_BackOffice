const { User } = require('../models');

class UserRepository {
  async create(user) {
    return User.create(user);
  }
  async findByEmail(email) {
    return User.findOne({ where: { email } });
  }

  // 회원가입 수정
  async update(userId, userData) {
    const user = await User.findOne({ where: { userId } });
    if (!user) {
      throw new Error('유저 정보를 확인해 주세요.');
    }

    user.email = userData.email;
    user.password = userData.password;
    user.nickname = userData.nickname;
    user.address = userData.address;
    user.role = userData.role;
    user.phone = userData.phone;

    await user.save();
  }

  // 회원가입 삭제
  async delete(userId) {
    const user = await User.findOne({ where: { userId } });
    if (!user) {
      throw new Error('유저 정보를 확인해 주세요.');
    }
    await user.destroy();
  }
}

module.exports = UserRepository;
