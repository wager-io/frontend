<script>
import {default_Wallet} from "$lib/store/coins"
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import BsExclamationCircle from "svelte-icons-pack/bs/BsExclamationCircle";
import { payout } from "./store";
import { handleAuthToken } from "$lib/store/routes"
import { handleisLoggin } from "$lib/store/profile"
import { error_msg } from "./store/index"
import {  soundHandler, MinesEncription } from "$lib/games/mines/store/index"
import axios from "axios";
import cr from "./audio/click.wav"
import win from "./audio/mixkit-achievement-bell-600.wav"
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

let max_profit_tips = false
let Handlemax_profit_tips = ((e)=>{
    if(e === 1){
        max_profit_tips = true
    }else{
        max_profit_tips = false
    }
})

let wining_amount = '' ;
let bet_amount = 0.000027

$:{
    wining_amount = (bet_amount * $payout).toFixed(9)
}

const dive = (()=>{
    bet_amount = (bet_amount / 2).toFixed(9)
})

const mult = (()=>{
    bet_amount = (bet_amount * 2).toFixed(9)
})


function playSound(e) {
    if(e === 1){
        const audio = new Audio(cr);
        audio.volume = 0.05;
        audio.play();
    }else{
        const audio = new Audio(win);
        audio.volume = 0.05;
        audio.play();
    }
}


let jufy = false
const handleDspo = (()=>{
    jufy =! jufy
})

let vyfx = [
    {id:1, active: true},
    {id:2, active: false},
    {id:3, active: false},
    {id:4, active: false},
    {id:5, active: false},
    {id:6, active: false},
    {id:7, active: false},
    {id:8, active: false},
    {id:9, active: false},
    {id:10, active: false},
    {id:11, active: false},
    {id:12, active: false},
    {id:13, active: false},
    {id:14, active: false},
    {id:15, active: false},
    {id:16, active: false},
    {id:17, active: false},
    {id:18, active: false},
    {id:19, active: false},
    {id:20, active: false},
    {id:21, active: false},
    {id:22, active: false},
    {id:23, active: false},
    {id:24, active: false},
] 
let activeMIne = {}
vyfx.forEach(element => {
    if(element.active){
        activeMIne = element
    }
});

const handleActiveMines = ((els)=>{
    vyfx.forEach(element => {
    if(element.id === els.id){
        activeMIne = element
        element.active = true
        vyfx = vyfx
    }else{
        element.active = false
    }
});
handleDspo()
})

let uuyd = false
let none = 1
const handleDpojb = (async()=>{
    let data = {
        mines: activeMIne.id,
        bet_amount:  parseFloat(bet_amount),
        bet_token_img: $default_Wallet.coin_image, 
        bet_token_name: $default_Wallet.coin_name ,
        client_seed: $MinesEncription.client_seed,
        server_seed: $MinesEncription.server_seed,
        hash_seed: $MinesEncription.hash_seed,
        nonce: $MinesEncription.nonce + none
    }
    await axios.post(`${URL}/api/user/mine-game/mine-initialize`, {
        data
    },{
        headers:{
        Authorization: `Bearer ${$handleAuthToken}`
    }
    })
    .then((response)=>{
        console.log(response.data)
        none += 1
    })
    .catch((error)=>{
        console.log(error)
    })
})



</script>

