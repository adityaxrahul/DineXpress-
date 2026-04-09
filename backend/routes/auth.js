const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" });
    }

    
    const salt = await bcrypt.genSalt(10);
    const securedPassword = await bcrypt.hash(password, salt);

    
    user = await User.create({
      name: name,
      email: email,
      password: securedPassword,
    });

    const data = {
      user: { id: user.id }
    };
    
    const authtoken = jwt.sign(data, process.env.JWT_SECRET);
    res.json({ success: true, authtoken });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


router.post('/login', async (req, res) => {
  let success = false;
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: { id: user.id }
    };

    const authtoken = jwt.sign(data, process.env.JWT_SECRET);
    success = true;
    res.json({ success, authtoken, isAdmin: user.isAdmin });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
