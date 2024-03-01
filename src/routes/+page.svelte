<script>
import "../styles/home/index.css"
import "../styles/home/indexmobile.css"
import Biggestwin from "$lib/homecomponents/biggestwin.svelte";
import { register } from 'swiper/element/bundle';
import Homeoriginals from '$lib/homecomponents/homeoriginals.svelte';
import Latestbet from '$lib/homecomponents/latestbet.svelte';
import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen";
import { profileStore } from "$lib/store/profile";
import { goto } from "$app/navigation";
import { url } from "$lib/store/routes";
import { handleGoogleAuth, handleFacebookAuth } from "$lib/firebaseAuth/index";
import { handleAuthToken } from "$lib/store/routes";
register();
$: is_loading = false
$: errors = ""

const handleLoginWithGoogle = (async()=>{
  is_loading = true
  const respo = await handleGoogleAuth()
  is_loading = respo.loading
  errors = respo.error
  setTimeout(()=>{
    errors = ""
  },4000)
  if(respo.responses){
    errors = respo.responses.error
    let respos = respo.responses.response_data
    localStorage.setItem("user", JSON.stringify(respos.Token));
    handleAuthToken.set(respos.Token)
    profileStore.set(respos.result)
    let hisex = respos.wallet
      coin_list.set(hisex)
      hisex.forEach(element => {
        if(element.is_active){
          default_Wallet.set(element)
        }
     });
     goto($url)
  }
})

</script>

