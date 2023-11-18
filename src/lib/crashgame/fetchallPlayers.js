import { handleAllPlayerStore, APPLOAD } from "./store"
import {ServerURl} from "$lib/backendUrl"

const URL = ServerURl()
export const useAllplayer = () => {
   
    let cashoutError = ''
    let loadingCashout = false
    let result = ''
    const getAllPlayers = async (data) => {
      loadingCashout = true
      cashoutError = null
      APPLOAD.set(true)
      const response = await fetch(
        `${URL}/admin/all-players/crash`,{
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
        loadingCashout = false;
        APPLOAD.set(false)
        cashoutError = json.error
      }
      if (response.ok) {
        result = json
        APPLOAD.set(false)

        handleAllPlayerStore.set(result)
      }
    };
    return { getAllPlayers, loadingCashout, cashoutError };
  };