<script>
import { handleGlobalStat } from "$lib/modals/profile/hook";
import Loading from '$lib/components/loader.svelte';
import Progress from "$lib/components/progress.svelte"
export let user;
export let profile;
export let statistic;
let gamesStats = [
    {id: 1, display_name: "Global", url: "global", action: "active"},
    {id: 2, display_name: "Crash", url: "crash", action: ""},
    {id: 3, display_name: "Classic Dice", url: "dice", action: ""},
]

$: is_loading = false
$: is_open = false
$: default_displayname = "Global";

const handleDisplayRoute = (async(url)=>{
    is_loading = true
    let respose = await handleGlobalStat(user, url)
    is_loading = respose.loading
    if(respose.response){
        statistic = respose.response
    }
})

const handleStatisticsSellect = ((e)=>{
    gamesStats.forEach(element => {
        if(element.display_name === e.display_name){
            default_displayname = e.display_name
            element.action = "active"
            handleDisplayRoute(element.url)
        }else{
            element.action = ""
        }
        gamesStats = gamesStats
    });
    is_open = false
})

</script>

{#if is_loading}
    <Loading />
{:else}
    <div class="dialog-body no-style " style="z-index: 2; transform: none;">
        <div class="sc-dkPtRN jScFby scroll-view sc-fydGpi lgnNLC">
            <div class="fc head">
                <div class="title">Statistics</div>
                <div class="sc-jJoQJp gOHquD select {is_open ? "is-open" : ""} ">
                    <button on:click={()=> is_open =! is_open} style="width:100%" class="select-trigger">
                        {default_displayname}
                        <div class="arrow ">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Arrow"></use>
                            </svg>
                        </div>
                    </button>
                    {#if is_open}
                        <div class="sc-hiCibw iVwWcQ select-options-wrap" style="opacity: 1; top: 100%; transform: none;">
                            <div class="sc-dkPtRN jScFby scroll-view select-options len-20">
                                {#each gamesStats as game}
                                    <button style="width: 100%;" on:click={()=> handleStatisticsSellect(game)} class="select-option {game.action}">{game.display_name}</button>
                                {/each}
                            </div>
                        </div>
                    {/if}
                </div>
            <div class="user-info flex-center">
                <img class="avatar " alt="" src="{profile.profile_image}">
                <div class="flex-column">
                    <div class="user-name">{profile.username}</div>
                    <Progress chat={profile} style={"level-box"}/>
                </div>
            </div>
        </div>

            <div class="sc-gXRojI bRYT">
                <div class="sc-bGaVxB gvTPwc">
                    <div class="item">
                        <div class="item-type darken">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon wins-icon">
                                <use xlink:href="#icon_Bet"></use>
                            </svg>
                            Total Wins
                        </div>
                        <div class="item-value">{statistic.total_win}</div>
                    </div>
                    <div class="item">
                        <div class="item-type darken">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon bets-icon">
                                <use xlink:href="#icon_Coin"></use>
                            </svg>
                            Total Bets
                        </div>
                        <div class="item-value">{statistic.total_bet}</div>
                    </div>
                    <div class="item">
                        <div class="item-type darken">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon wagered-icon">
                                <use xlink:href="#icon_TotalWager"></use>
                            </svg>
                            Total Wagered
                        </div>
                        <div class="item-value">{(parseFloat(statistic.total_win)).toFixed(4)} USD</div>
                    </div>
                </div>
            </div>

            <div class="sc-gXRojI bRYT statistics__list">
                <div class="thead darken">
                    <div class="th">Currency</div>
                    <div class="th">Win</div>
                    <div class="th">Bet</div>
                    <div class="th">Wagered</div>
                </div>
                {#if statistic.usdt.usdt_bets && statistic.ppf.ppf_bets}
                <div class="tbody">
                {#if statistic.usdt.usdt_bets}
                    <div class="tr">
                        <div class="td fc bold">
                            <img class="coin-icon" alt="" src="{statistic.usdt.usdt_img}">USDT</div>
                            <div class="td">{statistic.usdt.usdt_win}</div>
                            <div class="td">{statistic.usdt.usdt_bets}</div>
                            <div class="td bold">
                                <div class="sc-Galmp erPQzq coin notranslate monospace">
                                    <div class="amount">
                                        <span class="amount-str">{(parseFloat(statistic.usdt.usdt_wagered)).toFixed(4)}</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                {/if}
                
                {#if statistic.ppf.ppf_bets}
                    <div class="tr">
                        <div class="td fc bold">
                            <img class="coin-icon" alt="" src="{statistic.ppf.ppf_img}">ppf</div>
                            <div class="td">{statistic.ppf.ppf_win}</div>
                            <div class="td">{statistic.ppf.ppf_bets}</div>
                            <div class="td bold">
                                <div class="sc-Galmp erPQzq coin notranslate monospace">
                                    <div class="amount">
                                        <span class="amount-str">{(parseFloat(statistic.ppf.ppf_wagered)).toFixed(4)}</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                {/if}
                  
                </div>
                    <div class="sc-cCcXHH dXTFyi pagination ">
                        <div class="sc-cidDSM dmcoXZ">Total 1</div>
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
                    {:else}
                    <div class="sc-eCImPb cuPxwd empty ">
                        <img alt="" src="https://static.nanogames.io/assets/empty.acd1f5fe.png">
                        <div class="msg">Oops! There is no data yet!</div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}
    
    
<style>
.gOHquD .select-trigger .arrow > svg {
    font-size: 0.625rem;
    transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
}
.lgnNLC .user-info .avatar {
    width: 2.1875rem;
    height: 2.1875rem;
    border-radius: 50%;
    margin-right: 0.375rem;
}
.lgnNLC .coin-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
}
.lgnNLC .user-info .flex-column {
    align-items: flex-start;
}
.flex-column {
    display: flex;
    flex-direction: column;
}
.lgnNLC .user-info .flex-column {
    align-items: flex-start;
}
.lgnNLC .user-info .user-name {
    color: rgb(245, 246, 247);
    max-width: 6.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
}
.bRYT {
    background: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 0.875rem;
    margin-bottom: 0.5rem;
}
.gvTPwc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.gvTPwc .item {
    width: 32.5%;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: rgba(24, 25, 29, 0.6);
    border-radius: 0.625rem;
    min-height: 5.3125rem;
}
.gvTPwc .item-type {
    font-size: 0.75rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
}
.bRYT .darken {
    color: rgba(153, 164, 176, 0.6);
    background: none;
}
.gvTPwc .icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
}
.gvTPwc .wins-icon {
    fill: rgb(245, 246, 247);
}
.lgnNLC .statistics__list {
    padding: 1rem 1.25rem;
}

.bRYT {
    background: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 0.875rem;
    margin-bottom: 0.5rem;
}
.lgnNLC .thead {
    font-size: 0.75rem;
    margin: 0.75rem 0px;
}
.lgnNLC .thead, .lgnNLC .tr {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.bRYT .darken {
    color: rgba(153, 164, 176, 0.6);
    background: none;
}
.lgnNLC .td, .lgnNLC .th {
    flex: 2 1 0%;
    text-align: center;
}
.lgnNLC .td:nth-child(1), .lgnNLC .th:nth-child(1) {
    text-align: left;
    flex: 4 1 0%;
}
.lgnNLC .tr {
    padding: 0.625rem 0px;
    color: rgb(255, 255, 255);
}
.lgnNLC .td {
    color: rgb(245, 246, 247);
}
.lgnNLC .bold {
    font-weight: 600;
    color: rgb(245, 246, 247);
}
.lgnNLC .pagination {
    margin: 2rem 0px 0.375rem;
}
.dXTFyi {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
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
.dORpLZ.pages-wrap {
    background-color: rgba(24, 25, 29, 0.6);
    padding: 0px 1.125rem;
}
.lgnNLC .pagination .pages-wrap button {
    background-color: transparent;
}
.dORpLZ.pages-wrap .active {
    color: rgb(245, 246, 247);
    font-weight: 600;
}
.lgnNLC .pagination button {
    background-color: rgba(45, 48, 53, 0.6);
}
.dORpLZ.pages-wrap button {
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    margin: 0px;
}
.dORpLZ.page-pn {
    margin-left: 0.75rem;
}
.lgnNLC .pagination button.disabled {
    background-color: rgba(45, 48, 53, 0.4);
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
.lgnNLC .pagination button {
    background-color: rgba(45, 48, 53, 0.6);
}
.jrpAIs.page-pn button {
    background-color: rgba(45, 48, 53, 0.6);
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
.dORpLZ.page-pn .previous-btn .icon {
    transform: rotate(180deg);
}
.jrpAIs.page-pn button.disabled svg {
    fill: rgba(153, 164, 176, 0.2);
}
.jrpAIs.page-pn button svg {
    fill: rgba(153, 164, 176, 0.6);
}
.dORpLZ .icon {
    width: 1rem;
    height: 1rem;
}
</style>