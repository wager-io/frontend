<script>
  import { goto } from "$app/navigation";
  import { handleAuthToken } from "$lib/store/routes"
  import { default_Wallet, coin_list } from "$lib/store/coins"
  import { profileStore } from "$lib/store/profile"
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiOutlineCheck from "svelte-icons-pack/ai/AiOutlineCheck";
  import RiSystemArrowDropLeftLine from "svelte-icons-pack/ri/RiSystemArrowDropLeftLine";
  import { handleSignIn } from "$lib/firebaseAuth/index";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { url } from "$lib/store/routes";
  import { isLightMode } from "$lib/store/theme";
  export let referID;

  let email = "";
  let password = "";
  let username = ""
  let referral_code = referID ? referID : "";
  let aggreement = false;
  $: is_loading = false
  $: error = false
  $: track = !aggreement || !email || !password || !username || is_loading

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


</script>

<div id="regist" class={$isLightMode ? "light-bg sc-fSDTwv cfNMkN" : "sc-fSDTwv cfNMkN"}>
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
      on:click={() => goto(`${$url === "/" ? "" : $url}/?tab=auth&modal=login`)}
      class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-big signin"
    >
      <div class="button-inner">
        <Icon src={RiSystemArrowDropLeftLine} size="25"  color="rgb(255, 255, 255)"className="custom-icon"  title="arror" />
        <span>Sign in</span>
      </div>
    </button>
    <button disabled={track}  
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

</div>

<style>

  .light-input-control {
    border: 1px solid rgb(233, 234, 242) !important;
    background-color: rgb(245, 246, 250) !important;
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

  .jBwyNM .buttons .button:first-of-type {
    width: 11rem;
    flex: 0 0 auto;
    margin-right: 0.625rem;
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
  }

</style>
