<script>
  import { goto } from "$app/navigation";
  import { handleAuthToken } from "$lib/store/routes"
  import { default_Wallet, coin_list } from "$lib/store/coins"
  import { profileStore } from "$lib/store/profile"
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { url } from "$lib/store/routes";
  import {handleGoogleAuth, handleFacebookAuth } from "$lib/firebaseAuth/index";
  import { screen } from "$lib/store/screen";
  import Login from "./login/login.svelte";
  import Register from "./register/register.svelte";
  import Forget from "./forget/forget.svelte";
  export let modal;
  export let referID;

  $: is_loading = false
  $: error = false
    
  let is_mobile = false;
  onMount(() => {
    if (browser && window.innerWidth < 650) {
      is_mobile = true;
    } else {
      is_mobile = false;
    }
  });
  
  const handleLoginWithGoogle = (async()=>{
    is_loading = true
    const respo = await handleGoogleAuth()
    is_loading = respo.loading
    error = respo.error
    setTimeout(()=>{
      error = ""
    },4000)
    if(respo.responses){
      error = respo.responses.error
      let respos = respo.responses.response_data
      localStorage.setItem("user", JSON.stringify(respos.Token));
      handleAuthToken.set(respos.Token)
      profileStore.set(respos.result)
      let hisex = respos.wallet
        coin_list.set(hisex)
        hisex.forEach(element => {
          if(element.is_active){
            default_Wallet.set(element)
          }
       });
       goto($url)
    }
  })
  
  </script>
  
  <div class="sc-bkkeKt kBjSXI">
  {#if error}
    <div class="error-message">
      <div class="hTTvsjh">
        <div>{error}</div>
      </div>
    </div>
  {/if}
  


<div class="dialog" style={`${$screen < 650 ? "transform: scale(1) translateZ(5px);"
    : "opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px;"}`}>
{#if modal !== "forget"}
      <div class="dialog-head has-close">
        <img alt="logo" class="sc-bOtlzW QccSQ"
          src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1714511848/Wager__wshh2r.png" />
      </div>
      <button on:click={() => goto($url)}
        class="sc-ieecCq fLASqZ close-icon dialog-close" >
        <Icon src={IoCloseSharp} size="18"  color="rgb(255, 255, 255)" className="custom-icon" />
      </button>
      <div class="dialog-body no-style sc-zjkyB ipnwmW" style="z-index: 2; transform: none;" >
        <div class="welcome">
          <div class="msg1">BUILD THE BEST CRYPTO CASINO TOGETHER</div>
          <!-- <img src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1704543204/NIKE1_34_1_ji6ln1.png" alt="" /> -->
        </div>
        <div class="sc-dkPtRN jScFby scroll-view hide-bar sc-bjztik ceTZhf"  style="transform: none;">
            {#if modal === "login"}
                <Login />
            {/if}
            {#if modal === "register"}
                <Register referID={referID}/>
            {/if}
            <div id="other-login" class="sc-jFkwbb iajVfs">
                <div class="box-title">Log in directly with</div>
                <div class="other-group">
                  <button
                    on:click={()=> handleLoginWithGoogle()}
                    id="gg_login"
                    type="button"
                    title="google"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path fill="#fa455e" d="M16 0a16 16 0 110 32 16 16 0 010-32z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M19.5 12.3c-.5-.5-1.1-.9-1.8-1a4.8 4.8 0 00-2-.2c-.9 0-1.7.4-2.3 1a5 5 0 00-2 4 5 5 0 004 4.8 5 5 0 001.6 0c.8 0 1.6-.3 2.2-.7.5-.4 1-.9 1.2-1.4l.3-.9v-.2h-4.4v-3.2h7.5l.2.1.1 1v1.2c0 .5 0 1-.2 1.6v-.1a7.4 7.4 0 01-1.4 3 7 7 0 01-3 2.4h-.1c-.6.2-1.2.4-1.9.4a8.8 8.8 0 01-1.9 0c-.8 0-1.5-.1-2.2-.4-.9-.4-1.6-.8-2.3-1.4-1-.8-1.9-2-2.4-3.2l-.5-1.9v-1.4-.1c0-.9.2-1.7.4-2.5.3-.7.7-1.4 1.2-2 1-1.4 2.5-2.5 4.3-3l1.5-.3a11.1 11.1 0 011.3 0 7.7 7.7 0 014.8 2l-.1.3-2 2h-.1z"
                      ></path>
                    </svg>
                  </button>
              
                  <button
                    on:click={()=> handleFacebookAuth()}
                    id="fb_login"
                    type="button"
                    title="facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path
                        fill="#fff"
                        d="M31.7 16.3a15.7 15.7 0 11-31.4 0 15.7 15.7 0 0131.4 0z"
                      ></path>
                      <path
                        fill="#227aee"
                        d="M0 16a16 16 0 0013.4 15.8V20.6h-4v-4.7h4v-4.4c0-2.7 2.3-5.7 6.5-5.6 1.5 0 3.4.5 3.4.5v4s-1.9-.2-3 0c-1.6.2-2 1.4-2 2v3.3h4.9l-1 4.9h-3.8v11.2A16 16 0 100 16z"
                      ></path>
                    </svg>
                  </button>
                  <div class="line"></div>
                </div>
              </div>
        </div>
      </div>
      {:else}
      <Forget on:close={()=> goto($url)}/>
    {/if}
</div>


</div>
  
  <style>
  
  
    img {
      overflow-clip-margin: content-box;
      overflow: clip;
    }
  
    .ipnwmW.dialog-body {
      padding: 0px;
    }
  
  
    .ipnwmW .welcome {
      height: 11.875rem;
      position: absolute;
      top: 3.75rem;
      left: 1.25rem;
      right: 0.3125rem;
      z-index: 1;
      color: rgb(245, 246, 247);
    }
  
  
    .ipnwmW .welcome .msg1 {
      font-size: 2.6rem;
    font-weight: bold;
    /* width: 14.375rem; */
    line-height: 1.2;
    margin-top: 1.25rem;
}
  
    /* .ipnwmW .welcome img {
      height: 13.75rem;
      position: absolute;
      right: 0px;
      top: -1.875rem;
    } */
  
    .QccSQ {
      height: 3.3rem;
      margin: 0rem 0px;
    }
    .ceTZhf {
      position: absolute;
      inset: 16.25rem 0px 0px;
      height: auto;
      border-top-left-radius: 1.25rem;
      border-top-right-radius: 1.25rem;
      background-color: rgb(23, 24, 27);
    }
  
  
    .dA-dCPD .welcome .msg1 {
      font-size: 1.5rem;
      font-weight: bold;
      width: 14.375rem;
      line-height: 1.2;
      margin-top: 1.25rem;
    }
  
    /* .dA-dCPD .welcome img {
      height: 12.75rem;
      position: absolute;
      right: 0px;
      top: -1.875rem;
    } */

    @media screen and (max-width: 621px) {
      .ipnwmW .welcome .msg1 {
      font-size: 2rem;
        font-weight: bold;
        /* width: 14.375rem; */
        line-height: 1.2;
        margin-top: 1.25rem;
    }
  
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }
  
      img {
        overflow-clip-margin: content-box;
        overflow: clip;
      }
    }
    .iajVfs .box-title {
    text-align: center;
    width: 100%;
    line-height: 1;
    margin-bottom: 0.875rem;
    color: rgba(153, 164, 176, 0.6);
  }

  .iajVfs {
    padding: 1rem 2.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
  }

  .iajVfs .box-title {
    text-align: center;
    width: 100%;
    line-height: 1;
    margin-bottom: 0.875rem;
    color: rgba(153, 164, 176, 0.6);
  }

  .iajVfs .other-group {
    border-radius: 1.75rem;
    background-color: rgba(49, 52, 60, 0.5);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }


  .iajVfs .other-group button {
    display: flex;
    height: 3.5rem;
    width: 3.5rem;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .iajVfs .other-group svg {
    width: 2.25rem;
    height: 2.25rem;
  }

  .gIMEzD .other-group button {
    display: flex;
    height: 3.5rem;
    width: 3.5rem;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
  .gIMEzD .other-group svg {
    width: 2.25rem;
    height: 2.25rem;
  }
  </style>
  