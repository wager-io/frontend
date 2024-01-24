import {DiceEncription} from '$lib/games/ClassicDice/store/index'
import axios from "axios"
import { ServerURl } from "$lib/backendUrl"
const URl = ServerURl()

export const handleDiceGameEncrypt = (async(auth)=>{
    let is_loading = true
    auth && await axios.get(`${URl}/api/user/dice-game/encrypt`,{
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${auth}`
        }
    })
    .then((res)=>{
        is_loading = false
        DiceEncription.set(res.data[0])
    })
    .catch((err)=>{
        is_loading = false
        console.log(err)
    })
    return { is_loading }
})

