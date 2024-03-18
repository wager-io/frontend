<script>
  import "../styles/navbar/mobileNavbar.css";
  import AiOutlineSearch from "svelte-icons-pack/ai/AiOutlineSearch";
  import IoWallet from "svelte-icons-pack/io/IoWallet";
  import AiOutlineMenuUnfold from "svelte-icons-pack/ai/AiOutlineMenuUnfold";
  import "../styles/navbar/navbar.css";
  import FiMenu from "svelte-icons-pack/fi/FiMenu";
  import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import { browser } from "$app/environment";
  import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen"
  import { url } from "$lib/store/routes";
  import { default_Wallet } from "$lib/store/coins";
  import { profileStore, handleisLoggin } from "$lib/store/profile";
  import { createEventDispatcher } from "svelte";
  import {chatCounter, showChatCounter} from "$lib/store/chat-counter"
  import { goto } from "$app/navigation";
  import Coins from "./profilecomponent/main/coins.svelte";
  import Navprofile from "./profilecomponent/main/navprofile.svelte";
  const dispatch = createEventDispatcher();

  const handleChat = (e) => {
    dispatch("handleChatRoom", e);
  };

  const handleMenu = () => {
    dispatch("handleMenuMobile");
  };
  
  $: newScreen = 0
  $: {
    if($is_open__Appp && !$is_open__chat){
      newScreen = $screen - 240
    }
    else if(!$is_open__Appp && $is_open__chat){
      newScreen = $screen - 432
    }
    else if(!$is_open__Appp && !$is_open__chat){
      newScreen = $screen - 72
    }
    else if($is_open__Appp && $is_open__chat){
      newScreen = $screen - 600
    }
  }
  
  $: image = $profileStore.profile_image
  $: coinsEL = false
  $: profileNAV = false
  
