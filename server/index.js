const server = require('./server')

const port = 3005;
server.listen(port, () => console.log(`\nExpress departing now from port ${port}!\n`))