import axios from "axios";
import ably from "ably";
import { ServerURl } from "$lib/backendUrl";
import { chats } from "$lib/chat-room/store/index";

export const handlePublicChat = (async(data)=>{
    let response = ""
    await axios.post(`${ServerURl()}/api/chat/public-chat`,{
        message: data
    })
    .then((res)=>{
        response = res.data
    })
    return {response}
})

export const fetchPreviousMessage = (async()=>{
    await axios.get(`${ServerURl()}/api/users/previus-chats`)
    .then((res) => {
        chats.set(res.data);
    });
})

export const AblyFuctiion = (async()=>{
    console.log(ably)
})

export function levelColor(level){
    if(level <=7) return "type-1"
    if(level > 7 && level <= 21) return "type-2"
    if(level > 21 && level <= 37) return "type-3"
    if(level > 37 ) return "type-4"
}

export function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}