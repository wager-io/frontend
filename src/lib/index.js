import { handleisLoggin } from "$lib/store/profile";
import axios from "axios"
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()
export const UserProfileEl = (auth) => {

const handleprofile = async (auth) => {
  let is_loading = true
  let error = ""
  let response = ""
  if(!auth){
    handleisLoggin.set(false)
    is_loading = false
  }else{
    await axios.get(`${URL}/api/profile`,{
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        handleisLoggin.set(true)
        is_loading = false
    })
    .catch((err)=>{
        error = err.message
        handleisLoggin.set(false)
        is_loading = false
    })
  }

    return { is_loading, error, response }
};


const handleWGDwallet = async () => {
    const response = (await fetch(`${URL}/api/wallet/wgd-wallet`, {
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

 async function getExchangeEth(data) {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: "ethereum",
          vs_currencies: 'usd',
        },
      });
      return response.data.ethereum.usd;
    } catch (error) {
      console.error('Error fetching exchange rate:', error.message);
      return null;
    }
  }

  async function getExchangeBTC(data) {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: "bitcoin",
          vs_currencies: 'usd',
        },
      });
      return response.data.bitcoin.usd;
    } catch (error) {
      console.error('Error fetching exchange rate:', error.message);
      return null;
    }
  }

const handleTransaction = (async(auth, route)=>{
  let responcse = ""
  let is_loading = true
  let error = ''
  if(auth){
      await axios.get(`${ServerURl()}/api/transaction/${route}`,{
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${auth}`,
        }
      })
      .then((response)=>{
          responcse = response.data
          is_loading = false
      })
      .catch((err)=>{
          error = err
          is_loading = false
      })
  }else{
      error = "No user"
      is_loading = false
  }
  return {responcse, is_loading, error}
})

  return {
    handleprofile,
    handleBTCwallet,
    handleWGFwallet,
    handleETHwallet,
    handleWGDwallet,
    getExchangeEth,
    getExchangeBTC,
    handleTransaction
  };
};

