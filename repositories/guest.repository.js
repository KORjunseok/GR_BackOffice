const { guest } = require('../models');

class GuestRepository {
  async findByUserId(userId) {
    return guest.findOne({ where: { userId } });
  }

  async create(data) {
    return guest.create(data);
  }

  async delete(userId) {
    const delguest = await guest.findOne({ where: { userId } });

    (await delguest) !== null ? delguest.destroy() : '';
  }
}

module.exports = GuestRepository;