<div  class="sc-jwQYvw eRdxAb" style={`padding-left:${$screen > 650 && $is_open__Appp ? 50 : 2}px; padding-right:${$is_open__chat ? 360 : 0}px`}>

    <div class="WKiwniiw home-banner">
        <div class="bannner-int">
            <img src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1709292820/Group_374_nblbe4.png" alt="">
        </div>
    </div>


    <div class="dark-background svelte-1p2dszo">
            <div class="header-wrapper svelte-1p2dszo">
        {#if !$handleAuthToken}
            <div class="nsiWn-wnx head-string">
                <div class="head title">Play smarter</div>
                <div class="heads body">
                    <div class="buttons">
                        <button on:click={()=> goto(`${$url === "/" ? "" : $url}/?tab=register&modal=auth`)} class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-big">Register Now</button>
                    </div>

                    <div class="sjiwwn seperate">
                        <span>or</span>
                    </div>

                    <div class="enewWnw socials iajVfs">
                        <div class="other-group">
                            <button id="gg_login" on:click={handleLoginWithGoogle}  type="button"  title="google" >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="#fa455e" d="M16 0a16 16 0 110 32 16 16 0 010-32z"></path>
                                <path fill="#fff"
                                  d="M19.5 12.3c-.5-.5-1.1-.9-1.8-1a4.8 4.8 0 00-2-.2c-.9 0-1.7.4-2.3 1a5 5 0 00-2 4 5 5 0 004 4.8 5 5 0 001.6 0c.8 0 1.6-.3 2.2-.7.5-.4 1-.9 1.2-1.4l.3-.9v-.2h-4.4v-3.2h7.5l.2.1.1 1v1.2c0 .5 0 1-.2 1.6v-.1a7.4 7.4 0 01-1.4 3 7 7 0 01-3 2.4h-.1c-.6.2-1.2.4-1.9.4a8.8 8.8 0 01-1.9 0c-.8 0-1.5-.1-2.2-.4-.9-.4-1.6-.8-2.3-1.4-1-.8-1.9-2-2.4-3.2l-.5-1.9v-1.4-.1c0-.9.2-1.7.4-2.5.3-.7.7-1.4 1.2-2 1-1.4 2.5-2.5 4.3-3l1.5-.3a11.1 11.1 0 011.3 0 7.7 7.7 0 014.8 2l-.1.3-2 2h-.1z"
                                ></path>
                              </svg>
                            </button>
                            <button  id="fb_login" on:click={handleFacebookAuth} type="button" title="facebook" >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="#fff" d="M31.7 16.3a15.7 15.7 0 11-31.4 0 15.7 15.7 0 0131.4 0z"></path>
                                <path fill="#227aee" d="M0 16a16 16 0 0013.4 15.8V20.6h-4v-4.7h4v-4.4c0-2.7 2.3-5.7 6.5-5.6 1.5 0 3.4.5 3.4.5v4s-1.9-.2-3 0c-1.6.2-2 1.4-2 2v3.3h4.9l-1 4.9h-3.8v11.2A16 16 0 100 16z"></path>
                              </svg>
                            </button>
                            <div class="line"></div>
                        </div>
                    </div>
                </div>
            </div>  
        {/if}
           
                
        {#if $handleAuthToken}
            <div class="authenticated-wrapper svelte-1p2dszo" style="--image: url(/_app/immutable/assets/abstract-bg.wS7eZzoT.svg);">
                <h1 class="weight-semibold line-height-default align-left size-lg text-size-lg variant-highlighted with-icon-space svelte-1d6bfct" style=""> Welcome back, <span style="color: #ffff;">{$profileStore.username ? $profileStore.username : ""}</span></h1> 
                <div class="vip-progress-wrapper svelte-1uxrf3q">
                    <div class="progress-label svelte-h0vqv3">
                        <div class="progress-heading svelte-h0vqv3">
                            <div class="slide svelte-1p2dszo" >
                                <button class="button variant-link size-md align-left svelte-1pcg5q8" data-analytics="global-banner-vipProgress-button"> 
                                    <span class="content-or-loader svelte-kgkwgo">
                                    <span></span>
                                        Your VIP Progress 
                                    <svg fill="currentColor" viewBox="0 0 64 64" class="svg-icon" style="">
                                        <title></title>
                                        <path d="M8 37.486h30.909L28.665 47.73l6.313 6.314L56 33.022 34.978 12l-6.313 6.314 10.244 10.244H8v8.933-.005Z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div class="percent-label svelte-h0vqv3">
                            <span class="weight-semibold line-height-default align-left size-default text-size-default variant-highlighted numeric with-icon-space svelte-1d6bfct" style="">{$profileStore.vip_level ? parseFloat($profileStore.vip_level) : (0).toFixed(2)}%</span>
                        </div>
                    </div>
                    <div class="progress-bar-wrap svelte-1g2z0q3">
                        <div class="milestone-wrap svelte-1g2z0q3">
                            <div class="milestone-outer svelte-3okm3b orientation-bottom" style="left: 0%;">
                                <div class="milestone-center svelte-3okm3b orientation-bottom" style="transform: translate(-10%, 50%);">
                                    <div class="miletone-wrap svelte-azdvxm">
                                        <span class="svelte-azdvxm">
                                            <svg fill="none" viewBox="0 0 96 96" class="svg-icon" style="">
                                                <title></title>
                                                <path d="m48 14.595 8.49 15.75a13.68 13.68 0 0 0 9.66 7.08L84 40.635l-12.39 12.9a13.89 13.89 0 0 0-3.9 9.63c-.046.64-.046 1.281 0 1.92l2.46 17.76-15.66-7.56a15 15 0 0 0-6.51-1.53 15 15 0 0 0-6.6 1.5l-15.57 7.53 2.46-17.76c.034-.62.034-1.24 0-1.86a13.89 13.89 0 0 0-3.9-9.63L12 40.635l17.64-3.21a13.62 13.62 0 0 0 9.84-7.02L48 14.595Zm0-12.54a5.22 5.22 0 0 0-4.59 2.73l-11.4 21.45a5.401 5.401 0 0 1-3.66 2.67l-24 4.32A5.25 5.25 0 0 0 0 38.385a5.13 5.13 0 0 0 1.44 3.6l16.83 17.55a5.16 5.16 0 0 1 1.47 3.6c.016.29.016.58 0 .87l-3.27 24a3 3 0 0 0 0 .72 5.192 5.192 0 0 0 5.19 5.22h.18a5.07 5.07 0 0 0 2.16-.6l21.39-10.32a6.42 6.42 0 0 1 2.76-.63 6.179 6.179 0 0 1 2.79.66l21 10.32c.69.377 1.464.573 2.25.57h.21a5.22 5.22 0 0 0 5.19-5.19c.016-.25.016-.5 0-.75l-3.27-24c-.017-.25-.017-.5 0-.75a5.012 5.012 0 0 1 1.47-3.57l16.77-17.7a5.19 5.19 0 0 0-2.82-8.7l-24-4.32a5.22 5.22 0 0 1-3.69-2.76l-11.4-21.45a5.22 5.22 0 0 0-4.65-2.7Z" fill="#2F4553"></path>
                                            </svg>
                                        </span>
                                        <span class="svelte-azdvxm">None</span>
                                    </div>
                                </div>
                            </div>
                            <div class="milestone-outer svelte-3okm3b orientation-bottom" style="left: 100%;">
                                <div class="milestone-center svelte-3okm3b orientation-bottom" style="transform: translate(-90%, 50%);">
                                    <div class="miletone-wrap svelte-azdvxm">
                                        <span class="svelte-azdvxm">
                                            <svg fill="none" viewBox="0 0 96 96" class="svg-icon" style="">
                                                <title></title>
                                                <path d="m48.002 14.603 8.48 15.757c1.97 3.693 5.495 6.336 9.677 7.068l.08.012 17.64 3.2L71.48 53.56a13.835 13.835 0 0 0-3.884 9.63c0 .653.045 1.292.132 1.922l-.01-.072 2.44 17.758L54.52 75.24c-1.908-.934-4.15-1.48-6.52-1.48s-4.613.546-6.608 1.518l.09-.039-15.637 7.56 2.438-17.759c.078-.555.123-1.197.123-1.85 0-3.741-1.482-7.137-3.887-9.633l.003.003-12.518-12.92 17.638-3.2a13.642 13.642 0 0 0 9.842-7.008l.036-.072L48 14.603Zm0-12.521h-.01a5.194 5.194 0 0 0-4.577 2.733l-.015.027L32 26.28a5.298 5.298 0 0 1-3.648 2.675l-.033.006-23.997 4.32C1.853 33.717 0 35.847 0 38.406a5.19 5.19 0 0 0 1.443 3.596L1.44 42l16.837 17.558a5.057 5.057 0 0 1 1.473 3.578c0 .306-.027.603-.078.894l.006-.03L16.4 87.997a5.199 5.199 0 0 0 5.148 5.918h.012c.045.003.102.003.156.003.834 0 1.623-.207 2.31-.576l-.027.013 21.397-10.32a6.209 6.209 0 0 1 2.76-.638c1.004 0 1.952.236 2.795.653l-.036-.014 21.08 10.319a4.73 4.73 0 0 0 2.249.56h.033-.003c.051.003.111.003.171.003a5.199 5.199 0 0 0 5.144-5.948l.004.027-3.28-23.998a5.055 5.055 0 0 1 1.4-4.32l16.84-17.557a5.177 5.177 0 0 0 1.448-3.6c0-2.55-1.836-4.67-4.257-5.114l-.033-.006-23.997-4.32a5.301 5.301 0 0 1-3.705-2.768l-.015-.03-11.399-21.44a5.204 5.204 0 0 0-4.593-2.759h-.008L48 2.082Z" fill="#C69C6D"></path>
                                            </svg>
                                        </span>
                                        <span class="svelte-azdvxm">Bronze</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bar svelte-1g2z0q3">
                            <div class="progress-bar svelte-1g2z0q3" style="right: {$profileStore.vip_level ? 100 - $profileStore.vip_level : 100}%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/if}
         
        </div>
    </div>

        <div class="sc-gFSQbh gyJkwe">
            <!-- <Homeanimaton /> -->
            <Homeoriginals />
            <div class="screen-wrap">
                <Biggestwin />
                <Latestbet />
            </div>
        </div>
    </div>

        
<style>
.home-banner{
    width: 100%;
    height: 100%;
    /* display: flex; */
}
.bannner-int{
    display: flex;
    margin: 25px 13px;
}
.bannner-int img{
    width: 100%;
    height: 100%;
    border-radius: 12px;
}

.gyJkwe .screen-wrap {
    max-width: 100%;
    margin: 0px auto;
    padding: 1.25rem 0.625rem;
}


.dark-background.svelte-1p2dszo.svelte-1p2dszo {
    position: relative;
    background-color: rgb(28, 30, 34);
    padding: 10px;
    max-width: 1832px;
    margin: 40px 15px 0 15px;
    border-radius: 10px;
}


.dark-background.svelte-1p2dszo.svelte-1p2dszo:before {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0;
    bottom: 0;
    /* background: red; */
    z-index: -1;
}
.header-wrapper.svelte-1p2dszo.svelte-1p2dszo:not(.is-mobile) {
    /* grid-template-columns: 40% 50%; */
    justify-content: space-between;
   
}
.header-wrapper.svelte-1p2dszo.svelte-1p2dszo {
    display: flex;
    text-align: center;
    position: relative;
    padding: 30px;
}
.vip-progress-wrapper.svelte-1uxrf3q {
    padding-bottom: var(--spacing-1-25);
    width: 100%;
    color: var(--text-color);
}


@media only screen and (max-width: 650px){
    .home-banner{
       margin-top: 110px;
    }
    .bannner-int img{
        width: 100%;
        border-radius: 12px;
    }
    .header-wrapper.svelte-1p2dszo.svelte-1p2dszo {
        display: flex;
        text-align: center;
        position: relative;
        padding: 0px;
    }
    .dark-background.svelte-1p2dszo.svelte-1p2dszo {
    position: relative;
    background-color: rgb(28, 30, 34);
    padding: 10px;
    max-width: 1832px;
    margin: 40px 0px 0 0px;
    border-radius: 10px;
}
    .bannner-int{
        display: flex;
        margin: 25px 3px;
    }
}


.progress-label.svelte-h0vqv3 {
    width: 100%;
}
.progress-heading.svelte-h0vqv3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-1-25);
}

