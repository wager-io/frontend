<script>
import Gameview from "$lib/games/mines/gameview.svelte";
import "$lib/games/mines/styles/index.css";
import Controls from "$lib/games/mines/Controls.svelte";
import {onMount} from "svelte";
import axios from "axios";
import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen";
import { handleAuthToken } from "$lib/store/routes";
import Allbet from "$lib/games/mines/componets/allbet.svelte";
import Hotkey from "$lib/games/mines/componets/hotkey.svelte";
import LiveStats from "$lib/games/mines/componets/liveStats.svelte";
import SeedSetting from "$lib/games/mines/componets/seedSetting.svelte";
import Help from "$lib/games/mines/componets/help.svelte";
import { soundHandler, MinesEncription, BackMusicHandler} from "$lib/games/mines/store/index";
import { browser } from "$app/environment";
import background from "$lib/games/mines/audio/sadness.mp3";
import { ServerURl } from "$lib/backendUrl";
// import Mobile from "./mobile.svelte";
import Mybet from "$lib/games/mines/componets/mybet.svelte";
import Loader from "$lib/components/loader.svelte";
const URl = ServerURl()

$: is_loading = false
$: isHelp = false
$: is_hotkey = false
$: is_stats = false
$: isSeed = false
$: tabs = 1
const audio = new Audio(background);

onMount(()=>{
    const background = browser && JSON.parse(localStorage.getItem('mines-background-music'))
    const sound = browser && JSON.parse(localStorage.getItem('mines-sound'))
    BackMusicHandler.set(background)
    soundHandler.set(sound)
    if($BackMusicHandler){
        audio.volume = 1;
        audio.loop = true;
        audio.play();
    }
})

