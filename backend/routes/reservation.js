const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

router.post('/book', async (req, res) => {
    try {
        const { name, email, guests, request } = req.body;
        const newReservation = await Reservation.create({
            name, email, guests, request
        });
        res.json({ success: true, reservation: newReservation });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


router.get('/fetchall', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json({ success: true, reservations });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
