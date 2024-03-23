<script>
import VipRule from "./vip_rule.svelte";
export let active_coin;
import { url } from "$lib/store/routes";
import { handleAuthToken } from "$lib/store/routes";
import { handleWithdraw } from "./hook"
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher()
$: viprule = false
let withdraw_address = ""
let withdraw_amount = (0).toFixed(8)
let is_loading = false
$: track = !withdraw_address || is_loading || withdraw_address.length < 10


const handleWithdrawEl = async()=>{
    is_loading = true
    const response = await handleWithdraw({withdraw_address, withdraw_amount,active_coin, auth:$handleAuthToken })
    console.log(response)
}

</script>

<div class="sc-dkPtRN jScFby scroll-view sc-fbWUsZ eDKSkl" id="withdraw">
    <div class="sc-hKumaY sc-hgkClB JghUg jFrhyu">
        <div class="sc-ezbkAF kDuLvp input ">
            <div class="input-label">
                <div style="flex: 1 1 0%;">Withdraw Currency</div>
                <a href="{$url === "/" ? "" : $url}/?tab=transaction&modal=withdraw&cur=btc">Record</a>
            </div>
            <button on:click={()=> dispatch("show")} class="sc-kszsFN evIEvq input-control">
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
        {#if active_coin.coin_name === "BTC" || active_coin.coin_name === "ETH"}
        <div class="sc-hRnpUl bUlDWK">
            <div class="sc-wkwDy blotCy">
                <div class="label">
                    <div>
                        Withdraw Address
                        <span class="cl-primary">(Note: Only {active_coin.coin_name === "BTC" ? "Bitcoin" : "Ethereum"} )</span>
                    </div>
                </div>
                <div class="box">
                    <div class="cont">
                        <input class="address" placeholder="Fill in carefully according to the specific currency" bind:value={withdraw_address} />
                    </div>
                </div>
            </div>
            <div class="sc-ezbkAF kDuLvp input sc-hrJsxi hjdfLc">
                <div class="input-label">
                    <div style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
                        <div>Withdraw amount</div>
                        <div style="font-size: 12px;">Min: {active_coin.coin_name === "BTC" ? 0.0008 :  0.014}  </div>
                    </div>
                </div>
                <div class="input-control">
                    <input type="number" bind:value={withdraw_amount}>
                    <div class="btn-wrap">
                        <button on:click={()=> withdraw_amount = (0).toFixed(8)}>Min</button>
                        <button on:click={()=> withdraw_amount = 0.25 * (parseFloat(active_coin.balance)).toFixed(8)}>25%</button>
                        <button on:click={()=> withdraw_amount = 0.5 * (parseFloat(active_coin.balance)).toFixed(8)}>50%</button>
                        <button on:click={()=> withdraw_amount = (parseFloat(active_coin.balance)).toFixed(8)}>Max</button>
                    </div>
                </div>
            </div>
            <div class="sc-dWbSDx jJMDVL">
                <div class="sc-bZSZLb dVsvjK disabled">
                    <div class="sc-iJKOTD kdCtGQ checkbox "></div>
                    <div class="jb-deduct">
                        <span class="txt">Unlock at VIP 22</span>
                        <button on:click={()=> viprule = true}>
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon icon-help">
                                <use xlink:href="#icon_Help"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="sc-eZKLwX jJQdnO">
                    <div class="sc-faIbUi bGuvOe">
                        Fee&nbsp;<b> {active_coin.coin_name === "BTC" ? 0.0001 : 0.000172} {active_coin.coin_name === "BTC" ? "BTC" : "ETH"}  </b>
                    </div>
                    <button on:click={handleWithdrawEl} disabled={track} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal sub-btn">
                        <div class="button-inner">{is_loading ? "Loading..." : "Confirm"}</div>
                    </button>
                </div>
                <div class="sc-fpyFWH jksbXu">For security purposes, large or suspicious withdrawal may take 1-6 hours for audit process. We appreciate your patience!</div>
            </div>
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

        <div class="share-wrap">Share<div class="sc-epFoly ftnlFA">
            <a href="https://www.facebook.com/sharer.php?u=https://nanogames.io/referral-code/0KLVA2KJR5Q6H1" target="_blank" class="share-item enabled">
                <img class="icon" alt="" src="https://static.nanogames.io/assets/share-2.f44906ec.svg">
            </a>
            <a href="https://t.me/share?url=https://nanogames.io/referral-code/0KLVA2KJR5Q6H1" target="_blank" class="share-item enabled">
                <img class="icon" alt="" src="https://static.nanogames.io/assets/share-4.4c6af5b2.svg">
            </a>
        </div>
    </div>
</div>
</div>

{#if viprule}
    <VipRule on:close={()=> viprule = false} />
{/if}


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
.jFrhyu > .input {
    margin-top: 0.5rem;
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
.evIEvq {
    cursor: pointer;
    width: 100%;
}
.wvKye {
    flex: 6 1 0%;
    line-height: 1.875rem;
}
.wvKye .wrap {
    padding-right: 1.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.evIEvq .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    display: inline-block;
    border-radius: 50%;
    vertical-align: top;
}
.wvKye .currency {
    color: rgb(245, 246, 247);
    font-size: 1.125rem;
}
.evIEvq .currency {
    flex: 1 1 auto;
    margin-left: 0.9375rem;
    font-size: 1.125rem;
    font-weight: 800;
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
.blotCy {
    margin-top: 1rem;
    width: 100%;
    font-size: 0.8125rem;
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
.hjdfLc .btn-wrap {
    width: 10.9375rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-radius: 2.25rem;
    overflow: hidden;
    margin-right: -0.625rem;
}
.hjdfLc .btn-wrap button {
    background-color: rgba(60, 64, 74, 0.6);
    height: 2.25rem;
    width: 2.6875rem;
    font-size: 0.75rem;
}
.hjdfLc .btn-wrap button:hover {
    background-color: rgba(71, 73, 79, 0.6);
}
.hjdfLc .btn-wrap button:first-child {
    padding-left: 0.1875rem;
}
.jJMDVL {
    margin-top: 1rem;
}
.dVsvjK {
    display: flex;
    margin: 1rem 0px 0.625rem 1rem;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.dVsvjK.disabled .checkbox {
    opacity: 0.5;
    cursor: not-allowed;
}
.dVsvjK .checkbox {
    margin-right: 0.3125rem;
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
.dVsvjK .jb-deduct {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.dVsvjK.disabled .txt {
    opacity: 0.5;
}
.dVsvjK button {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-left: 0.3125rem;
}
.dVsvjK .icon-help {
    width: 1.125rem;
    height: 1.125rem;
}
.dVsvjK .icon {
    fill: rgb(93, 160, 0);
}
.jJQdnO {
    margin: 0px 1rem 0.375rem;
    display: flex;
    flex-wrap: wrap;
}
.bGuvOe {
    margin-top: 0.625rem;
    text-align: center;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
}
.bGuvOe b {
    color: var(--primary-color);
    margin-right: 0.1875rem;
}
.bUlDWK .sub-btn {
    margin: 0.625rem auto;
}
.jksbXu {
    padding: 0.625rem 1rem;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    margin-top: 10px;
    font-size: 0.75rem;
}
.JghUg .share-wrap {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    margin: 0.625rem 0px;
}
.JghUg .share-wrap a {
    margin: 0px 0.625rem;
    display: inline-block;
}
.ftnlFA .share-item img {
    height: 1.5rem;
    width: auto;
}
.JghUg .share-wrap img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    vertical-align: top;
}
.evIEvq svg {
    width: 0.875rem;
    height: 0.875rem;
}
.buXZij {
    border: 1px solid rgb(45, 48, 53);
    border-radius: 1.25rem;
    padding: 0.9375rem;
    margin-top: 1rem;
}
</style>
