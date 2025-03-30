const express = require('express');
const router = express.Router(); 

const mails = require('../config/mailbox');

router.get('/api/v1/mail', (req, res) => {
    res.status(200).json({ code: 1, message: 'SUCCESS', data: mails });
});

module.exports = router;
