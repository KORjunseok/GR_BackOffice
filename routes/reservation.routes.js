const express = require('express');
const router = express.Router();
const middlewares = require('../middlewares/middleware.js');

const ReservationController = require('../controllers/reservation.controller');
const reservationController = new ReservationController();

// 예약 등록
router.post('/reservation/:guestId/:sitterId', middlewares, reservationController.resulve);

// 예약 삭제
router.delete('/reservation/:reservationsId', middlewares, reservationController.deleteresulve);

// 예약 전체 조회
router.get('/reservation', middlewares, reservationController.getresulve);

// 예약 상세 조회
router.get('/reservation/:reservationsId', middlewares, reservationController.getreservation);

// 예약 수정 조회
router.put('/reservation/:reservationsId', middlewares, reservationController.putresulve);

module.exports = router;
