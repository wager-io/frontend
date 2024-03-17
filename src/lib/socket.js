import { io } from "socket.io-client";
import { ServerURl } from "$lib/backendUrl";
import { chats } from "$lib/chat-room/store/index";
const socket = io(`${ServerURl()}`);

export const handleWebSocket = (async()=>{
    const handleChattingMessages = ((data) => {
        socket.emit("message", data)
    })
    socket.on("new-messages", data => {
        chats.set(data)
    })
    return { handleChattingMessages }
})