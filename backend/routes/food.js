const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');


router.post('/add', async (req, res) => {
    try {
        const { name, category, price } = req.body;
        const foodItem = await FoodItem.create({ name, category, price });
        res.json({ success: true, foodItem });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


router.get('/fetchall', async (req, res) => {
    try {
        const { category } = req.query;
        let query = {};
        if (category) {
            query.category = { $regex: new RegExp(`^${category}$`, 'i') };
        }
        const items = await FoodItem.find(query);
        res.json({ success: true, items });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


router.delete('/delete/:id', async (req, res) => {
    try {
        let foodItem = await FoodItem.findById(req.params.id);
        if (!foodItem) { return res.status(404).send("Not Found"); }

        await FoodItem.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Food item deleted", item: foodItem });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


router.put('/update/:id', async (req, res) => {
    try {
        const { name, category, price } = req.body;
        const newFoodItem = {};
        if (name) newFoodItem.name = name;
        if (category) newFoodItem.category = category;
        if (price) newFoodItem.price = price;

        let foodItem = await FoodItem.findById(req.params.id);
        if (!foodItem) { return res.status(404).send("Not Found"); }

        foodItem = await FoodItem.findByIdAndUpdate(req.params.id, { $set: newFoodItem }, { new: true });
        res.json({ success: true, foodItem });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
