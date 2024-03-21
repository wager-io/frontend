<script>
import AutoControllers from "./AutoControllers.svelte";
import ManualControllers from "./ManualControllers.svelte";
import { HandleIsAlive, HandleWinning, HandleHas_won } from "../mines/store/index";
let is_manual = true
export let newScreen;

const hanleManualControls = ((e)=>{
    if(e === 1){
        is_manual = true
    }else{
        is_manual = false
    }
    HandleWinning.set("")
    HandleIsAlive.set(false)
    HandleHas_won.set(false)
})

</script>

<div id="ClassicDice-control-0" class="sc-hLVXRe cYiOHZ game-control {newScreen > 1000 ? "style0" : "style-mobile" } ">
    <div class="sc-iwjdpV ikWSlH radio game-control-switch">
        <button disabled={$HandleIsAlive} on:click={()=> hanleManualControls(1)} class={`${is_manual ? "is-active" : ""} `}>
            <div class="label">Manual</div>
        </button>
        <button disabled={$HandleIsAlive} on:click={()=> hanleManualControls(2)} class={`${!is_manual ? "is-active" : ""} `}>
            <div class="label">Auto</div>
        </button>
    </div>
    <div class="game-control-panel" style="margin-top: 30px;">
        {#if is_manual}
            <ManualControllers />
        {/if}
        {#if !is_manual}
            <AutoControllers />
        {/if}
    </div>
</div>

<style>
.cYiOHZ.style-mobile {
    flex-direction: column;
}
.cYiOHZ {
    display: flex;
}
.cYiOHZ .game-control-panel {
    flex: 1 1 0%;
}
.cYiOHZ.style-mobile .game-control-panel {
    padding: 0px 1.125rem;
}
.cYiOHZ.style-mobile .game-control-switch {
    order: 2;
    margin-top: 1.25rem;
    position: relative;
}
.cYiOHZ.style-mobile .game-control-switch::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
}
.cYiOHZ.style-mobile .game-control-switch > button.is-active {
    border-bottom-color: #9900cc;
    background-image: linear-gradient(to top, #9900cc6c, rgba(123, 197, 20, 0) 50%);
}

.cYiOHZ.style-mobile .game-control-switch > button {
    height: 3rem;
    border-bottom: 2px solid transparent;
}
.cYiOHZ .game-control-switch > button.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.cYiOHZ .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
</style>