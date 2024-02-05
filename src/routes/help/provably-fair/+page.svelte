<script>
   import Crash from "$lib/provably-fair/crash.svelte";
    import ClassicDice from "$lib/provably-fair/classic_dice.svelte";
    import Hilo from "$lib/provably-fair/hilo.svelte";
    import Mine from "$lib/provably-fair/mine.svelte";
let activeGame = ""
$: is_open = false
   let games = [
    {id:1, name: "Crash", status: "active"},
    {id:2, name: "classic Dice", status: ""},
    {id:3, name: "Hilo", status: ""},
    {id:14, name: "Mine", status: ""},
   ]

   games.forEach(element => {
        if(element.status === "active"){
            activeGame = element
        }
   });

   const handleSellectGame = ((event)=>{
        games.forEach(element => {
            if(element.name === event.name){
                activeGame = element
                element.status = "active"
            }else{
                element.status = ""
            }
            games = games
        });
        is_open = false
   })
</script>

<div class="sc-fSDTwv fSBjam">
    <p class="title">Game</p>
    <div class="sc-jJoQJp gOHquD select {is_open ? "is-open" : ""} ">
        <button on:click={()=> is_open =! is_open} class="select-trigger">
            {activeGame.name}
        <div class="arrow ">
            <svg class="sc-gsDKAQ hxODWG icon right" fill="none" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                <path xmlns="http://www.w3.org/2000/svg" 
                    d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
                    fill="rgba(153,164,176,.8)">
                </path>
            </svg>
        </div>
        </button>
        {#if is_open}
        <div class="sc-hiCibw iVwWcQ select-options-wrap" style="opacity: 1; top: 100%; transform: none;">
            <div class="sc-dkPtRN jScFby scroll-view select-options len-19">
                {#each games as game}
                    <button on:click={()=>handleSellectGame(game)} class="select-option {game.status === "active" ? "active" : ""}">{game.name}</button>
                {/each}
            </div>
        </div>
        {/if}
   
    </div>
    <p class="title">Fairness</p>
    <div class="sc-dkPtRN jScFby scroll-view sc-cBIieI fVyucj">
        {#if activeGame.name === "Crash"}
            <Crash />
        {:else if activeGame.name === "classic Dice"}
        <ClassicDice />
        {:else if activeGame.name === "Mine"}
        <Mine />
        {:else if activeGame.name === "Hilo"}
        <Hilo />
        {/if}
    </div>

</div>

<style>
.gOHquD.is-open .select-options-wrap {
    pointer-events: auto;
}

.iVwWcQ {
    position: absolute;
    padding: 0.3125rem 0px;
    width: 100%;
    left: 0px;
    z-index: 2;
    pointer-events: none;
}
.iVwWcQ .select-options {
    border-radius: 1.25rem;
    padding: 0.125rem 0.375rem;
    background-color: rgb(23, 24, 27);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px 0px;
    height: auto;
    max-height: 16.25rem;
}
.iVwWcQ .select-options:not(.len-1) > .active {
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
    margin: 0.25rem 0px;
    border: 1px solid transparent;
    border-radius: 1.0625rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
    width: 100%;
}
.iVwWcQ .select-options:not(.len-1) > .active::after {
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
</style>