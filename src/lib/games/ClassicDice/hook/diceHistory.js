import { ServerURl } from "$lib/backendUrl"
const URl = ServerURl()
import axios from "axios"
import { dice_history } from "../store/index"

export const DiceHistory = async(auth) => {
  await axios.get(`${URl}/api/user/dice-game/dice-history`,{
    headers: {
      "Content-type": "application/json",
      'Authorization': `Bearer ${auth}`
    }})
    .then((response)=>{
        dice_history.set(response.data)
    })
    .catch((error)=>{
        console.log(error.response)
    })
};