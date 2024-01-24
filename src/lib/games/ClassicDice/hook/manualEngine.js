import { ServerURl } from "$lib/backendUrl"
const URl = ServerURl()
import axios from "axios"
import { HandleDicePoint, HandleHas_won, Handles_Loading } from "../store/index"
import { default_Wallet } from "$lib/store/coins";
import { handleCountdown} from "$lib/games/ClassicDice/socket/index"
const { handleDicebet } = handleCountdown()

export const DiceBet = async(data, auth) => {
    let response = ""
    Handles_Loading.set(true);
      auth && await axios.post(`${URl}/api/user/dice-game/bet`,{
        data
        },{
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${auth}`
        }
      })
    .then((res)=>{
        const fopp = res.data[0]
        let wallet = {
            coin_name: fopp.token,
            coin_image: fopp.token_img,
            balance:  fopp.current_amount
         }
         default_Wallet.set(wallet)
        HandleDicePoint.set(fopp.cashout)
        handleDicebet(fopp)
        if(fopp.has_won){
            HandleHas_won.set(true)
        }else{
            HandleHas_won.set(false)
        }
        Handles_Loading.set(false);
        response = fopp
    })
    .catch((err)=>{
        Handles_Loading.set(false);
        console.log(err)
    })
    return response 
};