import './config';
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const app = express();
const port = process.env.PORT;
const compiler = webpack(config);

/* eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log('up and running on : ' + port);
});

module.exports = {app};
