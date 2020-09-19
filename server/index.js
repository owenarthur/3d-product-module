const compression = require('compression');
const express = require('express');
const path = require('path');
const port = 8085;

const app = express();
app.use(compression());
app.use(express.static(path.join(__dirname + '/../public')));

app.listen(port, () => console.log(`we're wiggling on port ${port}`))
