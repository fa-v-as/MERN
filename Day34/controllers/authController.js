// Authentication Controller
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Register User
const registerUser = async (req, res) => {
  const { Name, Email, Password } = req.body; 

  try {
    let user = await User.findOne({ Email }); 

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({
      Name,
      Email,
      Password,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Login User
const loginUser = async (req, res) => {
  const { Email, Password } = req.body; 
  try {
    let user = await User.findOne({ Email }); 

    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const isMatch = await user.matchPassword(Password); 

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { registerUser, loginUser };