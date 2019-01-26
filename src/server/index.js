const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 5000;

const SocketManager = require('./SocketManager')

io.on('connection', SocketManager)

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