const handleMinesGameEncrypt = (async()=>{
    is_loading = true
    await axios.get(`${URl}/api/user/mine-game/mine-encrypt`,{
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${$handleAuthToken}`
        }
    })
    .then((res)=>{
        is_loading = false
        MinesEncription.set(res.data[0])
    })
    .catch((err)=>{
        is_loading = false
        console.log(err)
    })
})

onMount(()=>{
  $handleAuthToken && handleMinesGameEncrypt()
})


function playBackground() {
    if(!$BackMusicHandler){
        audio.volume = 1;
        audio.loop = true;
        audio.play();
        localStorage.setItem("mines-background-music", true);
        BackMusicHandler.set(true)
    }else{     
        audio.volume = 0;
        audio.pause();
        audio.currentTime = 0;
        localStorage.setItem("mines-background-music", false);
        BackMusicHandler.set(false)
    }
}

 
const handleSoundState = (()=>{
    if($soundHandler){
        soundHandler.set(0)
        localStorage.setItem("mines-sound", false);
    }else{
        soundHandler.set(1)
        localStorage.setItem("mines-sound", true);
    }
})

</script>
    
{#if is_hotkey}
    <Hotkey on:close={()=> is_hotkey = !is_hotkey} />
{/if}
    
{#if is_stats}
    <LiveStats on:close={()=> is_stats = !is_stats} />
{/if}

{#if isSeed}
    <SeedSetting on:close={()=>isSeed = !isSeed}/>
{/if}

{#if isHelp}
    <Help on:close={()=>  isHelp = !isHelp} />
{/if}

{#if !is_loading}
<div style={`${$is_open__chat && $is_open__Appp && $screen > 1579 || $is_open__chat && !$is_open__Appp && $screen > 1219 || !$is_open__chat && !$is_open__Appp && $screen > 1049 || !$is_open__chat && $is_open__Appp && $screen > 1214 ? "" : "display:none"}`} id="dice-main">
    <div id="game-Mines" class={`sc-haTkiu lmWKWf game-style0 sc-gDGHff gYWFhf ${$is_open__Appp && `is-open`} ${$is_open__chat && `is-chat`}`}>
        <div class="game-area">
            <div class="game-main">
                <Controls />
                <Gameview /> 
                <div class="game-actions">
                    <button on:click={()=> playBackground() } class={`action-item ${$BackMusicHandler ? "active" : ""} `}>
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href={`#${$BackMusicHandler ? "icon_MusicOn" : "icon_MusicOff"}`}></use>
                        </svg>
                    </button>
                    <button on:click={()=> handleSoundState()} class={`action-item ${$soundHandler ? "active" : ""} `}>
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href={`#${$soundHandler ? "icon_SoundOn" : "icon_SoundOff"}`}></use>
                        </svg>
                    </button>
                    <button on:click={()=> is_hotkey = !is_hotkey} class="action-item  ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_HotKeys"></use>
                        </svg>
                    </button>
                    <button on:click={()=>isSeed = !isSeed} class="action-item  " id="set_seed">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Seed"></use>
                        </svg>
                    </button>
                    <button on:click={()=> is_stats = !is_stats} class="action-item  ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_LiveStats"></use>
                        </svg>
                    </button>
                    <button on:click={()=>  isHelp = !isHelp} class="action-item  ">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                            <use xlink:href="#icon_Help"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="sc-cxpSdN kQfmQV tabs game-tabs len-3">
            <div class="tabs-navs">
                <button on:click={()=> tabs = 1} class={`tabs-nav ${tabs === 1 && "is-active"}`}>All Bets</button>
                <button on:click={()=> tabs = 2} class={`tabs-nav ${tabs === 2 && "is-active"}`}>My Bets</button>
                <button on:click={()=> tabs = 3} class={`tabs-nav ${tabs === 3 && "is-active"}`}>Contest</button>
                {#if tabs === 1}
                <div class="bg" style={`left: 0%; right: 66.6667%;`}></div>
                {:else if tabs === 2}
                <div class="bg" style="left: 33.3333%; right: 33.3333%;"></div>
                {:else if tabs === 3}
                <div class="bg" style="left: 66.6667%; right: 0%;"></div>
                {/if}
            </div>
            {#if tabs === 1}
                <Allbet />
            {:else if tabs === 2}
                <Mybet />
            {/if}
        </div>

        <div class="sc-knKHOI cFxmZX">
            <div class="intro-title">
            <p>Classic Dice</p>
            <div class="intro-tags">
                <p>Our Best Games</p>
                <p>BC Originals</p>
                <p>Recommended Games</p>
                <p>Dice</p>
            </div>
            </div>
            <div class="description">Classic Dice, a probability game established by blockchain hash value calculation and algorithm, provides more fun with bet and prediction, in which the closer the number rolled by players to the random number, the higher the probability winning.</div>
            <button class="intro-detail">
            Details
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Arrow"></use>
                </svg>
            </button>
        </div>
    </div>
</div>

<!-- <div style={`${$is_open__chat && $is_open__Appp && $screen < 1580 || $is_open__chat && !$is_open__Appp && $screen < 1220 || !$is_open__chat && !$is_open__Appp && $screen < 1050 || !$is_open__chat && $is_open__Appp && $screen < 1215  ? "" : "display:none"}`} class="dice-mobile">
    <Mobile />
</div> -->

{:else}
    <div class="uytutfyh">
        <Loader />
    </div>
{/if}
    
    
<style>
.uytutfyh{
    background-color: var(--background-color);
    width: 100%;
    height: 100vh;
}
.lmWKWf.is-open{
    padding-left: 50px;
}

.lmWKWf.is-chat{
    padding-right: 360px;
}
.lmWKWf.game-style0, .lmWKWf.game-style1, .lmWKWf.game-style-iframe {
    max-width: 1368px;
    margin: 0px auto;
    padding: 1.25rem 0.625rem;
}
.lmWKWf {
    min-height: 90vh;
}
.lmWKWf .action-item.active .icon {
    fill: rgb(67, 179, 9);
}
.cFxmZX .intro-detail > svg {
    font-size: 0.5625rem;
    margin-left: 1.125rem;
}
.lmWKWf.game-style0 .game-area, .lmWKWf.game-style1 .game-area, .lmWKWf.game-style-iframe .game-area {
    display: flex;
    flex-wrap: wrap;
}

.gYWFhf .game-area .game-main {
    min-height: 52.5rem;
}
.lmWKWf.game-style0 .game-main {
    padding-left: 330px;
    min-height: 47.5rem;
}
.lmWKWf.game-style0 .game-main, .lmWKWf.game-style1 .game-main, .lmWKWf.game-style-iframe .game-main {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    overflow: hidden;
}

.tdthuy {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 500px;
}

@keyframes monyy{
    10%{
        margin-right: -100px;
    }

    100%{
        margin-right: 100px;
    }
}

    .ePAxUv {
        margin-top: 4rem;
    }
    
    .kQfmQV .tabs-navs {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 2.25rem;
        position: relative;
        border-radius: 1.125rem;
        background-color: rgba(49, 52, 60, 0.7);
    }
    
    .lmWKWf .game-actions {
        display: flex;
        order: 10;
        -webkit-box-align: center;
        align-items: center;
        height: 4rem;
        position: relative;
    }
    
    .lmWKWf .game-actions::before {
        content: "";
        flex: 1 1 0%;
    }
    
    .lmWKWf .action-item {
        cursor: pointer;
        margin-right: 0.5rem;
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 50%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    
    .action-item:hover {
        background: rgba(203, 203, 203, 0.082);
    }
    
    .lmWKWf .game-actions::after {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        height: 1px;
        opacity: 0.3;
        background-color: rgb(49, 52, 60);
    }
    
    .lmWKWf .game-actions::before {
        content: "";
        flex: 1 1 0%;
    }
    
    .lmWKWf .game-actions {
        display: flex;
        order: 10;
        -webkit-box-align: center;
        align-items: center;
        height: 4rem;
        position: relative;
    }
    
    .lmWKWf .game-tabs {
        margin-top: 2.5rem;
    }
    
    .lmWKWf .game-tabs .tabs-navs {
        margin-bottom: 0.75rem;
        margin-left: 0.625rem;
        display: inline-flex;
    }
    
    .lmWKWf .game-tabs .tabs-navs .tabs-nav {
        width: 5.625rem;
    }
    
    .kQfmQV .tabs-nav.is-active {
        color: rgb(245, 246, 247);
        font-weight: bold;
    }
    
    .kQfmQV .tabs-nav {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex: 1 1 0%;
        height: 100%;
        cursor: pointer;
        white-space: nowrap;
        width: 100%;
        z-index: 1;
    }
    
    .cFxmZX {
        width: 100%;
        border-radius: 1.25rem;
        background-color: rgb(30, 32, 36);
        padding: 1.5rem 1.5rem 2rem;
        margin-top: 2rem;
    }
    .cFxmZX .intro-title {
        min-height: 5rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .cFxmZX .intro-title > p {
        font-size: 1rem;
        color: rgb(245, 246, 247);
        font-weight: 600;
        margin: 0px;
        white-space: nowrap;
    }
    .cFxmZX .intro-title .intro-tags {
        margin-left: 2.5rem;
        display: flex;
        flex-wrap: wrap;
    }
    .cFxmZX .intro-title .intro-tags > p {
        margin: 0px 1.125rem 0.3125rem 0px;
        padding: 0.5rem 1.25rem;
        border-radius: 1.125rem;
        background-color: rgb(43, 47, 54);
    }
    .cFxmZX .description {
        margin-top: 0.75rem;
        line-height: 1.25rem;
    }
    .cFxmZX .intro-detail {
        width: 6.75rem;
        height: 2.5rem;
        margin-top: 2rem;
        border-radius: 1.25rem;
        background-color: rgba(49, 52, 60, 0.6);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
</style>