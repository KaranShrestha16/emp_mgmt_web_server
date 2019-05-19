const Express = require('express');
const express = Express();

express.get('/api/login', function (req, res) {
    res.json({
        status: "ok"
    })
});

const port = process.env.PORT || 8000;

express.listen(port, function () {
    console.log("Listening on port: " + port);
})