.slide.svelte-1p2dszo.svelte-1p2dszo {
    transition: var(--transition-medium);
    display: flex;
}
.button.variant-link.svelte-1pcg5q8:not(.icon-only) {
    padding: 0;
    height: auto;
}
.button.size-md.svelte-1pcg5q8 {
    font-size: var(--text-size-button-md);
    padding: var(--spacing-button-padding-vertical-md) var(--spacing-button-padding-horizontal-md);
}
.button.align-left.svelte-1pcg5q8 {
    justify-content: flex-start;
}
.button.variant-link.svelte-1pcg5q8 {
    color: var(--color-surface-primary-on-surface);
    background: 0 0;
    box-shadow: var(--shadow-button-sm);
    outline: none;
    box-shadow: none;
}
.button.svelte-1pcg5q8 {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    padding: 0;
    background: 0 0;
    border: none;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
    font-weight: 600;
    touch-action: manipulation;
    position: relative;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
    transition: background-color var(--transition-fast),color var(--transition-fast);
    flex-shrink: 0;
    border-radius: var(--radius-base);
}
.content-or-loader.svelte-kgkwgo {
    display: inline-flex;
    position: relative;
    align-items: center;
}
.button.variant-link.svelte-1pcg5q8:not(.icon-only) .svg-icon {
    transition: color var(--transition-fast);
    color: var(--color-surface-primary-on-surface-variant);
}
.content-or-loader.svelte-kgkwgo>*+* {
    margin-left: var(--spacing-0-5);
}
.svg-icon {
    pointer-events: none;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    flex-shrink: 0;
    display: inline-block;
    width: 1em;
    height: 1em;
}
.percent-label.svelte-h0vqv3 {
    display: flex;
    gap: var(--spacing-0-25);
}
.progress-bar-wrap.svelte-1g2z0q3 {
    position: relative;
    width: 100%;
    margin: var(--spacing-0-5) 0;
}
.milestone-wrap.svelte-1g2z0q3 {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 0;
    bottom: 0;
}
.milestone-outer.orientation-bottom.svelte-3okm3b {
    top: 100%;
}
.milestone-outer.svelte-3okm3b {
    position: absolute;
    text-align: center;
    transform: translate(-50%);
}
.milestone-outer.orientation-bottom.svelte-3okm3b {
    top: 100%;
}
.milestone-outer.svelte-3okm3b {
    position: absolute;
    text-align: center;
    transform: translate(-50%);
}
.milestone-center.orientation-bottom.svelte-3okm3b {
    top: 0;
}
.milestone-center.svelte-3okm3b {
    position: absolute;
    left: 50%;
}
.milestone-center.orientation-bottom.svelte-3okm3b {
    top: 0;
}
.miletone-wrap.svelte-azdvxm.svelte-azdvxm.svelte-azdvxm {
    display: flex;
    align-items: center;
    font-weight: 600;
    white-space: nowrap;
}
span.svelte-azdvxm.svelte-azdvxm.svelte-azdvxm {
    color: var(--grey-200);
    display: inline-block;
}
.svg-icon {
    pointer-events: none;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    flex-shrink: 0;
    display: inline-block;
    width: 1em;
    height: 1em;
}
.bar.svelte-1g2z0q3 {
    position: relative;
    width: 100%;
    height: 1em;
    border-radius: 10px;
    background: #2f4553;
    overflow: hidden;
}
.progress-bar.svelte-1g2z0q3 {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-radius: 10px;
    background: green;
    box-shadow: var(--shadows-lg);
}

