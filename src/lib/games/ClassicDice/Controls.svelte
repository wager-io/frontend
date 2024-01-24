<script>
import AutoControllers from "./AutoControllers.svelte";
import ManualControllers from "./ManualControllers.svelte";
import {Handles_alive} from "$lib/games/ClassicDice/store/index"
import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen";

let is_manual = true
const hanleManualControls = ((e)=>{
    if(e === 1){
        is_manual = true
    }else{
        is_manual = false
    }
})

$: newScreen = 0
  $: {
    if($is_open__Appp && !$is_open__chat){
      newScreen = $screen - 240
    }
    else if(!$is_open__Appp && $is_open__chat){
      newScreen = $screen - 432
    }
    else if(!$is_open__Appp && !$is_open__chat){
      newScreen = $screen - 72
    }
    else if($is_open__Appp && $is_open__chat){
      newScreen = $screen - 600
    }
}
</script>

<div id="ClassicDice-control-0" class={`sc-hLVXRe cYiOHZ game-control ${newScreen < 1000 ? "style1" : "style0" } `}>
    <div class="sc-iwjdpV ikWSlH radio game-control-switch">
        <button disabled={$Handles_alive} on:click={()=> hanleManualControls(1)} class={`${is_manual ? "is-active" : ""} `}>
            <div class="label">Manual</div>
        </button>
        <button disabled={$Handles_alive}  on:click={()=> hanleManualControls(2)} on:click={hanleManualControls} class={`${!is_manual ? "is-active" : ""} `}>
            <div class="label">Auto</div>
        </button>
    </div>

    {#if is_manual}
        <ManualControllers />
    {/if}
    {#if !is_manual}
        <AutoControllers />
    {/if}

</div>

<style>
.cYiOHZ.style1 .game-control-switch {
    order: 2;
    margin-top: 1.25rem;
    position: relative;
}
.cYiOHZ.style-mobile .game-control-switch::before {
    content: 
    "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
}
.cYiOHZ.style1 .game-control-switch > button.is-active {
    border-bottom-color: rgb(67, 179, 9);
    background-image: linear-gradient(to top, rgba(123, 197, 20, 0.3), rgba(123, 197, 20, 0) 50%);
}
.cYiOHZ.style1 .game-control-switch > button {
    height: 3rem;
    border-bottom: 2px solid transparent;
}
.cYiOHZ .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
}
.cYiOHZ .game-control-switch > button.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.cYiOHZ.style1 .game-control-panel {
    padding: 0px 1.125rem;
}

</style>