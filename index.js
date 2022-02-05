require('dotenv').config();

const express = require('express');
const router = require('./app/router');
const path = require('path');
const crypto = require('./app/middleware/nonces');

const PORT = process.env.PORT || 5300;

const app = express();

app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; img-src 'self' https://cdn.jsdelivr.net https://www.facebook.com; script-src 'self' https://connect.facebook.net https://code.jquery.com http://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' http://cdn.jsdelivr.net https://fonts.googleapis.com https://connect.facebook.net; frame-src 'self' https://www.google.com/ https://www.facebook.com/ https://www.youtube-nocookie.com/"
  );
  next();
});

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, './public')));

app.use(express.urlencoded({extended: true}));

app.use(crypto);
   
app.use(router);

app.listen(PORT, _ => {
  console.log(`server on http://localhost:${PORT}`);
});