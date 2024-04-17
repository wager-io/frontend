<script>
import { goto } from "$app/navigation";
import AiFillEye from "svelte-icons-pack/ai/AiFillEye";
import Icon from "svelte-icons-pack/Icon.svelte";
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import { handleLogin } from "$lib/firebaseAuth/index";
import { handleGoogleAuth, handleFacebookAuth } from "$lib/firebaseAuth/index";
import { browser } from "$app/environment";
import { handleAuthToken } from "$lib/store/routes"
import { profileStore } from "$lib/store/profile"
import { default_Wallet, coin_list } from "$lib/store/coins"
import { onMount } from "svelte";
import { current_route, url } from "$lib/store/routes";
// import Forget from "../forget/+page.svelte";
import { isLightMode } from "$lib/store/theme";
import { screen } from "$lib/store/screen";

let email = "";
let password = "";
$: is_loading = false
$: errors = ''

const handleSubmit = async() => { 
  is_loading = true
  const respo = await handleLogin(email, password);
  is_loading = respo.loading
  errors = respo.error
  setTimeout(()=>{
    errors = ""
  },4000)
  if(respo.responses){
    errors = respo.responses.error
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

};

let is_mobile = false;
onMount(() => {
  if (browser && window.innerWidth < 650) {
    is_mobile = true;
  } else {
    is_mobile = false;
  }
});

  let is_forget_password = false;
  const handleForgetPassword = () => {
    const currentPath = browser && window.location.pathname;
    if (currentPath === "/forget") {
      window.history.replaceState(null, "", $current_route);
      is_forget_password = false;
    } else {
      current_route.set(currentPath);
      is_forget_password = true;
      window.history.replaceState(null, "forget", "/forget");
    }
  };


const handleLoginWithGoogle = (async()=>{
  is_loading = true
  const respo = await handleGoogleAuth()
  is_loading = respo.loading
  errors = respo.error
  setTimeout(()=>{
    errors = ""
  },4000)
  if(respo.responses){
    errors = respo.responses.error
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
               
<div id="login"  class={$isLightMode ? "light-bg sc-czvZiG lnrkkr" :"sc-czvZiG lnrkkr"}>
  <div class="box">
    <div class="sc-ezbkAF kDuLvp input">
      <div class="input-label">Email Address</div>
      <div class={$isLightMode ? "light-input-control input-control": "input-control"}>
        <input
          bind:value={email} type="text" autocomplete="off"  placeholder="Email" />
      </div>
    </div>
    <div class="sc-ezbkAF kDuLvp input sc-bYoBSM ixxYMF">
      <div class="input-label">
        <div style="flex: 1 1 0%;">Login Password</div>
        <a class="forget" href="{$url === "/" ? "" : $url}/?tab=auth&modal=forget">Forgot password?</a>
      </div>
      <div class={$isLightMode ? "light-input-control input-control": "input-control"}>
        <input bind:value={password} type="password"
          autocomplete="off" placeholder="Login Password"  />
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon" >
          <use xlink:href="#icon_View"></use>
        </svg>
      </div>
    </div>
  </div>
  <hr />
  <div class="buttons">
    <button disabled={is_loading || !email || !password} type="submit" on:click={handleSubmit}
      class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-big" >
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
          Sign in
        {/if}
      </div>
    </button>
    <button on:click={() => goto(`${$url === "/" ? "" : $url}/?tab=auth&modal=register`)}
      class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-big signup">
      <div class="button-inner">
        <span>Sign up</span>
        <Icon src={RiSystemArrowRightSLine} size="18"
          color=" rgb(245, 246, 247)" className="sc-gsDKAQ hxODWG icon" title="arror"  />
      </div>
    </button>
  </div>
</div>




<style>

  .light-input-control{
    border: 1px solid rgb(233, 234, 242) !important;
    background-color: rgb(245, 246, 250) !important;
  }

  .lnrkkr .box {
    padding: 1.5rem 1.25rem;
  }

  .lnrkkr .box > .input:first-of-type {
    margin-top: 0.25rem;
  }

  .lnrkkr {
    background-color: rgb(30, 32, 36);
  }

  .lnrkkr .buttons {
    padding: 1.25rem 2.5rem;
    display: flex;
  }



  .lnrkkr hr {
    height: 1px;
    margin: 0px;
    border: none;
    background-color: rgba(62, 72, 79, 0.3);
  }

  .lnrkkr .buttons {
    padding: 1.25rem 2.5rem;
    display: flex;
  }

  .lnrkkr .buttons .button:first-of-type {
    flex: 0 0 auto;
    margin-right: 0.625rem;
  }

  .lnrkkr .signup {
    color: rgb(245, 246, 247);
    background-color: rgb(49, 52, 60);
  }

  .lnrkkr .button {
    flex: 1 1 0%;
  }

  .gEBngo.button {
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
  }


  input:-webkit-autofill {
    -webkit-box-shadow: 200px 200px 100px #273642 inset;
    box-shadow: 200px 200px 100px #273642 inset;
    -webkit-text-fill-color: var(--autofill-color);
  }

  .icon {
    width: 1rem;
    height: 1rem;
    margin-left: 0.375rem;
    opacity: 0.6;
    fill: rgb(245, 246, 247);
  }


  .jBwyNM .buttons .button:first-of-type {
    width: 11rem;
    flex: 0 0 auto;
    margin-right: 0.625rem;
  }

  @media screen and (min-width: 650px) {
    .lnrkkr .buttons .button-big {
      width: 15rem;
    }
  }

  @media screen and (max-width: 650px) {
    .lnrkkr .buttons .button-big {
      width: 12rem;
    }
  }

</style>
