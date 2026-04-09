const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const fetchuser = require('../middleware/fetchuser');


router.post('/place', fetchuser, async (req, res) => {
    try {
        const { items, totalAmount } = req.body;

        
        const newOrder = await Order.create({
            user: req.user.id,
            items,
            totalAmount
        });

        res.json({ success: true, order: newOrder });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


router.get('/fetchall', fetchuser, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        res.json({ success: true, orders });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
