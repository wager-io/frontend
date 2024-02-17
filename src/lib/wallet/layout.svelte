<script>
import { createEventDispatcher } from "svelte";
import { default_Wallet } from "$lib/store/coins"
import Coins from "./coins.svelte";
import Deposit from "./deposit.svelte";
import Swap from "./swap.svelte";
import Vault from "./vault.svelte";
import Withdraw from "./withdraw.svelte";
import { screen } from "$lib/store/screen";

$: active_coin = $default_Wallet
$: show_coins = false
$: active_tab = "deposit"
const dispatch = createEventDispatcher()
const handleCoinSelect = ((event)=>{
   active_coin = event.detail
   show_coins = false
})

</script>


<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
   <div class="dialog " style=" { $screen >  650 ? "opacity: 1; width: 464px; height: 620px; margin-top: -310px; margin-left: -232px; transform: scale(1) translateZ(0px)" : "transform: scale(1) translateZ(0px)"};">
      <button on:click={()=> show_coins = false} class="dialog-back" style="opacity: 1; transform: none;">
         <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
            <use xlink:href="#icon_Arrow"></use>
         </svg>
      </button>
      <div class="dialog-head {show_coins ? "has-back": "has-close"}">
         <div class="dialog-title">{show_coins ? "Choose Coin" : "Wallet" }</div>
         {#if !show_coins}
         <div class="sc-jSYIrd fktpVO">
            <button>
               <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                  <use xlink:href="#icon_Transaction"></use>
               </svg>
               <span>Transactions</span>
            </button>
         </div>
         {/if}
      </div>
      <button on:click={()=> dispatch("close")} class="sc-ieecCq fLASqZ close-icon dialog-close">
         <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
            <use xlink:href="#icon_Close"></use>
         </svg>
      </button>
      {#if show_coins}
         <Coins on:select={handleCoinSelect}/>
      {:else}
         <div class="dialog-body no-style " style="z-index: 2; transform: none;">
            <div id="wallet" class="sc-kMyqmI hioXRL">
               <div class="sc-hctura eeygvl">
                  <button on:click={()=> active_tab = "deposit"} class="tab {active_tab === "deposit" ? "active" : ""}">
                     <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Wallet"></use>
                     </svg>
                     <div class="title">Deposit</div>
                  </button>
                  <button on:click={()=> active_tab = "withdraw"} class="tab {active_tab === "withdraw" ? "active" : ""}">
                     <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_WithDraw"></use>
                     </svg>
                     <div class="title">Withdraw</div>
                  </button>
                  <button on:click={()=> active_tab = "swap"} class="tab {active_tab === "swap" ? "active" : ""}">
                     <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Swap"></use>
                     </svg>
                     <div class="title">WGSwap</div>
                  </button>
                  <button on:click={()=> active_tab = "vault"} class="tab {active_tab === "vault" ? "active" : ""}">
                     <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Vault"></use>
                     </svg>
                     <div class="title">Vault Pro</div>
                  </button>
               </div>
               {#if active_tab === "deposit"}
                  <Deposit active_coin={active_coin} on:show={()=> show_coins = true}/>
               {:else if active_tab === "withdraw"}
                  <Withdraw active_coin={active_coin} on:show={()=> show_coins = true}/>
               {:else if active_tab === "swap"}
                  <Swap on:show={()=> show_coins = true}/>
               {:else}
                  <Vault />
               {/if}
            </div>
         </div>
      {/if}

   </div>
</div>

<style>

.fktpVO {
    display: flex;
}
.fktpVO .icon {
    display: inline-block;
    vertical-align: top;
    width: 1.125rem;
    height: 1.125rem;
    margin: 0px 0.5rem 0px 0px;
}
.fktpVO span {
    color: rgba(153, 164, 176, 0.6);
    font-size: 0.875rem;
}
.no-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
}
.hioXRL  {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    color: rgba(153, 164, 176, 0.6);
}
.eeygvl .icon {
   fill: rgba(153, 164, 176, 0.8);
}

 @media only screen and (max-width: 650px){
   .eeygvl {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      background-color: rgb(30, 32, 36);
      border-radius: 1.25rem;
      order: 1;
      flex: 0 0 auto;
      font-size: 11px;
   }
   .eeygvl .title {
      font-size: 11px;
    margin-top: 0.3125rem;
}
 }

 @media only screen and (min-width: 650px){
   .eeygvl {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      background-color: rgb(30, 32, 36);
      border-radius: 1.25rem;
      margin: 0.25rem 0.625rem 0.625rem;
      order: 0;
      flex: 0 0 auto;
      font-size: 12px;
   }
   .eeygvl .icon {
      width: 1.375rem;
      height: 1.375rem;
      margin-top: 0.625rem;
   }
   .eeygvl .title {
    margin-top: 0.3125rem;
}
 }

.eeygvl .tab:hover {
   background: rgba(219, 219, 219, 0.064);
}
.eeygvl .tab.active {
    background-color: var(--primary-color);
    color: rgb(255, 255, 255);
}
.eeygvl .tab {
    position: relative;
    z-index: 2;
    height: 5rem;
    width: 5rem;
    padding: 0.625rem 0px;
    text-align: center;
    cursor: pointer;
    line-height: 1;
    border-radius: 1.25rem;
}


@media only screen and (max-width: 370px){
   .eeygvl .tab {
      position: relative;
      z-index: 2;
      height: 4rem;
      width: 4rem;
      padding: 0.625rem 0px;
      text-align: center;
      cursor: pointer;
      line-height: 1;
      border-radius: 1.25rem;
   }
}

.eeygvl .tab.active .icon {
    fill: rgb(255, 255, 255);
}


.dialog-back {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
}
.dialog-back svg {
    transform: rotate(180deg);
    width: 16px;
    height: 16px;
}
.hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
}
</style>