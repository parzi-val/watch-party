const express = require('express');
const { Server } = require('socket.io');

const app = express();
const port = 3000;

// In-memory room state
const rooms = {};

// Setup Socket.IO directly on the Express app
const io = new Server(app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
}), {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log(`🔌 Socket connected: ${socket.id}`);

    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        console.log(`👥 ${socket.id} joined room ${roomId}`);

        // Track user in room
        if (!rooms[roomId]) {
            rooms[roomId] = {
                host: socket.id,
                users: new Set()
            };
        }
        rooms[roomId].users.add(socket.id);
        console.log(rooms)
        // Notify others
        socket.to(roomId).emit('user-joined', socket.id);

        // Send back confirmation
        socket.emit('joined-room', {
            roomId,
            isHost: rooms[roomId].host === socket.id
        });
    });

    socket.on('play', (roomId, time) => {
        console.log(time)
        socket.to(roomId).emit('play', time);
    });

    socket.on('pause', (roomId, time) => {
        socket.to(roomId).emit('pause', time);
    });

    socket.on('seek', (roomId, time) => {
        socket.to(roomId).emit('seek', time);
    });

    socket.on('disconnecting', () => {
        for (const roomId of socket.rooms) {
            if (rooms[roomId]) {
                rooms[roomId].users.delete(socket.id);
                if (rooms[roomId].host === socket.id) {
                    io.to(roomId).emit('host-disconnected');
                }
            }
        }
    });

    socket.on('disconnect', () => {
        console.log(`❌ Disconnected: ${socket.id}`);
    });
});
