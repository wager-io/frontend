<script>
import {onMount} from "svelte"
import { handleDepositHook, handleFetchPendingOrder, handleDepositRefresh, handleDepositExpire} from "./hook";
import { handleAuthToken } from "$lib/store/routes";
import { currencyRates } from "$lib/store/currency";
import { coin_list } from "$lib/store/coins"
export let active_coin;
$: deposit_address = ''
let is_loading = true;
let preOrder = "";
import { createEventDispatcher } from "svelte";
import Loader from "../components/loader.svelte";
const dispatch = createEventDispatcher()
let deposit_amount = ''
$: convertToUSD = ""
$: active_network = ""
let networks = [
    {id:1, network: "ERC20", active: true},
    {id:2, network: "TRC20", active: false},
    {id:3, network: "BEP20", active: false},
]

networks.forEach(element => {
    if(element.active){
        active_network = element
    }
});

const handleNetworks = ((event)=>{
    networks.forEach(element => {
        if(element.network === event.network){
            element.active = true
            active_network = event
        }
        else{
            element.active = false
        }
    });
    networks = networks
})

const handleDeposit = (async(data)=>{
    is_loading = true
    const datas = {active_network,deposit_amount, active_coin }
    let response = await handleDepositHook(datas, $handleAuthToken)
    if(response.response.message === "success"){
        deposit_address = response.response.data.pay_address
        is_loading = response.is_loading
    }
})


const handleDepositInput = (async(e)=>{
    deposit_amount = e.target.value
    if(active_coin.coin_name === "BTC"){
        convertToUSD =  $currencyRates.btc * deposit_amount
    }
    if(active_coin.coin_name === "ETH"){
        convertToUSD =  $currencyRates.eth * deposit_amount
    }
})
$: hours = 0
$: minutes = 0
$: seconds = 0
onMount(async()=>{
   preOrder =  await handleFetchPendingOrder($handleAuthToken)
   is_loading = preOrder.is_loading
   if(preOrder.response.length > 0){
    deposit_address = preOrder.response[0].pay_address
     deposit_amount = preOrder.response[0].amount
    if(preOrder.response.crypto === "BTC"){
            convertToUSD =  $currencyRates.btc * deposit_amount
        }
    if(preOrder.response[0].crypto === "ETH"){
        convertToUSD =  $currencyRates.eth * deposit_amount
    }
    $coin_list.forEach(element => {
        if(element.coin_name === preOrder.response[0].crypto){
            active_coin = element
        }
    });
    let expire = setInterval(async()=>{
            let countDownDate = new Date(preOrder.response[0].expire_in).getTime();
            let now = new Date().getTime();
            let distance = countDownDate - now;
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if(hours <= 0 && minutes <= 0 && minutes <= 0 && seconds <= 0){
                clearInterval(expire)
              let res = await handleDepositExpire($handleAuthToken)
              deposit_address = ""
            }
        }, 1000)
   }
})


const handleDepostRefresh = async()=>{
    is_loading = true
    let response = await handleDepositRefresh($handleAuthToken)
    is_loading = response.is_loading
}


let address_msg = ''
function handleCopyCode(event) {
    navigator.clipboard.writeText(event)
    .then(() => {
        address_msg = 'Copied'
    setTimeout(()=>{
        address_msg = ("")
    },4000)
    })
}

</script>

