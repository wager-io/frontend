import { io } from "socket.io-client";
import { ServerURl } from "$lib/backendUrl";
const URL = ServerURl()
import { chats } from "$lib/chat-room/store/index";
const socket = io(`${URL}`);
import { dice_troo, dicegameplays, dice_wallet, Handles_Loading } from "../store/index"
import { handleliveHistory } from "$lib/games/mines/store/index"
import { chatCounter } from "$lib/store/chat-counter"
import { profileStore } from "$lib/store/profile";

export const handleCountdown = (()=>{
    socket.on("grabCoinDropResponse", data => {
    const newData = data.data
    if (newData)
        chats.update(existingChats => {
            return existingChats.map(chat => {
                if (chat.msg_id === newData.msg_id) {
                    return newData;
                }
                return chat;
            });
        });
    })

    socket.on("mines-hs", data => {
        handleliveHistory.set(data)
    })


    const handleGrabCoinDrop = ((data) => {
        socket.emit("grab_coin", data)
    })

    const handleMinesHistory = ((data) => {
        socket.emit("mines-history", data)
    })

    const handleCrashActiveBet = ((data) => {
        socket.emit("crash-activebet", data)
    })

    socket.on("dice-troo", data => {
        dice_troo.set(data)
        Handles_Loading.set(false)
    })
    return {handleMinesHistory, handleCrashActiveBet, handleGrabCoinDrop }
})