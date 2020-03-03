const express = require('express');
const secure = require('express-force-https');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.use(secure);

app.get('/*', function(_req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 4200, function() {
  console.log('server js running on port ' + process.env.PORT);
});
