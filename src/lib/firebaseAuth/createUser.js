import axios from "axios"
import { ServerURl } from "$lib/backendUrl"

export  const useRegister = async (data) => {
  let error = ""
  let response_data = ""
  await axios.post(`${ServerURl()}/api/users/register`,{
      data
  })
  .then((res)=>{
    response_data = res.data
  })
  .catch((error)=>{
    error = error.error
  })
  return { response_data, error }
};

export const useChangeUsername = (async(data, auth)=>{
  let error = ""
  let response = ""
  let is_loading = true
  await  axios.post(`${ServerURl()}/api/profile/update-user`, 
  { data },{
      headers: {
      "Content-type": "application/json",
      'Authorization': `Bearer ${auth}`
    }})
    .then((res)=>{
      response = res.data
      is_loading = false
    })
    .catch((err)=>{
      error = err
      is_loading = false
    })
    return { error, response, is_loading }
})

export const useProfileSeting = (async(data, auth)=>{
  let error = ""
  let response = ""
  let is_loading = true
  await  axios.post(`${ServerURl()}/api/profile/update-profile`, 
  {data},{
      headers: {
      "Content-type": "application/json",
      'Authorization': `Bearer ${auth}`
    }})
    .then((res)=>{
      response = res.data
      is_loading = false
    })
    .catch((err)=>{
      is_loading = false
      error = err
    })
    return { error, response, is_loading }
})