const { sitter } = require('../models');

class SitterRepository {
  async findByUserId(userId) {
    return sitter.findOne({ where: { userId } });
  }

  async create(data) {
    return sitter.create(data);
  }

  async delete(userId) {
    const delsitter = await sitter.findOne({ where: { userId } });

    (await delsitter) !== null ? delsitter.destroy() : '';
  }
}

module.exports = SitterRepository;
