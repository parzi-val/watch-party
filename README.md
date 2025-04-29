# Watch Party Sync

## Description

The Watch Party Sync application allows users to join a shared room to watch videos in sync. This app uses **Socket.IO** for real-time communication between clients and the server to synchronize video playback across multiple users.

### Features:
- Users can join a room and sync video playback (play, pause, seek) in real-time.
- The server ensures all clients in the room stay in sync with the host’s actions.
- Simple client-side implementation using HTML5 video tags.


## Tasks

### Completed:
- **Basic Backend**: Set up a real-time server using **Express** and **Socket.IO**.
- **Room Management**: Implemented room-based architecture where users can join rooms and the host controls the sync.
- **Video Sync**: Implemented the ability to synchronize play, pause, and seek actions across multiple clients in the same room.
- **Frontend Integration**: Integrated real-time socket events with HTML5 `<video>` controls for synchronization.

### Pending:
- [ ] **Error Handling**: Improve error handling for disconnected clients or failed connections.
- [ ] **UI Enhancements**: Create a more polished UI for the watch party (e.g., user list, video controls for all users).
- [ ] **User Authentication**: Add basic authentication for user registration and login.
- [ ] **Support for Multiple Video Sources**: Expand support for different video sources (e.g., YouTube, Vimeo).
- [ ] **Mobile Support**: Ensure the application works well on mobile devices.
- [ ] **Testing**: Implement unit and integration tests to ensure stability and reliability.
- [ ] **Scalability**: Optimize the server for better scalability to handle more rooms and users.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
