<script>
export let sender
export let reciever
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher()

let sender_amount = 0
let receiver_amount = 0

</script>

<div class="sc-dkPtRN jScFby scroll-view sc-bhnkmi geJgoF">
    <div class="sc-bjztik fxFgHv">
        <div class="sc-bePbDJ kLHhQw">
            <!-- <div class="sc-cxpSdN kQfmQV tabs">
                <div class="tabs-navs">
                    <button class="tabs-nav is-active">Swap</button>
                    <button disabled class="tabs-nav">From Altcoin</button> 
                    <div class="bg" style="left: 0%; right: 50%;"></div>
                </div>
            </div> -->
            <div class="sc-dkPtRN jScFby scroll-view sc-bhnkmi geJgoF" id="swap">
                <div class="sc-eqUgKp eZLJPD">
                    <div class="sc-ezbkAF kDuLvp input sc-bTfYFJ dETeez">
                        <div class="input-label">
                            <div class="sc-iMrobD dueMAu label-pre">You Send</div>
                            <div class="label-suf">
                                <button class="min">Min: <span>0.00022181</span></button>
                                <div class="max error ">Balance: <span>{sender.balance}</span></div>
                            </div>
                        </div>
                        <div class="input-control">
                            <input type="number" placeholder="Enter amount" bind:value={sender_amount}>
                            <button on:click={()=> sender_amount = sender.balance}>Max</button>
                            <button on:click={()=> dispatch("senderControl")} style="background: none;" class="sc-kHOZwM lkOmCH">
                                <img class="coin-icon" alt="" src={sender.coin_image}>
                                <span class="currency">{sender.coin_name}</span>
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                    <use xlink:href="#icon_Arrow"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="sc-ywFzA UsBMq">1   {sender.coin_name} ≈ 44434.2837 {reciever.coin_name}</div>
                    <div class="icon-exchange">
                        <button on:click={()=> [sender, reciever] = [reciever, sender]}>
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Arrow"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="sc-ezbkAF kDuLvp input sc-bTfYFJ dETeez">
                        <div class="input-label">
                            <div class="sc-iMrobD dueMAu label-pre">You get Approximately
                                <svg class="sc-pVTFL kfvEla cut-time" viewBox="25 25 50 50">
                                    <circle cx="50" cy="50" r="20" fill="none" stroke-width="8" stroke-linecap="round" stroke-dasharray="126, 126" style="stroke-dashoffset: -8;"></circle>
                                </svg>
                            </div>
                            <a href="/transactions/bill/BCD/Swap">Record</a>
                        </div>
                        <div class="input-control">
                            <input type="number" placeholder="Enter amount" bind:value={receiver_amount}>
                            <button on:click={()=> dispatch("receiverControl")} style="background: none;" class="sc-kHOZwM lkOmCH">
                                <img class="coin-icon" alt="" src="{reciever.coin_image}">
                                <span class="currency">{reciever.coin_name}</span>
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                    <use xlink:href="#icon_Arrow"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="tips">
                        <div class="item">Estimated Time* 
                            <span>Seconds</span>
                        </div>
                        <div class="item">Swap fee: 
                            <span>0.00000000</span> 
                            {sender.coin_name}
                        </div>
                    </div>
                    <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal sub-btn" disabled="">
                        <div class="button-inner">Swap Now</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.geJgoF {
    flex: 1 1 auto;
    position: relative;
}
.fxFgHv {
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
    position: relative;
}

@media only screen and (min-width: 650px){
    .geJgoF {
        padding: 0.625rem 0.625rem 1.875rem;
    }
    .fxFgHv {
        padding: 0.625rem;
    }
}
/* .geJgoF .tabs-navs {
    width: 17.5rem;
    margin: 0.625rem auto;
}
.kQfmQV .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background-color: rgba(49, 52, 60, 0.7);
} */
.kLHhQw #swap {
    padding: 0px;
}
.eZLJPD {
    position: relative;
    font-size: 0.75rem;
}
.dETeez {
    cursor: pointer;
}
.kDuLvp {
    margin-top: 1rem;
}
.eZLJPD .icon-exchange {
    text-align: center;
    margin: 0px auto -0.75rem;
}
.eZLJPD .icon-exchange svg {
    transform: rotate(90deg);
    fill: rgba(153, 164, 176, 0.6);
}
.dETeez .input-control input {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px;
    font-size: 0.9375rem;
}
.dETeez .input-control button {
    border-radius: 1rem;
    padding: 0.5rem 1.125rem;
    background-color: rgb(60, 64, 75);
    margin-right: 0.625rem;
}
.lkOmCH {
    padding: 0.3125rem 0.625rem 0.3125rem 1.25rem;
    width: 9.0625rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-left: 1px solid rgb(45, 48, 53);
}
.dETeez .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    display: inline-block;
    vertical-align: top;
    border-radius: 50%;
}
.dETeez .currency {
    flex: 1 1 auto;
    margin-left: 0.9375rem;
    font-size: 1rem;
    font-weight: 800;
    color: rgb(245, 246, 247);
}
.dETeez svg {
    fill: rgb(85, 91, 101);
    width: 0.875rem;
    height: 0.875rem;
}
.hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
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
.eZLJPD .label-pre {
    flex: 1 1 auto;
}
.eZLJPD .label-suf {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.eZLJPD .label-suf .min {
    margin-right: 0.625rem;
}
.eZLJPD .label-suf button {
    font-size: 0.75rem;
}
.eZLJPD .label-suf .min span {
    color: rgb(255, 255, 255);
}
.eZLJPD .label-suf .max.error span {
    color: rgb(218, 30, 40);
}
.eZLJPD .tips {
    margin: 1.25rem 0px 0.625rem;
    padding: 0.5rem 1.25rem;
    border-radius: 1.25rem;
    border: 1px solid rgba(45, 48, 53, 0.5);
}
.eZLJPD .tips span {
    color: rgb(255, 255, 255);
}
.fxFgHv .sub-btn {
    width: 20.5rem;
    margin: 1.25rem auto 1.875rem;
}
.dETeez .input-control {
    height: 4.5rem;
}

</style>