const { User } = require('../models');

class UserRepository {
  async create(user) {
    return User.create(user);
  }

  async findByEmail(email) {
    return User.findOne({ where: { email } });
  }

  async update(userId, userData) {
    const user = await User.findOne({ where: { userId } });
    console.log('유저어 : ', user);

    if (!user) {
      throw new Error('유저를 찾을 수 없습니다.');
    }

    // 사용자 정보 업데이트
    user.email = userData.email;
    user.password = userData.password;
    user.nickname = userData.nickname;
    user.address = userData.address;
    user.role = userData.role;
    user.phone = userData.phone;

    await user.save();
  }

  async delete(userId) {
    const user = await User.findOne({ where: { userId } });

    if (!user) {
      throw new Error('유저 정보를 찾을 수 없습니다.');
    }

    await user.destroy();
  }
}

module.exports = UserRepository;
