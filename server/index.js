const express = require('express');
require('dotenv').config();

const app = express();

app.listen(process.env.SERVER_PORT, () => console.log(`🚀 Server running on http://localhost:${process.env.SERVER_PORT}`));