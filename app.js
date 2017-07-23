const express = require('express');
const app = express();

app.get('/api/whoami', (req, res) => {
    var useragent = req.headers['user-agent'];

    res.json({
        ipaddress: req.headers['x-forwarded-for'].split(',')[0] || req.connection.remoteAddress,
        language: req.headers['accept-language'].split(',')[0],
        software: useragent.substring(useragent.indexOf('(') + 1, useragent.indexOf(')')),
    });
});

app.listen(process.env.PORT || 3000);
