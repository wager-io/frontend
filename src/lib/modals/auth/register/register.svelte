<script>
  import { goto } from "$app/navigation";
  import { handleAuthToken } from "$lib/store/routes"
  import { default_Wallet, coin_list } from "$lib/store/coins"
  import { profileStore } from "$lib/store/profile"
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
  import AiOutlineCheck from "svelte-icons-pack/ai/AiOutlineCheck";
  import RiSystemArrowDropLeftLine from "svelte-icons-pack/ri/RiSystemArrowDropLeftLine";
  import { handleSignIn } from "$lib/firebaseAuth/index";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { url } from "$lib/store/routes";
  import {handleGoogleAuth, handleFacebookAuth } from "$lib/firebaseAuth/index";
  import { isLightMode } from "$lib/store/theme";
  import { screen } from "$lib/store/screen";
  export let referID;

  let email = "";
  let password = "";
  let username = ""
  let referral_code = referID ? referID : "";
  let aggreement = false;
  $: is_loading = false
  $: error = false

const handleAgreement = () => {
  if (aggreement) {
    aggreement = false;
  } else {
    aggreement = true;
  }
};

const handleSubmit = async() => {
  is_loading = true
  let responses = await handleSignIn(email, password, username, referral_code);
  if(responses){
    is_loading = responses.loading
    error = responses.error
    setTimeout(()=>{
      error = ""
    },4000)
    if(responses.responses.response_data){
      error = responses.responses.error
      let res = responses.responses.response_data
      localStorage.setItem("user", JSON.stringify(res.Token));
      handleAuthToken.set(res.Token)
      let hisex = res.wallet
      coin_list.set(hisex)
      hisex.forEach(element => {
        if(element.is_active){
          default_Wallet.set(element)
        }
     });
     profileStore.set(res.result)
     goto($url)
    }
  }
}
  
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
        : "opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px;"}  `}>
    <div class="dialog-head has-close">
      <img alt="logo" class="sc-bOtlzW QccSQ"
        src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1712679165/wager-06_fxek3t.png" />
    </div>
    <button
      on:click={() => goto($url)}
      class="sc-ieecCq fLASqZ close-icon dialog-close" >
      <Icon
        src={IoCloseSharp}
        size="18"
        color="rgb(255, 255, 255)"
        className="custom-icon" />
    </button>
    <div
      class="dialog-body no-style sc-zjkyB ipnwmW" style="z-index: 2; transform: none;" >
      <div class="welcome">
        <div class="msg1">BUILD THE BEST CRYPTO CASINO TOGETHER</div>
        <img src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1704543204/NIKE1_34_1_ji6ln1.png" alt="" />
      </div>
      <div
        class={$isLightMode
          ? "light-bg sc-dkPtRN jScFby scroll-view hide-bar sc-bjztik ceTZhf"
          : "sc-dkPtRN jScFby scroll-view hide-bar sc-bjztik ceTZhf"}
        style="transform: none;"
      >
        <div
          id="regist"
          class={$isLightMode
            ? "light-bg sc-fSDTwv cfNMkN"
            : "sc-fSDTwv cfNMkN"}
        >
          <div class="box">
            <div class="sc-ezbkAF kDuLvp input">
              <div class="input-label">Email Address</div>
              <div class={$isLightMode ? "light-input-control input-control": "input-control"}>
                <input type="text" bind:value={email} autocomplete="off" placeholder="Registered Email Address." />
              </div>
            </div>
            <div class="sc-ezbkAF kDuLvp input">
              <div class="input-label">Username</div>
              <div class={$isLightMode ? "light-input-control input-control": "input-control"}>
                <input type="text" bind:value={username} autocomplete="off" placeholder="Create Username" />
              </div>
            </div>
            <div class="sc-ezbkAF kDuLvp input">
              <div class="input-label">Login Password</div>
              <div class={$isLightMode ? "light-input-control input-control": "input-control"}>
                <input type="password" autocomplete="off" placeholder="Login Password"  bind:value={password} />
              </div>
            </div>
            <!-- {#if  isREf} -->
            <div class="sc-ezbkAF kDuLvp input">
              <div class="input-label">Referral/Promo Code (Optional)</div>
              <div class={$isLightMode ? "light-input-control input-control": "input-control"}>
                <input  type="text"  bind:value={referral_code}  autocomplete="off"placeholder="Referral/Promo Code" />
              </div>
            </div>
          </div>
          <hr />
          <div class="box">
            <div class="argument-check">
              <button on:click={handleAgreement} class="sc-iJKOTD kdCtGQ checkbox" >
                {#if aggreement}
                  <Icon src={AiOutlineCheck} size="16"color="rgb(67, 179, 9)"className="dot"  title="arror"/>
                {/if}
              </button>
              <div class="label">
                I agree with <a href="/help/agreement" class="argument"
                  >user agreement</a
                >, and confirm that I am at least 18 years old!
              </div>
            </div>
            <div class="buttons">
              <button
                on:click={() => goto(`${$url === "/" ? "" : $url}/?tab=login&modal=auth`)}
                class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-big signin"
              >
                <div class="button-inner">
                  <Icon src={RiSystemArrowDropLeftLine} size="25"  color="rgb(255, 255, 255)"className="custom-icon"  title="arror" />
                  <span>Sign in</span>
                </div>
              </button>
              <button disabled={!aggreement || !email || !password || !username || is_loading}  
              on:click={handleSubmit} type="submit"  class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big" >
                <div class="button-inner">
                  {#if is_loading}
                    <div class="center">
                      <div class="wave"></div>
                      <div class="wave"></div>
                      <div class="wave"></div>
                      <div class="wave"></div>
                      <div class="wave"></div>
                      <div class="wave"></div>
                      <div class="wave"></div>
                      <div class="wave"></div>
                      <div class="wave"></div>
                      <div class="wave"></div>
                    </div>
                  {:else}
                    Sign Up
                  {/if}
                </div>
              </button>
            </div>
          </div>

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
                  <path fill="#fa455e" d="M16 0a16 16 0 110 32 16 16 0 010-32z"></path>
                  <path fill="#fff"  d="M19.5 12.3c-.5-.5-1.1-.9-1.8-1a4.8 4.8 0 00-2-.2c-.9 0-1.7.4-2.3 1a5 5 0 00-2 4 5 5 0 004 4.8 5 5 0 001.6 0c.8 0 1.6-.3 2.2-.7.5-.4 1-.9 1.2-1.4l.3-.9v-.2h-4.4v-3.2h7.5l.2.1.1 1v1.2c0 .5 0 1-.2 1.6v-.1a7.4 7.4 0 01-1.4 3 7 7 0 01-3 2.4h-.1c-.6.2-1.2.4-1.9.4a8.8 8.8 0 01-1.9 0c-.8 0-1.5-.1-2.2-.4-.9-.4-1.6-.8-2.3-1.4-1-.8-1.9-2-2.4-3.2l-.5-1.9v-1.4-.1c0-.9.2-1.7.4-2.5.3-.7.7-1.4 1.2-2 1-1.4 2.5-2.5 4.3-3l1.5-.3a11.1 11.1 0 011.3 0 7.7 7.7 0 014.8 2l-.1.3-2 2h-.1z"
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
    </div>
  </div>
</div>

<style>

  .light-input-control {
    border: 1px solid rgb(233, 234, 242) !important;
    background-color: rgb(245, 246, 250) !important;
  }

  .dialog-head.has-close {
    margin-right: 3.75rem;
  }

  .dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
  }

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
    font-size: 1.5rem;
    font-weight: bold;
    width: 14.375rem;
    line-height: 1.2;
    margin-top: 1.25rem;
  }

  .ipnwmW .welcome img {
    height: 13.75rem;
    position: absolute;
    right: 0px;
    top: -1.875rem;
  }

  .kDuLvp {
    margin-top: 1rem;
  }

  .kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
  }

  .kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
  }

  .kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
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

  .ceTZhf {
    position: absolute;
    inset: 16.25rem 0px 0px;
    height: auto;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
  }

  .QccSQ {
    height: 4.7rem;
    margin: 2rem 0px;
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

  .lnrkkr .buttons .button:first-of-type {
    width: 15rem;
    flex: 0 0 auto;
    margin-right: 0.625rem;
  }

  .gEBngo.button {
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
  }

  .ceTZhf {
    position: absolute;
    inset: 16.25rem 0px 0px;
    height: auto;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
  }

  .kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    outline: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 200px 200px 100px #273642 inset;
    box-shadow: 200px 200px 100px #273642 inset;
    -webkit-text-fill-color: var(--autofill-color);
  }

  .cfNMkN .box {
    padding: 1.25rem;
  }

  .cfNMkN hr {
    margin: 0px;
    height: 1px;
    border: none;
    background-color: rgba(62, 72, 79, 0.3);
  }

  .cfNMkN .argument-check {
    display: flex;
    margin-bottom: 1.25rem;
  }

  .cfNMkN .argument-check .checkbox {
    margin-top: 0.25rem;
    margin-right: 0.375rem;
  }

  .kdCtGQ {
    width: 1rem;
    height: 1rem;
    flex: 0 0 auto;
    display: inline-block;
    vertical-align: middle;
    border-radius: 0.1875rem;
    box-sizing: border-box;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    font-size: 0.875rem;
    padding: 0.0625rem 0.0625rem 0.0625rem 0.125rem;
    color: transparent;
    position: relative;
    cursor: pointer;
  }

  .cfNMkN .buttons {
    display: flex;
    margin: 0px 1.25rem;
  }

  .cfNMkN .signin {
    color: rgb(245, 246, 247);
    background-color: rgb(49, 52, 60);
  }

  .cfNMkN .button {
    flex: 1 1 0%;
  }



 

  .cfNMkN .buttons .button:last-of-type {
    width: 15rem;
    flex: 0 0 auto;
    margin-left: 0.625rem;
  }


  .cfNMkN .signin {
    color: rgb(245, 246, 247);
    background-color: rgb(49, 52, 60);
  }

  /* ======================================================= mobile ========================================= */


  .dA-dCPD .welcome .msg1 {
    font-size: 1.5rem;
    font-weight: bold;
    width: 14.375rem;
    line-height: 1.2;
    margin-top: 1.25rem;
  }

  .dA-dCPD .welcome img {
    height: 12.75rem;
    position: absolute;
    right: 0px;
    top: -1.875rem;
  }

  .kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
    font-size: 12px;
  }

  .kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
  }

  .kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
    outline: none;
  }


  .jBwyNM .buttons .button:first-of-type {
    width: 11rem;
    flex: 0 0 auto;
    margin-right: 0.625rem;
  }


  .kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
  }

  .kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
  }


  .gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
  }

  .Vvcdr .argument-check .checkbox {
    margin-top: 0.25rem;
    margin-right: 0.375rem;
  }

  .Vvcdr .buttons .button:last-of-type {
    width: 11rem;
    flex: 0 0 auto;
    margin-left: 0.625rem;
  }

  @media screen and (max-width: 621px) {
    .dialog {
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      margin: 0px;
      border-radius: 0px;
    }
    .cfNMkN .buttons .button:last-of-type {
      width: 12rem;
      flex: 0 0 auto;
      margin-left: 0.625rem;
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
