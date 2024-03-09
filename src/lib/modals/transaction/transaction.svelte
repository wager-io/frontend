<script>
    import { goto } from "$app/navigation";
    import { url } from "$lib/store/routes";
    import Currency from "./currency.svelte";
    import { screen } from "$lib/store/screen";
    import Bill from "./bill/bill.svelte";
    import Withdraw from "./withdraw/withdraw.svelte";
    import Deposit from "./deposit/deposit.svelte";
    export let tab;
    export let currency;
    export let bill;
    let active_coin = ""
    $: correnncies = false;
    let coins = [
        {coin_name: "All", coin_img: "All currencies", active: currency === "All" ? true : false},
        {coin_name: "btc", coin_img: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400", active: currency === "btc" ? true : false},
        {coin_name: "eth", coin_img: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628", active: currency === "eth" ? true : false},
        {coin_name: "wgf", coin_img: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1698010748/wft_z3ouah.png", active: currency === "wgf" ? true : false},
        {coin_name: "wgd", coin_img: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1698011384/type_1_w_hqvuex.png", active: currency === "wgd" ? true : false}
    ]
    coins.forEach(element => {
        if(element.active){
            active_coin = element
        }
    });
    
    const handleOption = ((event)=>{
        active_coin = event.detail
        goto(`${$url === "/" ? "" : $url}/?tab=transaction&modal=${tab}&cur=${active_coin.coin_name}`)
    });

</script>
    
    <div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
        <div class="dialog " style="{$screen >  650 ? "opacity: 1; width: 782px; height: 631px; margin-top: -315.5px; margin-left: -391px; transform: scale(1) translateZ(0px)" : "transform: scale(1) translateZ(0px)"};">
            
            <button on:click={()=> history.back()} class="dialog-back" style="opacity: 1; transform: none;">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Arrow"></use>
                </svg>
            </button>

            <div class="dialog-head has-back has-close">
                <div class="dialog-title">Transactions</div>
            </div>
    
            <button on:click={()=> goto($url)} class="sc-ieecCq fLASqZ close-icon dialog-close">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Close"></use>
                </svg>
            </button>
            
            <div class="dialog-body no-style " style="z-index: 2; transform: none;">
                <div class="sc-cxpSdN kQfmQV tabs sc-eQxpLG cpezgQ" id="transactions">
                    <div class="tabs-navs">
                        <button on:click={(()=> goto(`${$url === "/" ? "" : $url}/?tab=transaction&modal=deposit&cur=${currency}`))} class={`tabs-nav ${tab === "deposit" ? "is-active" : ""} `}>Deposit</button>
                        <button on:click={(()=> goto(`${$url === "/" ? "" : $url}/?tab=transaction&modal=withdraw&cur=${currency}`))} class={`tabs-nav ${tab === "withdraw" ? "is-active" : ""} `}>Withdraw</button>
                        <button on:click={(()=> goto(`${$url === "/" ? "" : $url}/?tab=transaction&modal=bill&cur=${currency}&bill=all`))} class={`tabs-nav ${tab === "bill" ? "is-active" : ""} `}>Bill</button>
                        {#if  tab === "deposit"}
                            <div class="bg" style={"left: 0%; right: 65%;"}></div>
                        {:else if  tab === "withdraw"}
                            <div class="bg" style={"left: 33%; right: 32%;"}></div>
                        {:else if  tab === "bill"}
                            <div class="bg" style={"left: 65%; right: 0%;"}></div>
                        {/if}
                    </div>
                    <div class="tabs-view">
                        {#if tab === "bill"}
                            <Bill is_active={bill} currency={currency}/>
                        {/if}
                        {#if tab === "withdraw"}
                            <Withdraw />
                        {/if}
                        {#if tab === "deposit"}
                            <Deposit />
                        {/if}
                        <div class="sc-feYDSs XkKRx table-bot-page">
                            <button on:mouseenter={()=> correnncies = true } on:mouseleave={()=> correnncies = false} class="sc-jJoQJp gOHquD select  sc-eMHfQD hDizvn clvyMv">
                                <div class="select-trigger">
                                    {#if active_coin.coin_name === "All"}
                                        <div class="currency-label">
                                            <div class="coin-icon coin-div">
                                                <span>{active_coin.coin_name}</span>
                                            </div>
                                        {active_coin.coin_img}
                                        </div>
                                        {:else}
                                        <div class="currency-label" style="text-transform: uppercase;">
                                            <img class="coin-icon" alt="" src={active_coin.coin_img}>
                                            {active_coin.coin_name}
                                         </div>
                                    {/if}
                                    <div class="arrow top">
                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                            <use xlink:href="#icon_Arrow"></use>
                                        </svg>
                                    </div>
                                  </div>
    
                            {#if correnncies}
                                <Currency coins={coins}  on:close={handleOption}/>
                            {/if}
                        </button>
                        <div class="sc-cCcXHH dXTFyi pagination ">
                            <div class="sc-jJoQJp gOHquD select  ">
                                <div class="select-trigger">
                                    20
                                    <div class="arrow top">
                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                            <use xlink:href="#icon_Arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="sc-cidDSM dmcoXZ">Total 0</div>
                            <div class="sc-jcFjpl sc-iUKqMP dORpLZ jrpAIs pages-wrap">
                                <button class="active" disabled="">1</button>
                            </div>
                            <div class="sc-jcFjpl sc-iUKqMP dORpLZ jrpAIs page-pn">
                                <button disabled="" class="disabled previous-btn">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon prev">
                                        <use xlink:href="#icon_Arrow"></use>
                                    </svg>
                                </button>
                                <button disabled="" class="disabled next-page">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon next">
                                        <use xlink:href="#icon_Arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
    
                    </div>
                </div>
            </div>
    
        </div>
    </div>
    
<style>
  
.cpezgQ {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
}

.cpezgQ .tabs-navs {
    display: flex;
    margin: 0.875rem auto;
    flex: 0 0 auto;
    width: 544px;
    max-width: 100%;
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

.kQfmQV .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}

.cpezgQ .tabs-nav {
    flex: 1 1 0%;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px;
}
    
    
    .XkKRx {
        background-color: rgb(30, 32, 36);
        padding: 0.75rem 0.75rem 0.75rem 1.25rem;
        flex: 0 0 auto;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        position: relative;
        z-index: 20;
    }
    
    .hDizvn {
        width: 190px;
    }
    
    .gOHquD {
        position: relative;
        height: 2.5rem;
        opacity: 1;
    }
    
    .hDizvn .select-trigger {
        padding: 0px 0.9375rem;
        width: 100%;
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
    
    .hDizvn .currency-label {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
     .coin-div {
        background-color: rgb(67, 179, 9);
        border-radius: 0.625rem;
        color: rgb(255, 255, 255);
        font-size: 0.75rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
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
    .currency-label img{
        border-radius: 50%;
        margin-right: 5px;
    }
    .hDizvn .coin-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.3125rem;
    }
    
    .dXTFyi {
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
        -webkit-box-align: center;
        align-items: center;
    }
    
    .dXTFyi .select {
        width: 6em;
        height: 2rem;
    }
    
    .dXTFyi .select-trigger {
        font-weight: 800;
        color: rgb(245, 246, 247);
        background-color: rgba(24, 25, 29, 0.6);
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
    
    .dmcoXZ {
        height: 2rem;
        line-height: 2rem;
        margin: 0px 0.5rem 0px 24px;
        font-size: 0.75rem;
        color: rgba(153, 164, 176, 0.6);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .dORpLZ.pages-wrap {
        background-color: rgba(24, 25, 29, 0.6);
        padding: 0px 1.125rem;
    }
    
    .dORpLZ {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 2rem;
        border-radius: 2rem;
        overflow: hidden;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px;
    }
    
    .dORpLZ.pages-wrap .active {
        color: rgb(245, 246, 247);
        font-weight: 600;
    }
    
    .dORpLZ.page-pn {
        margin-left: 0.75rem;
    }
    
    .dORpLZ {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 2rem;
        border-radius: 2rem;
        overflow: hidden;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px;
    }
    
    .jrpAIs.page-pn button.disabled {
        background-color: rgba(45, 48, 53, 0.4);
    }
    
    .dORpLZ.page-pn .previous-btn {
        margin: 0px 1px 0px 0px;
    }
    
    .dORpLZ.page-pn .disabled {
        cursor: not-allowed;
    }
    
    .dORpLZ.page-pn button {
        width: 2.125rem;
        height: 2rem;
        margin: 0px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    
    .cpezgQ .tabs-view {
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;
    }
    
    .kQfmQV .tabs-view {
        position: relative;
    }
    
    
    .clvyMv .currency-label {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    
    
    .clvyMv .coin-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.3125rem;
    }
    
    
    .clvyMv .currency-label {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    
    
    
    .clvyMv .coin-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.3125rem;
    }
    
    
    
    .clvyMv .currency-label {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    
    .clvyMv .coin-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.3125rem;
    }
    
    .clvyMv .currency-label {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    
    .clvyMv .coin-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.3125rem;
    }
</style>

