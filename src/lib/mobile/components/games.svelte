<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoDice from "svelte-icons-pack/io/IoDice";

import IoRocket from "svelte-icons-pack/io/IoRocket";
import BiBomb from "svelte-icons-pack/bi/BiBomb";
import BsDice5 from "svelte-icons-pack/bs/BsDice5";

import { createEventDispatcher } from 'svelte';
import { routes } from "$lib/store/routes"
const dispatch = createEventDispatcher()

const handleDispatch = ((e)=>{
    dispatch("dipla", e)
})

</script>

<!-- ============================  games ================= -->
<div class="sc-hKwDye fclMSM" style="height: auto;">
    <div class="sc-lbhJGD dzUbMz">
        <div class="item-wrap">
            <div  class={`game-item ${$routes.route === "/(games)/crash" ? "select" : ""}`}>
                <button on:click={()=> handleDispatch("/crash")} class="game-area">
                    <Icon src={IoRocket} color="rgba(153, 164, 176, 0.6)" size="17" className="crash-icon" title="Custom icon params" />
                    <div class="sc-jrQzAO iodxXo p">
                        <span style="transform: scale(1);">Crash</span>
                    </div>
                </button>
            </div>
            <div class={`game-item ${$routes.route === "/(games)/classic-dice" ? "select" : ""}`} >
                <button on:click={()=> handleDispatch("/classic-dice")} class="game-area">
                    <Icon src={BsDice5} color="rgba(153, 164, 176, 0.6)" size="17" className="custom-icon" title="Custom icon params" />
                    <div class="sc-jrQzAO iodxXo p">
                        <span style="transform: scale(1);">Classic Dice</span>
                    </div>
                </button>
            </div>
            <div class={`game-item ${$routes.route === "/(games)/mines" ? "select" : ""}`}>
                <button on:click={()=> handleDispatch("/mines")} class="game-area">
                    <Icon src={BiBomb} color="rgba(153, 164, 176, 0.6)" size="23" className="custom-icon" title="Custom icon params" />
                    <div class="sc-jrQzAO iodxXo p">
                        <span style="transform: scale(1);">Mines</span>
                    </div>
                </button>
            </div>
            <div class={`game-item ${$routes.route === "/(games)/hilo" ? "select" : ""}`}>
                <button on:click={()=> handleDispatch("/hilo")} class="game-area">
                    <Icon src={IoDice} color="rgba(153, 164, 176, 0.6)" size="17" className="custom-icon" title="Custom icon params" />
                    <div class="sc-jrQzAO iodxXo p">
                        <span style="transform: scale(1);">Hilo</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</div>