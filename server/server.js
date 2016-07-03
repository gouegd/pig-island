/* eslint no-console:0 */
const express = require('express');
const path = require('path');

const server = express();

server.use(express.static('build'));

server.get('*', (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
});

const listener = server.listen(process.env.PORT || 8080, () => {
  console.log('Express server listening on port %d', listener.address().port);
});
