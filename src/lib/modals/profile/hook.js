import axios from "axios"
import { ServerURl } from "$lib/backendUrl"

export const handleprofiling = (async(user)=>{
    let loading = true
    let error = ""
    let response = ""
    await axios.post(`${ServerURl()}/api/users/profile/${user}`)
    .then(res => {
        loading = false
        response = res.data[0]
    })
    .catch((err) => {
        error =  err
        loading = false
    })
    return { response, error, loading }
})

export const handleGlobalStat = (async(user)=>{
    let loading = true
    let error = ""
    let response = ""
    await axios.post(`${ServerURl()}/admin/stat/global`,{
        user_id: user
    })
    .then(res => {
        loading = false
        response = res.data[0]
    })
    .catch((err) => {
        error =  err
        loading = false
    })
    return { response, error, loading }
})