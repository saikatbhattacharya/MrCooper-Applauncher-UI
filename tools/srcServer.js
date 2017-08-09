import express from 'express';
import webpack from 'webpack';
import path from 'path';
import bodyParser from 'body-parser';
import config from '../webpack.config';
import open from 'open';
import webpackMiddleWare from 'webpack-dev-middleware';
import * as dataApi from '../api';

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackMiddleWare(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.get('/getApp', function(req, res) {
  dataApi.getApp(res); 
});
app.post('/createApp', function(req, res) {
  dataApi.postApp(req.body, res); 
});
app.put('/editApp', function(req, res) {
  dataApi.putApp(req.body, res); 
});
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
