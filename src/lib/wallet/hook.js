import axios from "axios"
import { ServerURl } from "$lib/backendUrl"

export const handleDepositHook = (async(data, auth)=>{
    let response = ""
    let is_loading = true
    await axios.post(`${ServerURl()}/api/deposit/initiate`, {
        data: data
    },{
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        is_loading = false
    })
    .catch((err)=>{
        response = err
        is_loading = false
    })
    return { response, is_loading}
})

export const handleFetchPendingOrder = (async(auth)=>{
    let is_loading = true
    let response = ''
    await axios.get(`${ServerURl()}/api/deposit/pending-order`, {
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        is_loading = false
    })
    .catch((err)=>{
        is_loading = false
        console.log(err)
    })
    return {is_loading, response}
})

export const handleDepositRefresh = (async(auth)=>{
    let is_loading = true
    let response = ""
    await axios.post(`${ServerURl()}/api/deposit/confirmDeposit`, {
        data: 1
    },{
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        is_loading = false
        handleFetchPendingOrder(auth)
    })
    .catch((err)=>{
        is_loading = false
        console.log(err)
    })
    return {response , is_loading}
})

export const handleDepositExpire = (async(auth)=>{
    let is_loading = true
    let response = ""
    await axios.get(`${ServerURl()}/api/deposit/expire`,{
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${auth}`
        }
    })
    .then((res)=>{
        is_loading = false
        response = res.data
    })
    .catch((err)=>{
        is_loading = false
         console.log(err)
    })
    return {response , is_loading}
})

export const handleWithdraw = (async(data)=>{
    await axios.post(`${ServerURl()}/api/withdraw/initiate`,{
            data
        },{
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${data.auth}`
            }
        })
        .then(response =>{
            return response.data
        })
        .catch((error)=>{
           return error.response.data.message
        })
 })

 export const handleSwapCoins = (async(income, auth)=>{
    let response = ""
    let error = ""
    let isLoading = true
    await axios.post(`${ServerURl()}/api/transaction/swap`,{
        data: income
    },{
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        isLoading = false
    })
    .catch((err)=>{
        error = err.message
    })
    return { response, error, isLoading }
 })

export const handleFetchSecurity = (async(user)=>{
    let response = ""
    let error = ""
    let isLoading = true
    await axios.get(`${ServerURl()}/api/users/2fa`, {
        username: user
    })
    .then((res)=>{
        response = res.data
        isLoading = false
    })
    .catch((err)=>{
        error = err
        isLoading = false
    })
    return { response, error, isLoading }
})

export const handleVerifySecurity = (async(key)=>{
    let response = ""
    let error = ""
    let Loading = true
    await axios.post(`${ServerURl()}/api/users/2fa/verify`, {
        token: key
    })
    .then((res)=>{
        response = res.data
        Loading = false
    })
    .catch((err)=>{
        error = err.response.data?.message
        Loading = false
    })
    return { response, error, Loading }
})