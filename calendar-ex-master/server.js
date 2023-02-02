const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, 'calendar-ex-master/build')));

app.get('/', function (res, send) {
  send.sendFile(path.join(__dirname, '/calendar-ex-master/build/index.html'));
});