import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';
import webpackMiddleWare from 'webpack-dev-middleware';

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

//No files are written to disk, it handle the files in memory
app.use(webpackMiddleWare(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
