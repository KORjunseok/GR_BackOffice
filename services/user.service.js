const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/user.repository');
const jwt = require('jsonwebtoken');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  // 회원가입
  async createUser(email, password, nickname, address, role, phone) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
      email,
      password: hashedPassword,
      nickname,
      address,
      role,
      phone,
    });

    return user;
  }

  async loginUser(email, password) {
    const user = await this.userRepository.findByEmail(email);

    // 유저가 있을 경우
    if (!user) {
      throw new Error('Invalid credentials.');
    }

    // bcrypt 사용
    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      throw new Error('Invalid credentials.');
    }

    // JWT 토큰
    const token = jwt.sign(
      {
        userId: user.userId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );

    return token;
  }

  // 회원정보 수정
  async updateUser(userId, email, password, nickname, address, role, phone) {
    // Call the update method from the UserRepository to update the user information in the database
    await this.userRepository.update(userId, {
      email,
      password,
      nickname,
      address,
      role,
      phone,
    });
  }

  // 회원정보 삭제
  async deleteUser(userId) {
    await this.userRepository.delete(userId);
  }
}

module.exports = UserService;
