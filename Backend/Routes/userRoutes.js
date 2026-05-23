const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getCurrentUser } = require('../Controllers/userController');
const {protect} = require('../MiddleWare/authMiddleWare');
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/current', protect, getCurrentUser);
module.exports = router;
