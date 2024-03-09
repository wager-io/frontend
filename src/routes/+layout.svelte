<script>
/** @type {import('./$types').PageLoad} */
export let data;
import { routes, url } from "$lib/store/routes";
import { handleAuthToken } from "$lib/store/routes";
import { goto } from "$app/navigation";
import { currencyRates } from "$lib/store/currency";
import { browser } from '$app/environment';
import { page } from '$app/stores';

$: routes.set(data)
$: url.set($page.url.pathname)
$: urlString =  ($page.url.href);
$: paramString = urlString.split('?')[1];
$: queryString = new URLSearchParams(paramString);
$: seaser = []
$: tab = "";
$:{
    seaser = []
    if(paramString){
        for (let pair of queryString.entries()) {
            seaser.push(pair[1])
        }
    }
    tab = seaser[0]
}

$: {
    if($handleAuthToken && tab === "register" && tab === "login"){
        goto($url)
    }
}

import "../styles/global.css"
import Icon from 'svelte-icons-pack/Icon.svelte';
import HiSolidMenu from "svelte-icons-pack/hi/HiSolidMenu";
import { UserProfileEl } from "$lib/index";
const { handleprofile ,getExchangeEth, getExchangeBTC} = UserProfileEl()
import { theme } from "$lib/store/_theme";
import {showChatCounter, chatCounter} from "$lib/store/chat-counter"

setTimeout(()=>{
    if(data.preloaed === null){
            window.location.href = ("/")
    }
},3000)

import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen"
import Navbar from "$lib/navbar.svelte";
import ProfileAuth from "$lib/profleAuth/index.svelte";
import { profileStore, app_Loading } from "$lib/store/profile"
import SideBar from "$lib/sideBar.svelte";
import Footer from "$lib/footer.svelte";
import Menubar from "$lib/mobile/menu/menubar.svelte";
import ChatSide from "../lib/chat-room/index.svelte"
import Notification from "../lib/notification/index.svelte";
import { handleNestedRoute } from "$lib/store/nested_routes";
import { handleisLoggin, handleisLoading } from "$lib/store/profile"
import "../styles/errors/error.css";
import { onMount } from "svelte";
import Closesidebar from "$lib/closesidebar.svelte";
import Loader from "$lib/components/loader.svelte";
import LayoutEl from "$lib/wallet/layout.svelte"
import Login from "$lib/modals/auth/login/login.svelte";
import Register from "$lib/modals/auth/register/register.svelte";
import Profile from "$lib/modals/profile/profile.svelte";
import Transaction from "$lib/modals/transaction/transaction.svelte";
// import Layout from "../lib/deposit/layout.svelte";

$: is_login = false
let isOpenSide = true
let isChatRoom = 0
$: isMenu = false
let sideDetection = 0

onMount(async()=>{
    await handleprofile($handleAuthToken)
  let eth = await getExchangeEth()
   let btc = await getExchangeBTC()
   currencyRates.set({eth, btc})
})
    
$:{
    data.token &&  handleAuthToken.set(data.token)
    if($handleAuthToken){
        handleisLoading.set(false)
        handleisLoggin.set(true)
        if($profileStore?.email){
            handleisLoading.set(false)
            handleisLoggin.set(true)
        }else{
            handleisLoading.set(true)
        }
    }else{
        handleisLoading.set(false)
    }
}
    
let is_mobile = true
const handleMainMenu = (() => {
    if (isOpenSide) {
        isOpenSide = false
        is_open__Appp.set(false)
        sideDetection = 76
    } 
    else {
        if (browser && window.innerWidth > 650 && window.innerWidth < 1000) {
            isOpenSide = true
            is_open__Appp.set(true)
            sideDetection = 76
        }else{
            isOpenSide = true
            is_open__Appp.set(true)
            sideDetection = 240
        }
    }
})
    
let ens = browser && window.innerWidth
browser && window.addEventListener("resize", () => {
    ens = (window.innerWidth)
    screen.set(ens)
    if (browser && window.innerWidth < 650) {
        is_mobile = true
        isOpenSide = false
    }
    else {
        is_mobile = false
    }
})
    
onMount(()=>{
    ens = browser && window.innerWidth
    screen.set(ens)
    if($screen > 1240){
        is_open__Appp.set(true)
        isOpenSide = true
        is_mobile = false
    }
    else if($screen < 1240 && $screen > 650){
        is_open__Appp.set(false)
        isOpenSide = false
        is_mobile = false
    }
})
    
