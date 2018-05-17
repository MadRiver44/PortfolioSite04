import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = express();

// serve built files with static files middleware
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.send('hello')

})

app.listen(3000);