<div class="sc-dkPtRN jScFby scroll-view sc-fbWUsZ eDKSkl" id="deposit">
    <div class="sc-hKumaY JghUg">
        <div id="deposit" class="sc-bOTDDd fXGySL">
            <div class="sc-ezbkAF kDuLvp input ">
                <div class="input-label">
                    <div style="flex: 1 1 0%;">Deposit Currency</div>
                    <a href="/transactions/deposit/">Record</a>
                </div>
                <button disabled={deposit_address} on:click={()=> dispatch("show")} class="sc-kszsFN evIEvq input-control">
                    <div class="sc-cBIieI wvKye">
                        <div class="wrap">
                            <img class="coin-icon" alt="" src="{active_coin.coin_image}">
                            <span class="currency">{active_coin.coin_name}</span>
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Arrow"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="sc-kqnjJL kdWfvE">
                        <div class="wrap">
                            <div class="tit">Balance : </div>
                            <div class="amount">{(parseFloat(active_coin.balance)).toFixed(6)}</div>
                        </div>
                    </div>
                </button>
            </div>
            {#if is_loading}
            <div style="margin-top: 200px;">
                <Loader />
            </div>
                {:else}
                {#if active_coin.coin_name === "BTC" || active_coin.coin_name === "ETH"}
                <div class="sc-dpAhYB emReoO">
                    {#if active_coin.coin_name === "ETH"}
                        <div class="sc-fbWUsZ uShSF">
                            <div class="label">Choose Network</div>
                            <div class="btn-wrap">
                                <div class="scroll-box">
                                    {#each networks as network}
                                    {#if deposit_address}
                                        <div class="btn-space">
                                            <button class="{network.network === "ERC20" ? "active" : ""}" disabled={true}>{network.network}</button>
                                        </div>
                                    {:else}
                                        <div class="btn-space">
                                            <button on:click={()=>handleNetworks(network)} class="{network.active ? "active" : ""}" disabled={network.active}>{network.network}</button>
                                        </div>
                                    {/if}
                                    {/each}
                                </div>
                            </div>
                        </div>
                    {/if}
                
                    <div class="sc-wkwDy blotCy">
                        <div class="label">
                            {#if deposit_address}
                            <div>Deposit Amount&nbsp;(Copy <span class="cl-primary"> exact amount </span> )</div>
                            {:else}
                            <div>Deposit Amount</div>
                            {/if}
                            <div class="notranslate">{convertToUSD ? (parseFloat(convertToUSD)).toLocaleString() : 0} USD</div>
                        </div>
                        <div class="box">
                            <div class="cont">
                                <input class="address"  type="number" placeholder="Deposit Amount" readonly={deposit_address ? true : false}  value="{deposit_address ? (parseFloat(deposit_amount)).toFixed(9) : ""}" on:keyup={((e)=> handleDepositInput(e))} >
                                <button class="sc-iqseJM cBmlor button button-normal copy-button">
                                    <button on:click={()=> handleCopyCode(deposit_amount)} class="button-inner">
                                        {#if deposit_address}
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                                <use xlink:href="#icon_Copy"></use>
                                            </svg>
                                        {/if}
                                    </button>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style="color: green; font-size:13px">{address_msg}</div>
                    {#if deposit_address}
                    <div class="sc-wkwDy blotCy">
                        <div class="label">
                            <div>Deposit Address &nbsp;( Note: Only <span class="cl-primary"> {active_coin.coin_name === "BTC" ? "Bitcoin" : "Ethereum"} </span> )</div>
                            {#if (hours <= 0 && minutes <= 0 && minutes <= 0 && seconds <= 0)}
                            <div class="notranslate">Expired</div>
                            {:else}
                            <div class="notranslate">{`${ typeof hours === "number"  && hours}hr : ${ typeof minutes === "number" && minutes}m : ${typeof seconds === "number" && seconds}s`}</div>
                            {/if}
                        </div>
                     
                        <div class="box">
                            <div class="cont">
                                <input class="address"  type="text" placeholder="Deposit Address" readonly="{true}" value={deposit_address}>
                                <button class="sc-iqseJM cBmlor button button-normal copy-button">
                                    <button on:click={()=> handleCopyCode(deposit_address)} class="button-inner">   
                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                            <use xlink:href="#icon_Copy"></use>
                                        </svg>
                                    </button>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/if}
                
    
                    {#if deposit_address}
                        <div class="sc-gDGHff jeroAP">
                            <img src="https://nanogames.io/api/game/support/qrcode/320/?text={deposit_address}" alt="qr.png">
                        </div>
                    {/if}
    
                    {#if active_coin.coin_name === "BTC" && deposit_address}
                        <div class="sc-ywFzA egWBux">
                            <p>
                                <span class="cl-primary">NOTICE:</span>
                                Send only BTC to this address. Coins will be deposited after 2 network confirmations.
                            </p>
                        </div>
                    {:else if active_coin.coin_name === "ETH" && deposit_address}
                    <div class="sc-bQFuvY emZYRV">
                        <p>
                            <span class="cl-primary">NOTICE:</span> 
                            Send only ETH to this deposit address. Coins will be deposited automatically after 6 network confirmations. Smart contract addresses are not supported(Contact us).</p>
                    </div>
                    {/if}
                </div>
            {:else if active_coin.coin_name === "WGF"}
                <div class="sc-faIbUi buXZij">
                    <div class="title">About WGF</div>
                    <div class="content">
                        <p>WGF is the proprietary game currency (in-house game currency) of WAGER.SERVICES platform. It can be acquired by VIP level-up, lucky spin and other event rewards.</p>
                        <p>In addition to being used for games,WGF can also be used to boost daily Rakeback and substituted for withdrawal fees.</p>
                        <p>More amazing WGF functions coming soon ..Stay Tuned!</p>
                    </div>
                </div>
            {:else}
                <div class="sc-faIbUi buXZij">
                    <div class="title">About WGD</div>
                    <div class="content">
                        <p>WGD (Wager Dollar) is the proprietary game currency (in-house game currency) of WAGER.SERVICES platform. It can be acquired by VIP level-up, affiliate and other event rewards.</p>
                        <p>In addition to being used for games,WGD can also be used to boost daily Rakeback and substituted for withdrawal fees.</p>
                        <p>More amazing WGD functions coming soon ..Stay Tuned!</p>
                    </div>
                </div>
            {/if}
        {/if}
        </div>
       {#if !deposit_address}
            <button on:click={handleDeposit} disabled={is_loading} style="margin:40px 0" class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                <div class="button-inner">{is_loading ? "Loading..." : "Proceed"}</div>
            </button>
            {:else}
            <button on:click={handleDepostRefresh} disabled={is_loading} style="margin:40px 0" class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                <div class="button-inner">{is_loading ? "Loading..." : "Refresh page"}</div>
            </button>
        {/if}
    </div>
</div>

<style>
.eDKSkl {
    flex: 1 1 auto;
    padding: 0.625rem 0.625rem 1.875rem;
    position: relative;
}
.JghUg {
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
    position: relative;
    padding: 0.625rem;
}
.fXGySL {
    margin-top: -0.5rem;
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
.evIEvq.input-control {
    border-radius: 1.25rem;
    height: 4.5rem;
}
.input-control {
    min-height: 3.5rem;
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
.evIEvq {
    cursor: pointer;
     width: 100%;
}
.wvKye {
    flex: 6 1 0%;
    line-height: 1.875rem;
}

@media only screen and (min-width: 650px){
    .wvKye .wrap {
        padding-right: 1.25rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
}

@media only screen and (max-width: 650px){
    .wvKye .wrap {
        padding-right: .25rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
}

.evIEvq .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    display: inline-block;
    vertical-align: top;
    border-radius: 50%;
}
.wvKye .currency {
    color: rgb(245, 246, 247);
    font-size: 1.125rem;
}
.evIEvq .currency {
    flex: 0 1 auto;
    margin-left: 0.9375rem;
    font-size: 1.125rem;
    font-weight: 800;
    margin-right: 100px;
    padding-left: px;
}
.wvKye svg {
    margin-top: 0.1875rem;
}
.evIEvq svg {
    width: 0.875rem;
    height: 0.875rem;
}
.hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
}
.kdWfvE {
    border-left: 1px solid rgb(45, 48, 53);
    line-height: 0.9375rem;
    flex: 4 1 0%;
}
.kdWfvE .wrap {
    padding-left: 1.25rem;
}
.kdWfvE .amount {
    color: rgb(245, 246, 247);
    margin-top: 0.3125rem;
}
.evIEvq .amount {
    font-size: 0.9375rem;
    font-weight: 800;
}
.evIEvq.input-control {
    border-radius: 1.25rem;
    height: 4.5rem;
}
.blotCy {
    margin-top: 1rem;
    width: 100%;
    font-size: 0.8125rem;
}
.blotCy .label {
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.blotCy .box {
    background-color: rgba(45, 48, 53, 0.5);
    border: 1px solid rgb(45, 48, 53);
    padding: 0.3125rem 1.25rem;
    width: 100%;
    border-radius: 1.25rem;
    min-height: 3.5rem;
    display: flex;
    flex-direction: column;
}
.blotCy .cont {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 auto;
}
.blotCy .cont .address {
    flex: 1 1 auto;
    word-break: break-all;
    color: rgb(245, 246, 247);
}
.blotCy .address {
    border: none;
    background-color: transparent;
    padding: 0.625rem 0px;
}
.blotCy .cont button {
    width: 2.5rem;
    height: 1.875rem;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.jeroAP {
    width: 11.125rem;
    height: 11.125rem;
    margin: 1rem auto;
    padding: 0.75rem;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(45, 48, 53);
    animation: 1.5s linear 0s infinite normal none running placeholderShimmer;
}
.jeroAP img {
    width: 100%;
    border-radius: 0.625rem;
    image-rendering: pixelated;
}
.egWBux , .emZYRV{
    padding: 0rem 1rem;
    border-radius: 1.25rem;
    font-size: 0.75rem;
    border: 1px solid rgb(45, 48, 53);
}
.cl-primary {
    color: var(--primary-color);
}
.buXZij {
    border: 1px solid rgb(45, 48, 53);
    border-radius: 1.25rem;
    padding: 0.9375rem;
    margin-top: 1rem;
}
.buXZij .title {
    font-size: 1rem;
    color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 1.875rem;
    line-height: 1.875rem;
}
.uShSF {
    margin-top: 1rem;
}
.uShSF .label {
    margin: 0px 1rem 0.375rem 0.75rem;
}
.uShSF .btn-wrap {
    display: flex;
}
.uShSF .btn-wrap .scroll-box {
    width: 100px;
    display: flex;
    flex: 1 1 auto;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    position: relative;
    height: 2.1875rem;
}
.uShSF .btn-wrap .btn-space {
    padding: 0px 0.1875rem;
    scroll-snap-align: start;
}
.uShSF .btn-wrap button {
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    padding: 0px 1.25rem;
    height: 2.125rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 0.875rem;
}
.uShSF .btn-wrap .active {
    color: rgb(255, 255, 255);
    border: 1px solid rgb(67, 179, 9);
    font-weight: 800;
    background-color: rgba(93, 160, 0, 0.15);
}

</style>