<div class="game-control-panel" style="margin-top: 30px;">
    {#if $error_msg}
    <div class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
        </div>
    </div>
 {/if}   

    <div class="sc-juEPzu lgTgT">
        <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-gsFzgR fCSgTW game-coininput">
            <div class="input-label">
                <div class="sc-hmvnCu efWjNZ label">
                    <div>Amount</div>
                    <div class="max-profit">
                        <button on:mouseleave={()=>Handlemax_profit_tips(2)} on:mouseenter={()=>Handlemax_profit_tips(1)} class="sc-gsDKAQ hxODWG icon" >
                            <Icon src={BsExclamationCircle}  size="15"  color="rgb(67, 179, 9)"  title="" />
                        </button>
                        {#if max_profit_tips}
                        <div class="tip">
                            <span class="tit">Max Profit:&nbsp;</span>
                            <div class="sc-Galmp erPQzq coin notranslate">
                                <div class="amount">
                                    <span class="amount-str">5000.<span class="suffix">00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/if}
                    </div>
                </div>
                <div class="label-amount">0 USD</div>
            </div>
            <div class="input-control">
                <input type="number" bind:value={bet_amount}>
                {#if $handleisLoggin}
                    <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                {:else}
                    <img class="coin-icon" alt="" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400">
                {/if}
                <div class="sc-kDTinF bswIvI button-group">
                    <button on:click={()=> dive()}>/2</button>
                    <button on:click={()=> mult()}>x2</button>
                    <button class="sc-cAhXWc cMPLfC">
                        <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="min" />
                        <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="max" />
                    </button>
                </div>
            </div>
        </div>
        <div class="sc-ezbkAF gcQjQT input ">
            <div class="input-label">Mines</div>
            <div class="input-control">
                <div class="sc-jJoQJp gOHquD select is-open sc-bnOPBZ ewilmB">
                    <button on:click={handleDspo} class="select-trigger">
                        {activeMIne.id}
                        <div class="arrow ">
                        <Icon src={RiSystemArrowRightSLine}  size="20"  color="rgba(153, 164, 176, 0.6)"  />
                    </div>
                </button>
                {#if jufy}
                <div class="sc-hiCibw iVwWcQ select-options-wrap" style="opacity: 1; top: 100%; transform: none;">
                    <div class="sc-dkPtRN jScFby scroll-view select-options len-24">
                        {#each vyfx as io }
                        <button on:click={()=>handleActiveMines(io)} class={`select-option ${io.active ? "active" : ""}`}>{io.id}</button>
                        {/each}
                    </div>
                </div>
                {/if}
            </div>
        </div>
        </div>

    {#if uuyd}
        <div class="preview-wrap">
            <div class="sc-ezbkAF gcQjQT input ">
                <div class="input-label">Gems</div>
                <div class="input-control">
                    <input type="text" readonly="" value="24">
                </div>
            </div>
            <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp">
                <div class="input-label">Profit on Next Tile(1.03x)
                    <div class="label-amount">0 USD</div>
                </div>
                <div class="input-control">
                    <input type="text" readonly value="103.000000000">
                    <img class="coin-icon" alt="" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400">
                </div>
            </div>
            <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp">
                <div class="input-label">Total profit(1.00x)
                    <div class="label-amount">0 USD</div>
                </div>
                <div class="input-control">
                    <input type="text" readonly="" value="100.000000000">
                    <img class="coin-icon" alt="" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400">
                </div>
            </div>
            <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-big pick-button">
                <div class="button-inner">Pick a Tile Randomly</div>
            </button>
        </div>
        {/if}
 
        <button on:click={handleDpojb} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button">
            <div class="button-inner">Roll Now</div>
        </button>
    </div>
</div>

<style>
.input-control {
    border-color: transparent;
}
.ewilmB .select-trigger {
    background-color: transparent;
    width: 100%;
}
.input-control {
    background-color: rgba(49, 52, 60, 0.4);
}
.gcQjQT .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
}
.ewilmB {
    flex: 1 1 0%;
    height: 100%;
    margin: 0px -1.375rem;
}
.gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
}
.ewilmB .select-trigger {
    background-color: transparent;
}
.select-trigger {
    font-weight: bold;
}
.gOHquD .select-trigger {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0px 1.25rem;
    user-select: none;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}
.gOHquD .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 0px;
}
.gOHquD.is-open .select-options-wrap {
    pointer-events: auto;
}
.iVwWcQ {
    position: absolute;
    padding: 0.3125rem 0px;
    width: 100%;
    left: 0px;
    z-index: 2;
    pointer-events: none;
}
.iVwWcQ .select-options {
    border-radius: 1.25rem;
    padding: 0.125rem 0.375rem;
    background-color: rgb(23, 24, 27);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px 0px;
    height: auto;
    max-height: 16.25rem;
}
.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.iVwWcQ .select-option {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 0.625rem;
    font-size: 0.875rem;
    height: 2rem;
    width: 100%;
    margin: 0.25rem 0px;
    border: 1px solid transparent;
    border-radius: 1.0625rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
}
.iVwWcQ .select-option:hover{
    background-color: rgba(75, 75, 75, 0.874)(61, 54, 54);
}
.iVwWcQ .select-options:not(.len-1) > .active {
    border-color: rgba(91, 174, 28, 0.4);
}
.iVwWcQ .select-option {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 0.625rem;
    font-size: 0.875rem;
    height: 2rem;
    margin: 0.25rem 0px;
    border: 1px solid transparent;
    border-radius: 1.0625rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
}
.iVwWcQ .select-options:not(.len-1) > .active::after {
    content: "";
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    top: 50%;
    margin-top: -0.25rem;
    right: 0.625rem;
    background-color: rgb(67, 179, 9);
    box-shadow: rgba(91, 174, 28, 0.15) 0px 0px 0px 0.3125rem;
}
.gcQjQT {
    margin-top: 1rem;
}
.gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    font-size: 13.5px;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
 .input-control {
    border-color: transparent;
}
</style>