.miletone-wrap.svelte-azdvxm>.svelte-azdvxm+.svelte-azdvxm {
    margin-left: 0.5ch;
}

h1.line-height-default.svelte-1d6bfct{
    line-height: 1.5;
    margin-bottom: 20px;
}

h1.text-size-lg.svelte-1d6bfct{
    font-size: var(--text-size-lg);
}
.authenticated-wrapper.svelte-1p2dszo.svelte-1p2dszo {
    width: 100%;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: center;
    padding-left: 20px;
}

@media only screen and (max-width: 650px){
    .authenticated-wrapper.svelte-1p2dszo.svelte-1p2dszo{
        padding-bottom: 25px;
    }
}

.iajVfs .other-group {
    border-radius: 1.75rem;
    background-color: rgba(49, 52, 60, 0.5);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .iajVfs .other-group button {
    display: flex;
    height: 3.5rem;
    width: 3.5rem;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

.iajVfs .other-group svg {
    width: 2.25rem;
    height: 2.25rem;
}
.head-string{
    width: 100%;
    padding: 20px;
}
.head-string .title{
    padding: 20px 0;
}
.head-string .seperate{
    width: 90%;
    display: flex;
    align-items: center;
    justify-self: center;
    margin: 15px;
}
.seperate:before, .seperate:after {
    content: "";
    display: inline-flex;
    height: 1px;
    background: grey;
    flex: 1;
}

.seperate span{
    padding: 0 10px;
}

.iajVfs{
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
}

</style>