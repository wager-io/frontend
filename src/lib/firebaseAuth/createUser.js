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
