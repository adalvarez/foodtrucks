'use strict';

// Imports
import express from 'express';
import session from 'express-session';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import fs from 'fs';
import http from 'http';
import compression from 'compression';
import settings from './settings/settings';

// Routers
import API from './routes/API';

// Server App
const app = express();
const serverHTTP = http.Server(app);

// Setup of session
app.use(session({
  secret: '98cd708cd07558750622cd27672e8567',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));

// BodyParser and Cookie Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

// Logger file
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, settings.logger.file.filename), {
    flags: 'a'
  }
);
app.use(logger(settings.logger.file.style, {
  stream: accessLogStream
}));

// Logger
app.use(logger(settings.logger.runtime.style));

// Middleware to enable CORS
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

// Compression
app.use(compression());

// API
app.use('/api/', API);

// Test Ping
app.get('/ping', (req, res) => {
  res
    .status(200)
    .json({
      pong: true
    });
});

app.use('/', express.static(path.join(__dirname, 'view')));

// Deploy server
serverHTTP.listen(settings.port, () => {
  console.log('Server running ...');
  console.log(`URL: http://localhost:${settings.port}`);
});
