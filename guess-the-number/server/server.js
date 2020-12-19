import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
// import { ThemeProvider } from '@material-ui/styles';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/Theme';

const PORT = process.env.PORT || 3006;
const app = express();

// ...

app.use('/', (req, res) => {
  const sheets = new ServerStyleSheets();
  const app = ReactDOMServer.renderToString(sheets.collect( <App />));
  const css = sheets.toString();
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(renderFullPage(app,css));
  });
});

function renderFullPage(html, css) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My page</title>
        <style id="jss-server-side">${css}</style>
      </head>
      <body>
      <div id="root" style={{height: 1440}}>${html}</div>
      </body>
    </html>
  `;
}

// app.use(express.static('./build'));
app.use('/build', express.static(path.join(__dirname, 'build')));


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});