</script>

  <div id="main-screen" class="header-wrap">
    <div class="header">
      <div class="sc-hGnimi ftyLxH left">
        <div class="sc-iukxot jivBdD logo-pc">
          {#if newScreen < 580}
            <img alt="logo" style="border-radius: 12px; width:33px"
            class="coin-icon"
            src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1698030795/typpe_3_cf83xp.png" />
          {:else if newScreen < 900 && $handleisLoggin}
          <img alt="logo" style="border-radius: 12px; width:33px"
          class="coin-icon"
            src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1698030795/typpe_3_cf83xp.png" />
          {:else}
            <img alt="logo" class="logo-com" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1698030795/typpe_3_cf83xp.png">
          {/if}
          </div>
          {#if newScreen > 700 }
            <div class="sc-jtXEFf jsyNKG search-pc">
              <div class="search-input-wrap-pc">
                <div class="sc-kTLmzF dwaOxj">
                  <Icon src={AiOutlineSearch} size="18" color={ "rgba(153, 164, 176, 0.8)"} className="custom-icon" />
                  <input placeholder="Game name | Provider | Category Tag" value="">
                </div>
              </div>
            </div>
            {:else}
            <div class="sc-eldieg elBGFt big-enter">
              <button>
                <Icon src={AiOutlineSearch} size="18" color={ "rgba(153, 164, 176, 0.8)"} className="custom-icon" />
              </button>
          </div>
          {/if}
        </div>
        {#if !$handleisLoggin}
        <div class="login-in">
            <button on:click={()=> goto(`${$url === "/" ? "" : $url}/?tab=login&modal=auth`)}>Sign in</button>
            <button on:click={()=> goto(`${$url === "/" ? "" : $url}/?tab=register&modal=auth`)} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
              <div class="button-inner">Sign up</div>
            </button>
          <button id="chat" class="sc-eicpiI PGOpB">
            <button on:click={handleChat} class={`chat-btn ${$is_open__chat && "active"}`}>
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Chat"></use></svg>
              <div class="sc-fotOHu gGSOuF badge ">26</div>
            </button>
          </button>
        </div>
        {:else}
        <div class="sc-DtmNo euzHLF right">
          <div class="sc-gjNHFA juteh wallet-enter">
            <div class="sc-fmciRz LQlWw">
              <button on:click={()=> coinsEL =! coinsEL} class="sc-iFMAIt icGouR">
                <div class="sc-eXlEPa boxpOO">
                  <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                  <span class="currency">{$default_Wallet.coin_name}</span>
                  <Icon src={RiSystemArrowDownSLine} size="18" color={ "rgba(153, 164, 176, 0.8)"} className="custom-icon" /> 
                </div>
                <div class="sc-Galmp erPQzq coin notranslate balance">
                  <div class="amount">
                    <span class="amount-str">{(parseFloat($default_Wallet.balance)).toFixed(6)}</span>
                  </div>
                </div>
              </button>
              {#if coinsEL}
                <Coins on:coinDefault={()=> coinsEL =! coinsEL} />
              {/if}
              <button on:click={()=> goto(`${$url === "/" ? "" : $url}/?tab=wallet&modal=deposit`)} class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal sc-iqVWFU fGPfpD">
                <div class="button-inner">
                  <Icon src={IoWallet} size="18" color="#ffff" className="custom-icon" />
                  <span>Wallet</span>
                </div>
              </button>
            </div>
          </div>
          <div class="sc-gnnDb fWkueO">
            <div class="user-wrap">
              <a href={`${$url === "/" ? "" : $url}/?tab=profile&id=${$profileStore.user_id && $profileStore.user_id}`}>
                {#if image.color}
                  <div class="avatar " style={`background-color:${image.color}`}>{$profileStore.username.charAt(0)}</div>
                {:else}
                  <img class="avatar " alt="" src={image.image ? image.image : ""}>
                {/if}
              </a>
              <button on:mouseenter={()=> profileNAV = true} on:mouseleave={()=> profileNAV = false} class="svg">
                <Icon src={AiOutlineMenuUnfold} size="23" color={"rgba(153, 164, 176, 0.8)"} className="custom-icon" />
                  {#if profileNAV}
                    <Navprofile />
                  {/if}
              </button>
            </div>
          </div>
          <!-- <button class="sc-dcgwPl bbYXSv private-chat">
            <Icon src={HiSolidMail} size="23" color={"rgba(153, 164, 176, 0.8)"} className="custom-icon" />
          </button>
          <button id="notice" class="sc-ksHpcM kultDa notice">
            <div class="notice-btn ">
              <Icon src={IoNotificationsSharp} size="23" color={"rgba(153, 164, 176, 0.8)"} className="custom-icon" />
              <div class="sc-fotOHu gGSOuF badge ">1</div>
            </div>
          </button> -->
          <button id="chat" class="sc-eicpiI PGOpB">
            <button on:click={handleChat} class="chat-btn ">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Chat"></use>
              </svg>
              {#if $showChatCounter && $chatCounter}
                  <div class="sc-fotOHu gGSOuF badge">{$chatCounter}</div>
              {/if}
            </button>
          </button>
        </div>
        {/if}
    </div>
  </div>
  

    <div id="mobile-screen" class="sc-hJhJFJ jVgBRe" style="transform: translate3d(0px, 0%, 0px);">
      <div class="login-top top">
        <button on:click={handleMenu} class="sc-bQtKYq cUTdQJ">
          <span class="open-wrap">
            <Icon src={FiMenu}  size="12"   color="#fff"  />
          </span>
        </button>
          <div class="header-login">
            {#if !$handleisLoggin}
            <button style="margin-right: 15px;" on:click={()=> goto(`${$url === "/" ? "" : $url}/?tab=login&modal=auth`)}>Sign in</button>
            <button on:click={()=> goto(`${$url === "/" ? "" : $url}/?tab=register&modal=auth`)} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
              <div class="button-inner">Sign up</div>
            </button>
            {:else}
            <div class="sc-gjNHFA jlttqa wallet-enter">
              <button class="sc-fmciRz LQlWw">
                <button on:click={()=> coinsEL =! coinsEL} class="sc-iFMAIt icGouR">
                  <div class="sc-eXlEPa boxpOO">
                    <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                    <span class="currency">{$default_Wallet.coin_name}</span>
                    <Icon src={RiSystemArrowDownSLine} size="18" color={ "rgba(153, 164, 176, 0.8)"} className="custom-icon" /> 
                  </div>
                  <div class="sc-Galmp erPQzq coin notranslate balance">
                    <div class="amount">
                      <span class="amount-str">{(parseFloat($default_Wallet.balance)).toFixed(6)}</span>
                    </div>
                  </div>
                </button>
                <button on:click={()=> goto(`${$url === "/" ? "" : $url}/?tab=deposit&modal=wallet`)} class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-normal sc-iqVWFU fGPfpD">
                  <div class="button-inner">
                    {#if $screen > 500}
                      <Icon src={IoWallet} size="18" color="#ffff" className="custom-icon" />
                    {/if}
                    <span>Wallet</span>
                  </div>
                </button>
              </button>
              {#if coinsEL}
                <Coins on:coinDefault={()=> coinsEL =! coinsEL}/>
              {/if}
            </div>
             <div class="sc-gnnDb fhlUmF">
                  <div  class="user-wrap">
                    <a style="font-size:13px; color:#fff" href={`${$url === "/" ? "" : $url}/?tab=profile&id=${$profileStore.user_id && $profileStore.user_id}`}>
                      {#if image.color}
                         <div class="avatar " style={`background-color:${image.color};`}>{$profileStore.username.charAt(0)}</div>
                      {:else}
                        <img class="avatar " alt="" src={image.image ? image.image : ""}>
                      {/if}
                    </a>
                    <button on:click={()=> profileNAV =! profileNAV} class="svg">
                      <Icon src={AiOutlineMenuUnfold} size="16" color={"rgba(153, 164, 176, 0.8)"} className="custom-icon" />
                    </button>
                  </div>
                  {#if profileNAV}
                    <Navprofile />
                  {/if}
                </div>
                {/if}
          </div>
        </div>
        <div class="bottom">
            <div class="left"></div>
            <div class="right">
              <button on:click={handleChat} id="chat" class="sc-eicpiI PGOpB chat-btn">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Chat"></use></svg>
                {#if $showChatCounter && $chatCounter}
                  <div class="sc-fotOHu gGSOuF badge">{$chatCounter}</div>
                {/if}
              </button>
            </div>
        </div>
    </div>

  <style>
  .ftyLxH .big-enter {
      margin-left: 0%;
      flex: 0 0 auto;
  }
  .elBGFt.big-enter {
      -webkit-box-pack: end;
      justify-content: flex-end;
  }
  
  .jVgBRe .bottom::after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -0.75rem;
      width: 100%;
      height: 0.75rem;
      background-image: linear-gradient(rgb(30, 32, 36), rgba(36, 38, 43, 0));
      opacity: 0.25;
  }
  
  .header-wrap {
      width: 100%;
      height: 100%;
      position: relative;
  }
  .header-wrap .header {
      transition: all 0.5s ease 0s;
      max-width: 112.5rem;
      padding: 0px 0.75rem;
      margin: 0px auto;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      height: 100%;
  }
  .header-wrap .header .left {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      flex: 1 1 0%;
  }
  
  .jivBdD {
      height: 100%;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      cursor: pointer;
      width: auto;
      padding-left: 10px;
  }
  
  .ftyLxH .search-pc {
      margin-left: 4%;
      max-width: 32.5rem;
  }
  .jsyNKG {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      overflow: hidden;
      flex: 1 1 0%;
  }
  .jsyNKG .search-input-wrap-pc {
      width: 100%;
      height: 2.875rem;
      border-radius: 1.4375rem;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      border: 1px solid transparent;
      position: relative;
  }
  .dwaOxj {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      background-color: rgb(28, 30, 34);
      border-radius: 1.4375rem;
      padding: 0px 0.875rem;
      height: 100%;
      width: 100%;
      border: 1px solid transparent;
  }
  .dwaOxj input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      margin-left: 0.375rem;
      position: relative;
      color: rgb(255, 255, 255);
      font-weight: bold;
  }
  .login-in {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: end;
      justify-content: flex-end;
  }
   .login-in > button {
      margin: 0px 0.5rem 0px 0px;
      padding: 1rem;
      cursor: pointer;
      color: rgba(153, 164, 176, 0.8);
      font-weight: bold;
  }
  
  .login-in .button {
    color: #ffff;
  }
  
  .login-in > button:hover {
      color: #ffff;
  }
  
  .PGOpB {
      cursor: pointer;
  }
  .PGOpB .chat-btn {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      position: relative;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
  }
  .PGOpB .chat-btn.active {
      background-image: linear-gradient(to right, #ad860556, rgba(85, 89, 102, 0.4) 55%, rgba(85, 89, 102, 0.4));
  }
  .gGSOuF {
      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      height: 1.25rem;
      line-height: 1.25rem;
      min-width: 1.25rem;
      padding: 0px 0.375rem;
      border-radius: 0.625rem;
      text-align: center;
  }
  .right {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: end;
      justify-content: flex-end;
  }
  @media only screen and (max-width:700px){
    .right {
      gap: 5px;
    }
    .fGPfpD {
      height: 100%;
      width: 4rem;
      font-size: 12px;
    }
  .jVgBRe .login-top .header-login button {
      text-align: center;
      color: #ffff;
      font-weight: bold;
  }
  }


  .euzHLF .wallet-enter {
      margin-right: 24px;
  }
  .juteh {
      position: relative;
      cursor: pointer;
  }
  .jlttqa {
      cursor: pointer;
  }
  
  .boxpOO {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 800;
    padding: 2px;
  }
  .boxpOO .coin-icon {
      width: 1rem;
      height: 1rem;
  }
  .boxpOO .currency {
      margin: 0px 0.625rem 0px 0.4375rem;
  }
  .icGouR .balance .amount {
      color: rgb(245, 246, 247);
      font-weight: 800;
  }
  .erPQzq .amount-str {
      width: 7em;
      display: inline-block;
  }
  
  .jVgBRe .login-top .logo-wrap img {
      width: 3rem;
  }
  .cUTdQJ {
      overflow: visible;
      border-radius: 50%;
      border: 1px solid rgba(80, 91, 102, 0.6);
  }
  .cUTdQJ .open-wrap {
      width: 2rem;
      height: 2rem;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      background: rgba(23, 22, 22, 0.52);
      border-radius: 50%;
  }
  
  .jVgBRe .login-top .header-login {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      margin-left: auto;
  }
  
  
  @media screen and (min-width: 1080px) and (max-width: 1440px){
    .euzHLF .wallet-enter {
      margin-right: 6px;
  }
  }
  
  @media screen and (min-width: 650px){
    .fGPfpD {
      height: 100%;
      width: 7.25rem;
    }
    .jVgBRe .login-top .header-login button {
      width: 6.25rem;
      height: 2.5rem;
  }
  .jVgBRe .login-top .header-login button {
      width: 6.25rem;
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      color: #ffff;
      font-weight: bold;
  }
  
  }
  
  </style>
  