import axios from "axios";
import { ServerURl } from "$lib/backendUrl"

export const handleCheckUsername = (async(username)=>{
    let response = ''
    let error_message = ""
    await axios.post(`${ServerURl()}/api/users/check-username`,{
        username
    })
    .then((res)=>{
        response = res.data
    })
    .catch((error)=> {
        error_message = error.msg
    })
    return { response, error_message }
})