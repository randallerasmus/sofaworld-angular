const express = require('express');

const app = express();

app.use(express.static('./dist/sofaworld-angular'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/sofaworld-angular/'}),
);

app.listen(process.env.PORT || 8080);
