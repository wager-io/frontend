<script>
import { browser } from "$app/environment";
import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen";
import GameControls from "$lib/games/crash/GameControls.svelte";
import GameActions from "$lib/games/crash/GameActions.svelte";
import GameView from "$lib/games/crash/GameView.svelte";
import AllBets from "$lib/games/crash/AllBets.svelte";
import MyBets from "$lib/games/crash/MyBets.svelte";
import GameHeader from "$lib/games/crash/GameHeader.svelte";
import LiveBets from "$lib/games/crash/LiveBets.svelte";
import { crashGame } from "$lib/games/crash/store";
import { onMount } from "svelte";
import CrashGame from "$lib/games/crash/logics/CrashGame";

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

$: tabOffset = newScreen > 900 ? 0 : 1;
$: currentTab = !tabOffset && currentTab === 3 ? 1 : (currentTab || 1);
$: gameInit = false;
onMount(async () => {
  if (browser) {
    try {
      const gameInstance = new CrashGame();
      await gameInstance.initialize();
      crashGame.set(gameInstance);
      console.log(gameInstance)
      gameInit = true;
    } catch (error) {
      console.log("Error init game ", error);
    }
  }
});

</script>

<div id="game-crash" class={`sc-haTkiu lmWKWf game-style1 sc-cBIieI ikZPEu ${ $screen > 650 && $is_open__Appp ? "is_sidebar" : ""} ${ $screen > 650 && $is_open__chat ? "is_chat" : ""}`}>
  <GameHeader />
  <div class="game-area">
    <div class="game-main">
      <GameControls />
      <GameView />
      <GameActions />
    </div>
    {#if newScreen > 900}
    <LiveBets />
    {/if}
  </div>
  <div class="sc-cxpSdN kQfmQV tabs game-tabs len-3">
    <div class="tabs-navs">
      {#if Boolean(tabOffset)}
      <button
      on:click={() => (currentTab = 1)}
      class="tabs-nav {currentTab === 1 ? 'is-active' : ''}">All Bets</button>
    {/if}
      <button
        on:click={() => (currentTab = 1 + tabOffset)}
        class="tabs-nav {currentTab === 1 + tabOffset ? 'is-active' : ''}">My Bets</button><button
        on:click={() => (currentTab = 2 + tabOffset)}
        class="tabs-nav {currentTab === 2 + tabOffset ? 'is-active' : ''}">History</button>
      <div
        class="bg"
        style="width: {100 /(Boolean(tabOffset) ? 3 : 2)}%; left: {(Boolean(tabOffset) ? (100/3) : 50) * (Boolean(tabOffset) ? (currentTab - tabOffset) : currentTab - 1)}%;"></div>
    </div>
    <div class="tabs-view" style="transform: none;">
      {#if Boolean(tabOffset) && currentTab === 1}
        <LiveBets/>
      {/if}
      {#if currentTab === 1 + tabOffset}
        <MyBets />
      {:else if currentTab === 2 + tabOffset}
        <AllBets />
      {/if}
    </div>
  </div>
  <div class="sc-kTqLtj hsmSjD">
    <div class="intro-title">
      <p>Crash</p>
      <div class="intro-tags">
        <p>Multiplayer</p>
        <p>Our Best Games</p>
        <p>BC Originals</p>
      </div>
    </div>
    <div class="description">
      CRASH is an online multiplayer blockchain guessing game that made as an
      increasing curve that may crash at any time.
    </div>
    <button class="intro-detail"
      >Details<svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Arrow"></use></svg
      ></button
    >
  </div>
</div>

<style>
  
  .lmWKWf.game-style1 {
    max-width: 1368px;
    margin: 0px auto;
    padding: 1.25rem 0.625rem;
  }

  .lmWKWf.is_sidebar {
    padding-left: 55px;
  }

  .lmWKWf.is_chat {
    padding-right: 370px;
  }

  .lmWKWf {
    min-height: 90vh;
  }
  
  .lmWKWf.game-style1 .game-area{
    display: flex;
    flex-wrap: wrap;
  }
  .ikZPEu .game-main.game-main {
    min-height: auto;
  }

  .lmWKWf.game-style1 .game-main {
    min-height: 47.5rem;
  }

  .lmWKWf.game-style1 .game-main {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    overflow: hidden;
  }

  .lmWKWf .game-main {
    position: relative;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
  }
  :global(
      .lmWKWf.game-style0 .game-view,
      .lmWKWf.game-style1 .game-view,
      .lmWKWf.game-style-iframe .game-view
    ) {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
  }
  .lmWKWf .game-tabs {
    margin-top: 2.5rem;
  }
  .lmWKWf .game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
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
  .lmWKWf .game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
  }
  
  .lmWKWf .game-tabs .tabs-view {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 1px 0px;
  }

  .kQfmQV .tabs-view {
    position: relative;
  }
  .hsmSjD {
    width: 100%;
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
    padding: 1.5rem 1.5rem 2rem;
    margin-top: 2rem;
}
.hsmSjD .intro-title {
    min-height: 5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.hsmSjD .intro-title > p {
    font-size: 1rem;
    color: rgb(245, 246, 247);
    font-weight: 600;
    margin: 0px;
    white-space: nowrap;
}
.hsmSjD .intro-title .intro-tags {
    margin-left: 2.5rem;
    display: flex;
    flex-wrap: wrap;
}
.hsmSjD .intro-title .intro-tags > p {
    margin: 0px 1.125rem 0.3125rem 0px;
    padding: 0.5rem 1.25rem;
    border-radius: 1.125rem;
    background-color: rgb(43, 47, 54);
}


.hsmSjD .description {
    margin-top: 0.75rem;
    line-height: 1.25rem;
}
.hsmSjD .intro-detail {
    width: 6.75rem;
    height: 2.5rem;
    margin-top: 2rem;
    border-radius: 1.25rem;
    background-color: rgba(49, 52, 60, 0.6);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.hsmSjD .intro-detail > svg {
    font-size: 0.5625rem;
    margin-left: 1.125rem;
}
.hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
}
</style>
