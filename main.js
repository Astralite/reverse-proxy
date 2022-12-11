// Import the express, http-proxy-middleware, and dotenv packages
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// Configure the app
const AppPort = process.env.APP_PORT || 3000;
const AppHost = process.env.APP_HOST || '0.0.0.0';
const ApiPath = process.env.API_PATH || '/todos';
const ApiTarget = process.env.API_TARGET || 'http://localhost:3001';
const StaticDirectory = process.env.STATIC_DIRECTORY || '../todo-frontend-vanilla';

app.set('port', AppPort);
app.set('host', AppHost);

// Set up the reverse proxy server
app.use(ApiPath, createProxyMiddleware({ target: ApiTarget, changeOrigin: true }));
app.use('/', express.static(StaticDirectory));

// Start the app
app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Express server listening on http://${app.get('host')}:${app.get('port')}`);
});
