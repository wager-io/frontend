<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher()
let coins = [
    {coin_name: "All", coin_img: "All currencies", active: true},
    {coin_name: "btc", coin_img: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400", active: false},
    {coin_name: "eth", coin_img: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628", active: false},
    {coin_name: "wgf", coin_img: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1698010748/wft_z3ouah.png", active: false},
    {coin_name: "wgd", coin_img: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1698011384/type_1_w_hqvuex.png", active: false}
]

const handleOptions = ((event)=>{
    coins.forEach(element => {
        if(element.coin_name === event){
            element.active = true
            dispatch("close", element)
        }else{
            element.active = false
        }
        coins = coins
    });
})

</script>

<div class="sc-hiCibw iVwWcQ select-options-wrap" style="opacity: 1; bottom: 100%; transform: none;">
    <div class="sc-dkPtRN jScFby scroll-view select-options len-13">
        {#each coins as coin}
            {#if coin.coin_name === "All"}
                <button on:click={()=>handleOptions(coin.coin_name)} class="select-option {coin.active ? "active" : ""}">
                    <div class="currency-label">
                        <div class="coin-icon coin-div">
                            <span>{coin.coin_name}</span>
                        </div>
                       {coin.coin_img}
                    </div>
                </button>
                {:else}
                <button on:click={()=>handleOptions(coin.coin_name)} class="select-option {coin.active ? "active" : ""}">
                    <div class="currency-label" style="text-transform: uppercase;">
                       <img class="coin-icon" alt="" src={coin.coin_img}>
                        {coin.coin_name}
                    </div>
                </button>
            {/if}
        {/each}
    </div>
</div>

<style>
    
.iVwWcQ {
    position: absolute;
    padding: 0.3125rem 0px;
    width: 100%;
    left: 0px;
    z-index: 2;
}
.iVwWcQ .select-options {
    border-radius: 1.25rem;
    padding: 0.125rem 0.375rem;
    background-color: rgb(23, 24, 27);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px 0px;
    height: auto;
    max-height: 16.25rem;
}
.iVwWcQ .select-options:not(.len-1)>.active {
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
    width: 100%;
    margin: 0.25rem 0px;
    border: 1px solid transparent;
    border-radius: 1.0625rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
}
.clvyMv .coin-div span {
    transform: scale(0.8);
}


.iVwWcQ .select-options {
    border-radius: 1.25rem;
    padding: 0.125rem 0.375rem;
    background-color: rgb(23, 24, 27);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px 0px;
    height: auto;
    max-height: 16.25rem;
}
.iVwWcQ .select-option:hover {
    background-color: rgba(88, 90, 97, 0.155);
    color: aliceblue;
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

.iVwWcQ .select-options:not(.len-1)>.active::after {
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

 .currency-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.currency-label img{
    border-radius: 50%;
    margin-right: 5px;
}

.coin-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.3125rem;
}

.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}

</style>