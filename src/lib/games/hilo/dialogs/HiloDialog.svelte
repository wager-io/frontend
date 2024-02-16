<script>
  import { fly } from "svelte/transition";
  import { screen } from "$lib/store/screen";
  import { cubicOut } from "svelte/easing";
  import GameDetails from "./components/GameDetails.svelte";
  import SeedSettings from "./components/SeedSettings.svelte";
  import VerifyGame from "./components/VerifyGame.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let launchConf;
  let betID;
  $: currentTab = 1;
  $: {
    betID = launchConf?.betID;
    currentTab = launchConf?.tab || 1;
  }
</script>

{#if Boolean(betID)}
  <div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div
      class="dialog"
      style={`${$screen < 650 ? "transform: scale(1) translateZ(0px);" : "opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px;"}  `}
    >
      {#if launchConf.tab === 1 && currentTab !== 1}
        <button on:click={() => (currentTab = 1)}  class="dialog-back" style="opacity: 1; transform: none;">
          <svg xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Arrow"></use>
          </svg>
          </button>
      {/if}
      <div class="dialog-head has-close {launchConf.tab === 1 && currentTab !== 1  ? 'has-back' : ''}">
        <div class="dialog-title">
          {currentTab === 1 ? "Details" : currentTab === 2 ? "Seed Settings"  : "Fairness"}
        </div>
      </div>
      <button on:click={() => dispatch("close")} class="sc-ieecCq fLASqZ close-icon dialog-close">
        <svg xmlns:xlink="http://www.w3.org/1999/xlink"
          class="sc-gsDKAQ hxODWG icon"
          ><use xlink:href="#icon_Close"></use></svg
        ></button
      >
      {#if currentTab === 1}
        <div
          in:fly={{ x: -80, duration: 150, easing: cubicOut }}
          out:fly={{ x: -80, duration: 150, easing: cubicOut }}
          class="dialog-body default-style"  style="z-index: 2; transform: none;">
          <GameDetails  {betID}  on:setup-seeds={() => (currentTab = 2)} on:verify={() => (currentTab = 3)} />
        </div>
      {:else if currentTab === 2}
        <div
          in:fly={{ x: 80, duration: 150, easing: cubicOut }}
          out:fly={{ x: 80, duration: 150, easing: cubicOut }}
          class="dialog-body default-style"
          style="z-index: 2; transform: none;"
        >
          <SeedSettings
            fromDetail={launchConf.tab === 1}
            on:close={(e) => {
              if (e.detail.fromDetail) currentTab = 3
              else dispatch("close");
            }}
          />
        </div>
      {:else if currentTab === 3}
        <div
          in:fly={{ x: 80, duration: 150, easing: cubicOut }}
          out:fly={{ x: 80, duration: 150, easing: cubicOut }}
          class="dialog-body default-style"
          style="z-index: 2; transform: none;"
        >
          <VerifyGame {betID} />
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>

  .dialog-head.has-back {
    margin-left: 3.125rem;
  }

  .dialog-head.has-close {
    margin-right: 3.75rem;
  }
  .dialog-back svg {
    transform: rotate(180deg);
    width: 16px;
    height: 16px;
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
  .dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
  }
  .dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0px;
    font-weight: bold;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(245, 246, 247);
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
  }

  :global(.default-style > div)  {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
  }

  :global(.dialog-body > div)  {
    flex: 1 1 0%;
  }
</style>
