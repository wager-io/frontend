<script>
    import { createEventDispatcher } from "svelte";
    import { coin_list } from "$lib/store/coins"
    export let reciever
    const dispatch = createEventDispatcher()
    const handleSetActiveCoin = ((data)=>{
        dispatch("select", data)
        $coin_list.forEach(element => {
            if(element.coin_name === data.coin_name){
                element.is_active = true
            }else{
                element.is_active = false
            }
        });
        coin_list.set($coin_list)
    })
    
</script>
    
    <div class="dialog-body default-style sc-cbTzjv ijNHle balance-wrap" style="z-index: 2; transform: none;">
        <div class="balance-list">
            <div class="sc-ezbkAF kDuLvp input sc-fWCJzd eAGpdQ search-input">
                <div class="input-control">
                    <input type="text" value="">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon search">
                        <use xlink:href="#icon_Search"></use>
                    </svg>
                </div>
            </div>
            <div class="sc-dkPtRN jScFby scroll-view sc-dvQaRk bVVgo currency-list">
                {#each $coin_list as coin}
                    {#if !(coin.coin_name === reciever.coin_name || coin.coin_name === "WGF")}
                    <button on:click={()=> handleSetActiveCoin(coin)} class="sc-TBWPX kjMlDW currency-item notranslate {coin.is_active ? "active" : "normal"} ">
                        <div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW">
                            <div class="coin-wrap">
                                <img class="coin-icon" alt="" src="{coin.coin_image}">
                            </div>
                            <div class="name-wrap">
                                <div class="currency-name">{coin.coin_name}</div>
                            </div>
                            <div class="amount-wrap">
                                <div class="sc-Galmp erPQzq coin notranslate monospace">
                                    <div class="amount">
                                        <span class="amount-str">{(parseFloat(coin.balance)).toFixed(5)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    {/if}
                {/each}
          </div>
        </div>
    </div>
    
    
    
    <style>
    .ijNHle.balance-wrap {
        background-color: rgb(23, 24, 27);
    }
    .default-style {
        padding-top: 3.75rem;
        background-color: rgb(23, 24, 27);
    }
    .ijNHle .balance-list {
        padding: 0px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .default-style > div {
        border-radius: 20px;
        background-color: rgb(30, 32, 36);
        padding: 1.25rem 1.25rem 0px;
    }
    .ijNHle .search-input {
        padding: 1.25rem;
    }
    .eAGpdQ {
        margin-top: 0px;
        width: 100%;
    }
    .eAGpdQ .input-control {
        height: 2.75rem;
        border-radius: 0.9375rem;
        padding: 0px 0.625rem;
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
    .kDuLvp .input-control input {
        flex: 1 1 0%;
        width: 100%;
        height: 100%;
        min-width: 1rem;
        padding: 0px;
        border: none;
        background-color: transparent;
        color: rgb(245, 246, 247);
    }
    .eAGpdQ input {
        order: 1;
    }
    .hxODWG {
        width: 1.4em;
        height: 1.4em;
        fill: rgba(153, 164, 176, 0.6);
    }
    .eAGpdQ .search {
        margin-right: 0.625rem;
    }
    .ijNHle .balance-list .currency-item {
        margin-left: 1.25rem;
        margin-right: 1.25rem;
        width: 90%;
    }
    .kjMlDW {
        padding: 0.4375rem 0.625rem;
        font-size: 0.875rem;
        border-radius: 1.25rem;
        margin: 0.25rem 0px;
        border: 1px solid transparent;
        min-height: 2.0625rem;
    }
    .bAQFCP {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .jNFKIW .coin-wrap {
        position: relative;
    }
    .lkOITC .coin-wrap {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    
    .bAQFCP .coin-icon {
        width: 1.875rem;
        height: 1.875rem;
        margin-right: 0.9375rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 8px;
        border-radius: 0.9375rem;
    }
    .bAQFCP .coin-icon {
        width: 1.875rem;
        height: 1.875rem;
        margin-right: 0.9375rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 8px;
        border-radius: 0.9375rem;
    }
    .jNFKIW .amount-wrap {
        flex-direction: column;
        align-items: flex-end;
    }
    .lkOITC .amount-wrap {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin-left: auto;
    }
    .jNFKIW .amount-wrap .coin {
        text-align: right;
    }
    .jNFKIW .monospace {
        color: rgb(255, 255, 255);
        font-weight: 800;
        height: 1.375rem;
        line-height: 1.375rem;
    }
    .erPQzq {
        display: inline-flex;
        vertical-align: middle;
        -webkit-box-align: center;
        align-items: center;
        white-space: nowrap;
    }
    .monospace {
        font-family: Monmono;
    }
    .erPQzq .amount-str {
        width: 7em;
        display: inline-block;
    }
    .kjMlDW.active {
        border-color: rgb(67, 179, 9);
    }
    </style>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ``