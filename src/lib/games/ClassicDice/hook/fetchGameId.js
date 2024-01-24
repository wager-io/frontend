import axios from "axios"
import { ServerURl } from "$lib/backendUrl"
const URl = ServerURl()

export const handleDiceDetails = (async(data)=>{
    let is_loading = true
    let response = ""
    data && await axios.post(`${URl}/api/user/dice-game/historyByID`,{
        data
    })
    .then((res)=>{
        is_loading = false
        response = res.data[0]
    })
    .catch((err)=>{
        is_loading = false
        console.log(err)
    })
    return { is_loading, response }
})