/* eslint-disable no-console */
/*
  This file is responsible for requiring your express server and then binding it to the desired port
*/

require('newrelic');

const server = require('./server.js');

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
