const ReservationService = require('../services/reservation.service.js');

class ReservationController {
  constructor() {
    this.reservationService = new ReservationService();
  }

  // 예약 등록
  resulve = async (req, res, next) => {
    const { startDateTime, endDateTime } = req.body;
    const userId = res.locals.user;

    const { guestId, sitterId } = req.params;
    const { status, message } = await this.reservationService.createReservation(
      startDateTime,
      endDateTime,
      guestId,
      sitterId,
      userId
    );

    res.status(status).json({ message });
  };

  // 예약 삭제
  deleteresulve = async (req, res, next) => {
    const { reservationsId } = req.params;
    const userId = req.userId;

    const { status, message } = await this.reservationService.deleteResulve(reservationsId, userId);

    res.status(status).json({ message });
  };

  // 예약 전체 조회
  getresulve = async (req, res, next) => {
    const { status, messge, reservationService } = await this.reservationService.getResulve();

    res.status(status).json({ messge, reservationService });
  };

  // 예약 상세 조회
  getreservation = async (req, res, next) => {
    const { reservationsId } = req.params;

    const { status, message } = await this.reservationService.getreservation(reservationsId);

    res.status(status).json({ message, reservationsId });
  };

  // 예약 수정
  putresulve = async (req, res, next) => {
    const { startDateTime, endDateTime } = req.body;
    const userId = req.userId;

    const { reservationsId } = req.params;

    const { status, message } = await this.reservationService.putReservation(
      startDateTime,
      endDateTime,
      reservationsId,
      userId
    );

    res.status(status).json(message);
  };
}

module.exports = ReservationController;
