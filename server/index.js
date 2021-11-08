const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(morgan('short'));

app.get('/', (req, res) => res.send('<p>hello</p>'));

app.listen(process.env.SERVER_PORT, () => console.log(`🚀 Server running on http://localhost:${process.env.SERVER_PORT}`));