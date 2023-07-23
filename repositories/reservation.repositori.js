const { reservation, guest } = require('../models');

class RservationRepositori {
  // 예약 등록
  createResulve = async (startDateTime, endDateTime, guestId, sitterId, userId) => {
    const resulveRepositori = await reservation.create({
      startDateTime,
      endDateTime,
      guestId,
      sitterId,
      userId,
    });

    return resulveRepositori;
  };

  // 예약 삭제
  destroyResulve = async (reservationsId, userId) => {
    const a = await reservation.findOne({
      where: { reservationsId },
      include: {
        model: guest,
        as: 'guest',
        where: { UserId: userId },
        attributes: ['guestId'],
      },
    });

    if (!a) {
      return false;
    }
    const reservationRepositori = await reservation.destroy({
      where: { reservationsId, guestId: a.guest.guestId },
    });

    return reservationRepositori;
  };

  // 예약 전체 조회
  getresulve = async () => {
    const reservationRepositori = await reservation.findAll();

    return reservationRepositori;
  };

  // 예약 수정
  putResulve = async (startDateTime, endDateTime, reservationsId, userId) => {
    const resulveRepositori = await reservation.update(
      {
        startDateTime,
        endDateTime,
        userId,
      },
      {
        where: { reservationsId },
      }
    );

    return resulveRepositori;
  };
}

module.exports = RservationRepositori;
