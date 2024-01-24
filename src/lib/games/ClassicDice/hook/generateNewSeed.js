import axios from "axios"
import { ServerURl } from "$lib/backendUrl"
const URl = ServerURl()

export const GenerateSeed = (async()=>{
    let is_loading = true
    let response = ""
    await axios.get(`${URl}/api/user/dice-game/generate-seed`)
    .then((res)=>{
        is_loading = false
        response = res.data
    })
    .catch((err)=>{
        is_loading = false
        console.log(err)
    })
    return { is_loading, response }
})