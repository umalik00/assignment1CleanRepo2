const server = require('./app')

const port = 3004;
server.listen(port,() => console.log(`\nExpress departing now from port ${port}!\n`))
// server.listen(port, () => console.log(`\nExpress departing now from port ${port}!\n`))