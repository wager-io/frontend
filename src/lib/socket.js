import { io } from "socket.io-client";
import { ServerURl } from "$lib/backendUrl";
import { chats } from "$lib/chat-room/store/index";
import { dicegameplays } from "$lib/games/ClassicDice/store/index";
const socket = io(`${ServerURl()}`);

export const handleWebSocket = (async()=>{
    const handleChattingMessages = ((data) => {
        socket.emit("message", data)
    })

    const handleDicebet = ((data)=>{ 
        socket.emit("dice-bet", data)
    })

    socket.on("new-messages", data => {
        chats.set(data)
    })

    socket.on("dice-gamePLayers", data => {
        dicegameplays.set(data)
    })

    return { handleChattingMessages , handleDicebet}
})