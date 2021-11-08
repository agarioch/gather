const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { auth } = require('express-oauth2-jwt-bearer');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

const checkJwt = auth({
  audience: 'http://localhost:5000',
  issuerBaseURL: 'https://dev-a0zzgovu.us.auth0.com/'
});

app.use(cors());
app.use(morgan('short'));

app.get('/', (req, res) => res.send('<p>hello</p>'));

// test private route
app.get('/private', checkJwt, function (req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));