let isnotification = false
const handleChatroom = ((e) => {
    if (isChatRoom) {
        isnotification = false
        isChatRoom = 0
        is_open__chat.set(false)
        showChatCounter.set(true)
        chatCounter.set(0)
    } else {
        isChatRoom = 360
        showChatCounter.set(false)
        is_open__chat.set(true)
        if (e === "notification") {
            isnotification = true
        } else {
            isnotification = false
        }
    }
})

$: console.log(tab)

</script>

<div data-theme={$theme} class="app">

{#if paramString && tab === "login"}
    <Login/>
{/if}

{#if paramString && tab === "register"}
    <Register />
{/if}

{#if paramString && tab === "profile"}
    <Profile user={seaser[1]}/>
{/if}

{#if paramString && tab === "wallet"}
    <LayoutEl tab={seaser[1]} />
{/if}

{#if paramString && tab === "transaction"}
    <Transaction tab={seaser[1]} currency={seaser[2]} bill={seaser[3]}/>
{/if}


{#if $profileStore && $profileStore.born === '' && $handleNestedRoute !== "/login/info" }
    <ProfileAuth />
{/if}

{#if (isOpenSide && !is_mobile) }
    <div id="main" style={`width:${isOpenSide ? 240 : 76}px`}>
        <SideBar routes={data} styls={isOpenSide} />
    </div>
{:else if (!isOpenSide && !is_mobile) }
    <div id="main" style={`width:${isOpenSide ? 240 : 76}px`}>
        <Closesidebar routes={data} styls={isOpenSide} />
    </div>
{/if}
    
<div id="main">
    <div id="menu">
        <button style={`left:${isOpenSide ? 224 : 60}px`} on:click={handleMainMenu}  class="menu">
            <Icon src={HiSolidMenu}  size="18"   color="#fff"  />
        </button>
    </div>
</div>

{#if $app_Loading}
<div class="preloading">
    <div class="gyuys">
        <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1698030795/typpe_3_cf83xp.png">
    </div>
</div>
{/if}
    
<!-- ======================  mobile menu bar ================= -->
{#if (isMenu)}
    <div class="menubar">
        <Menubar  on:menu={()=> isMenu = false}   />
    </div>
{/if}
    
{#if !$app_Loading}
    <div id="header" class={`sc-gVkuDy gAvMHL ${isOpenSide ? `side-unfold ${isChatRoom ? "right-chat" : ""}` : `side-fold ${isChatRoom ? "right-chat" : ""}`} `}>
        <Navbar on:handleChatRoom={handleChatroom} on:login={()=> is_login = true}  on:handleMenuMobile={()=> isMenu = true }/>
    </div>
{/if}

{#if !$app_Loading}
    <main class="sc-lhMiDA ePAxUv">
        <slot></slot>
    </main>
{/if}
    
<!-- <div id="right-bar" style={ is_mobile ? "" : `width: ${isChatRoom ? ((ens - sideDetection) - 360) : ens - sideDetection}px;`} >
    <header>
        <Navbar on:handleMenuMobile={handleMenu} on:handleChatRoom={handleChatroom} styles={isOpenSide} chatroom={isChatRoom} />
    </header>
    {#if $handleisLoading}
    <div style="height: 700px">
        <Loader />
    </div>

    {:else}
        <main class="sc-lhMiDA ePAxUv">
            <slot></slot>
        </main>
        <footer>
            <Footer />
        </footer>
    {/if}
</div> -->
    
    {#if (isChatRoom)}
        {#if isnotification}
            <Notification />
        {:else}
            <ChatSide on:closeChat={handleChatroom} />
        {/if}
    {/if}

</div>

<style>

#header.side-unfold{
    padding-left: 240px;
}

#header.side-unfold{
    padding-left: 240px;
}

#header.side-fold.right-chat{
    padding-right: 340px;
}
#header.side-unfold.right-chat{
    padding-right: 340px;
}
.preloading{
    background-color: var(--background-color);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 367898978920;
}
.preloading .gyuys{
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
}
.gyuys img{
    position: absolute;
    display: flex;
    align-items: center;
    top: 35%;
    align-content: center;
    width: 170px;
    animation: move 10s infinite;
    opacity: 0.8;
}

@keyframes move{
    10%{
        width: 10%;
        transition: all 4.5s ease;
    }
    100%{
        width: 20%;
        transition: all 4.5s ease;
    }
}

.gAvMHL {
    height: 4rem;
    position: fixed;
    z-index: 101;
    left: 0px;
    top: 0px;
    right: 0px;
    background-color: rgb(36, 38, 43);
    transition: all 0.2s linear 0s;
    padding-left: 72px;
}
.gAvMHL::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -0.75rem;
    width: 100%;
    height: 0.75rem;
    background-image: linear-gradient(rgb(17, 20, 21), rgba(36, 38, 43, 0));
    opacity: 0.25;
}
</style>