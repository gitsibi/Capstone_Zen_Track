const express = require('express');
const router = express.Router();
const Session = require('../models/sessionModel');

router.get('/', async (req, res) => {
    try {
        const sessions = await Session.find();
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
