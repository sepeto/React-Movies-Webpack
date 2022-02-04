import  path from "path";
import fs from "fs";

import express from "express";
import React from 'react';
import { renderToString } from "react-dom/server";

import App from './src/App.jsx';

const app = express();

// Middleware
app.use(express.static( path.join( __dirname, "public")));

app.get('/', (req, res) => {

  const renderApp = renderToString(<App />);
  const indexFile = path.join( __dirname, 'dist', 'index.html' );

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${renderApp}</div>`)
    );
  });

})

app.listen(process.env.PORT || 8080);
