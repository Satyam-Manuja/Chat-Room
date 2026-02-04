import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://chat-room-bszt.onrender.com');
}
