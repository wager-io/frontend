<script>
import { onMount } from "svelte";
import { UserProfileEl} from "$lib/index"
import { handleAuthToken } from "$lib/store/routes";
const { handleTransaction } = UserProfileEl()
import { url } from "$lib/store/routes";
import { goto } from "$app/navigation";
import Loader from "$lib/components/loader.svelte";
export let is_active
export let currency
$: Bils = []
$: loading = false
$: errors = ''

onMount(async()=>{
    loading = true
    const { responcse, is_loading, error} = await handleTransaction($handleAuthToken, is_active)
    loading = is_loading
    if(responcse){
        Bils = responcse
    }
    if(error){
        errors = error
    }
})


const handleOption = (async(event)=>{
    goto(`${$url === "/" ? "" : $url}/?tab=transaction&modal=bill&cur=${currency}&bill=${event}`)
    loading = true
    const { responcse, is_loading, error} = await handleTransaction($handleAuthToken, event)
    loading = is_loading
    if(responcse){
        Bils = responcse
    }
    if(error){
        errors = error
    }
})

</script>

<div id="bill" class="sc-cnTVOG cdiSjJ">
    <div class="sc-kexyCK fcKPxc">
        <div class="sc-eBHJIF kZcuHK">
            <label class="data-search-wrap">
                <div class="react-datepicker-wrapper">
                    <div class="react-datepicker__input-container">
                        <input type="text" placeholder="Select Date" class="" value="">
                    </div>
                </div>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Calendar"></use>
                </svg>
            </label>
        </div>
        <button on:click={()=> handleOption("all")} disabled={is_active === "all"}  class="sc-jTycuM rTttx {is_active === "all" ? "active" : ""}">
            <div>All</div>
        </button>
        <button on:click={()=> handleOption("game")} disabled={is_active === "game"} class="sc-jTycuM rTttx {is_active === "game" ? "active" : ""}">
            <div>Game</div>
        </button>
        <button on:click={()=> handleOption("bonus")} disabled={is_active === "bonus"} class="sc-jTycuM rTttx {is_active === "bonus" ? "active" : ""}">
            <div>Bonus</div>
        </button>
        <button on:click={()=> handleOption("affiliate")} disabled={is_active === "affiliate"} class="sc-jTycuM rTttx {is_active === "affiliate" ? "active" : ""}">
            <div>Affiliate</div>
        </button>
        <button on:click={()=> handleOption("swap")} disabled={is_active === "swap"} class="sc-jTycuM rTttx {is_active === "swap" ? "active" : ""}">
            <div>Swap</div>
        </button>
    </div>

    <div class="sc-dkPtRN jScFby scroll-view sc-lnDqNf eiFYvl">
        <div class="sc-hUnA hImvnV tb-bg">
            <table class="sc-gWXbKe iUeetX table sc-fXNlap hQylKr is-hover">
                <thead>
                    <tr>
                        <td class="width_48">Type / Time</td>
                        <td style="text-align: left;">Amount</td>
                        <td>Balance</td>
                    </tr>
                </thead>
                <tbody>
                    {#if loading}
                        <div style="height: 200px; margin:70px">
                            <Loader />
                        </div>
                    {:else if Bils.length > 0 }
                    {#each Bils as bill }
                        <tr class="">
                            <td style="cursor: auto;">
                                <div class="type">
                                    <span>{bill.transaction_type}-</span>Win</div>
                                    <div>{bill.bill_id}</div>
                                    <div class="time">{new Date(bill.datetime).toLocaleDateString()}, {new Date(bill.datetime).toLocaleTimeString()}</div>
                                </td>
                                <td class="sc-jEieoE {bill.status ? "gofQfP" : "fWMzRD"} success" style="text-align: left;">
                                    <div class="sc-Galmp erPQzq coin notranslate">
                                        <img class="coin-icon" alt="" src={bill.token_img}>
                                        <div class="amount">
                                            <span class="amount-str">{(parseFloat(bill.trx_amount)).toFixed(7)}<span class="suffix">00</span>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td class="sc-jSYIrd jbPgYE">
                                <div class="sc-Galmp erPQzq coin notranslate">
                                    <img class="coin-icon" alt="" src={bill.token_img}>
                                    <div class="amount">
                                        <span class="amount-str">{(parseFloat(bill.balance)).toFixed(7)}</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    {/each}
                    {:else}
                    <div class="sc-lhMiDA">
                        <div class="sc-eCImPb cuPxwd empty full-abs" style="margin-top: 70px;">
                            <div class="opps-msg"> Oops!</div>
                            <div class="msg"> There is no data yet!</div>
                        </div>
                     </div>
                    {/if}
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
.cdiSjJ {
    flex: 1 1 auto;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 0px;
    flex-wrap: nowrap;
}
.gofQfP {
    color: rgb(93, 160, 0) !important;
}
.fWMzRD {
    color: rgb(237, 99, 0) !important;
}
.fcKPxc {
    background-color: rgb(26, 27, 30);
    position: relative;
    z-index: 9;
    width: auto;
}
.kZcuHK {
    margin: 1.125rem 0.625rem;
    padding: 0rem;
    width: 160px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex: 0 1 0%;
}
.table .sc-Galmp {
    font-family: Monmono;
}
.jbPgYE .amount {
    color: rgb(255, 255, 255);
}
.erPQzq .suffix {
    opacity: 0.5;
}
.kZcuHK .data-search-wrap {
    height: 2.5rem;
    width: 100%;
    padding: 0.625rem;
    border-radius: 1.75rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.6);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex: 6 1 0%;
}
.kZcuHK .data-search-wrap > div {
    flex: 1 1 auto;
    margin: 0px 0.3125rem;
    width: auto;
}
.react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
}
.react-datepicker__input-container {
    position: relative;
    display: inline-block;
    width: 100%;
}
.kZcuHK .data-search-wrap input {
    background-color: transparent;
    border: none;
    width: 100px;
}
.rTttx {
    margin-right: auto;
    padding-top: 5px;
}
.rTttx.active div {
    color: rgb(245, 246, 247);
    font-weight: 800;
    background-color: rgba(85, 89, 102, 0.4);
}
.rTttx div {
    display: inline-block;
    padding: 0px 3.75rem 0px 1.25rem;
    border-bottom-right-radius: 1.125rem;
    border-top-right-radius: 1.125rem;
    height: 2.25rem;
    cursor: pointer;
    line-height: 2.25rem;
    color: rgba(153, 164, 176, 0.6);
}
.rTttx div:hover {
color: aliceblue;
}
.cdiSjJ .scroll-view {
    height: auto;
}
.eiFYvl {
    flex: 1 1 auto;
    height: 0px;
}
.hImvnV {
    padding: 0px 14px;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    position: relative;
    overflow: scroll;
    background-color: rgb(23, 24, 27);
    height: 420px;
    /* min-height: 100%; */
    /* height: 100px; */
}
.hQylKr {
    position: relative;
    z-index: 1;
    font-size: 14px;
    text-align: center;
    border-collapse: collapse;
}
.iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
}
.hImvnV::after {
    content: "";
    background-color: rgb(30, 32, 36);
    height: 3.4375rem;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
}
.cdiSjJ .tb-bg .width_48 {
    width: 40%;
}
.iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
}

.iUeetX td:first-child {
    text-align: left;
}
.cdiSjJ thead td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cdiSjJ .time {
    opacity: 0.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.hQylKr td{
    color: rgba(152, 167, 181, 0.5);
    padding: 1rem 0.875rem;
    border: none;
}
.cdiSjJ thead td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.iUeetX td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
}
.iUeetX td:last-child {
    text-align: right;
}
.hQylKr td {
    color: rgba(152, 167, 181, 0.5);
    padding: 1rem 0.875rem;
    border: none;
}
.cdiSjJ .type {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cdiSjJ .time {
    opacity: 0.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
}
.erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
}
.hQylKr.table tbody .amount {
    font-weight: 800;
    margin-left: 0.25rem;
}

</style>
