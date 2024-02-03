import { profileStore, handleisLoggin, app_Loading } from "$lib/store/profile";
import { default_Wallet, coin_list } from "../lib/store/coins"
import { vipProfiile } from "$lib/store/profile";
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

export  const UserProfileEl = (auth) => {
const handleprofile = async (auth) => {
    app_Loading.set(true)
    if(auth){
        const response = await fetch( `${URL}/api/profile`,{
                method: "GET",
                headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${auth}`
                }
            });
            const json = await response.json();
            if(!response.ok){
            app_Loading.set(false)
            handleisLoggin.set(false)
            profileStore.set({})
            window.location.href = ("")
            localStorage.removeItem("user");
            localStorage.removeItem("user_bet_amount");
            }
            if (response.ok) {
                profileStore.set(json.users[0])
                vipProfiile.set(json.users[0])
                app_Loading.set(false)
                handleisLoggin.set(true)
                let wallet = json.wallet
                coin_list.set(wallet)
                wallet.forEach(element => {
                  if(element.is_active){
                    default_Wallet.set(element)
                  }
               });
            }
            else{
              handleisLoggin.set(false)
              profileStore.set({})
              window.location.href = ("")
              localStorage.removeItem("user");
              localStorage.removeItem("user_bet_amount");
            }
    }else{
        app_Loading.set(false)
    }
};


const handleWGDwallet = async () => {
    const response =
      (await fetch(`${URL}/api/wallet/wgd-wallet`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
      }));
    const json = await response.json();
    if (response.ok) {
      return json[0];
    }
  };

  const handleETHwallet = async () => {
    const response = await fetch(`${URL}/api/wallet/eth-wallet`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      return json[0];
    }
  };

  const handleWGFwallet = async () => {
    const response = await fetch(`${URL}/api/wallet/wgf-wallet`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      return json[0];
    }
  };
  const handleBTCwallet = async () => {
    const response = await fetch(`${URL}/api/wallet/btc-wallet`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      return json[0];
    }
  };

  return {
    handleprofile,
    handleBTCwallet,
    handleWGFwallet,
    handleETHwallet,
    handleWGDwallet,
  };
};