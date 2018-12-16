const express = require("express");
const router = express.Router();

router.post('/register', function (req, res, next) {
    const username = req.body.username;
    req.session.username = username;
    res.redirect('/gallery.html');
});

module.exports = router;
