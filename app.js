const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Yo mama so old I told her to act her age and she died'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
