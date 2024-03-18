<script>
import "../styles/home/index.css"
import "../styles/home/indexmobile.css"
import Biggestwin from "$lib/homecomponents/biggestwin.svelte";
import { register } from 'swiper/element/bundle';
import Homeoriginals from '$lib/homecomponents/homeoriginals.svelte';
import Latestbet from '$lib/homecomponents/latestbet.svelte';
import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen";
import { profileStore } from "$lib/store/profile";
import { default_Wallet, coin_list } from "$lib/store/coins";
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
            <div class="banner-body">
                <div class="banner-title">
                    Welcome to
                    <br>
                    <span>Wager</span>
               </div>
     
          {#if !$handleAuthToken}
              <div class="header-wrapper svelte-1p2dszo">
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
                                  <path fill="#fff"  d="M19.5 12.3c-.5-.5-1.1-.9-1.8-1a4.8 4.8 0 00-2-.2c-.9 0-1.7.4-2.3 1a5 5 0 00-2 4 5 5 0 004 4.8 5 5 0 001.6 0c.8 0 1.6-.3 2.2-.7.5-.4 1-.9 1.2-1.4l.3-.9v-.2h-4.4v-3.2h7.5l.2.1.1 1v1.2c0 .5 0 1-.2 1.6v-.1a7.4 7.4 0 01-1.4 3 7 7 0 01-3 2.4h-.1c-.6.2-1.2.4-1.9.4a8.8 8.8 0 01-1.9 0c-.8 0-1.5-.1-2.2-.4-.9-.4-1.6-.8-2.3-1.4-1-.8-1.9-2-2.4-3.2l-.5-1.9v-1.4-.1c0-.9.2-1.7.4-2.5.3-.7.7-1.4 1.2-2 1-1.4 2.5-2.5 4.3-3l1.5-.3a11.1 11.1 0 011.3 0 7.7 7.7 0 014.8 2l-.1.3-2 2h-.1z"></path>
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
          </div>
      {/if}
            </div>
         
           <div class="banner-image">
                <img src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1709933868/The-Impact-of-Cryptocurrency-on-the-Gambling-Industry-removebg-preview_t1i24y.png" alt="">
           </div>
        </div>       
    </div>
   

    <!-- {#if !$handleAuthToken}
        <div class="dark-background svelte-1p2dszo">
            <div class="header-wrapper svelte-1p2dszo">
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
                                <path fill="#fff"  d="M19.5 12.3c-.5-.5-1.1-.9-1.8-1a4.8 4.8 0 00-2-.2c-.9 0-1.7.4-2.3 1a5 5 0 00-2 4 5 5 0 004 4.8 5 5 0 001.6 0c.8 0 1.6-.3 2.2-.7.5-.4 1-.9 1.2-1.4l.3-.9v-.2h-4.4v-3.2h7.5l.2.1.1 1v1.2c0 .5 0 1-.2 1.6v-.1a7.4 7.4 0 01-1.4 3 7 7 0 01-3 2.4h-.1c-.6.2-1.2.4-1.9.4a8.8 8.8 0 01-1.9 0c-.8 0-1.5-.1-2.2-.4-.9-.4-1.6-.8-2.3-1.4-1-.8-1.9-2-2.4-3.2l-.5-1.9v-1.4-.1c0-.9.2-1.7.4-2.5.3-.7.7-1.4 1.2-2 1-1.4 2.5-2.5 4.3-3l1.5-.3a11.1 11.1 0 011.3 0 7.7 7.7 0 014.8 2l-.1.3-2 2h-.1z"></path>
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
        </div>
    </div>
    {/if} -->
 

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
.banner-body{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 30px 85px;
}
.bannner-int{
    position: relative;
    display: flex;
    padding: 10px;
    max-width: 1832px;
    margin: 40px 15px 0 15px;
    border-radius: 10px;
    background: linear-gradient(94.02deg, #010010 -0.67%, rgba(169, 44, 180, 0.61) 69.91%, #010010 116.81%);
}
.banner-title{
    color: #ffff;
    font-size: 32px;
    font-weight: 800;
    width: 100%;
    line-height: 50px;
    padding-bottom: 20px;
}

.banner-title span{
    font-size: 64px;
    font-weight: 800;
    background: linear-gradient(86.06deg, #BE5EF8 17.3%, #B2C730 62.22%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.banner-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.banner-image img{
   width: 25rem;
}



.gyJkwe .screen-wrap {
    max-width: 100%;
    margin: 0px auto;
    padding: 1.25rem 0.625rem;
}

.header-wrapper.svelte-1p2dszo.svelte-1p2dszo:not(.is-mobile) {
    /* grid-template-columns: 40% 50%; */
    justify-content: space-between;
}

.header-wrapper.svelte-1p2dszo.svelte-1p2dszo {
    display: flex;
    text-align: center;
    position: relative;
}

@media only screen and (max-width: 650px){
    .home-banner{
       margin-top: 110px;
    }
    .header-wrapper.svelte-1p2dszo.svelte-1p2dszo {
        display: flex;
        text-align: center;
        position: relative;
        padding: 0px;
    }
    .bannner-int{
        display: flex;
        flex-direction: column;
        margin: 25px 3px;
    }
    .banner-body{
        display: flex;
        flex-direction: column;
        width: 95%;
        margin: 30px 15px;
    }
}
@media only screen and (max-width: 400px){
.banner-title{
    color: #ffff;
    font-size: 22px;
    text-align: center;
    font-weight: 800;
    width: 100%;
    line-height: 50px;
    padding-bottom: 20px;
}
.banner-title span{
    font-size: 33px;
    font-weight: 800;
    background: linear-gradient(86.06deg, #BE5EF8 17.3%, #B2C730 62.22%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.banner-image img{
   width: 17rem;
}
}

@media only screen and (min-width: 650px){
.banner-image img {
  position: relative;
  animation-name: example;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

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
    background: #607886;
    overflow: hidden;
}
.progress-bar.svelte-1g2z0q3 {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-radius: 10px;
    background-color: rgb(98, 64, 177);
    background-image: conic-gradient(
        from 1turn,
        #9900CC,
        rgb(98, 64, 177)
    );
    box-shadow: var(--shadows-lg);
}

.miletone-wrap.svelte-azdvxm>.svelte-azdvxm+.svelte-azdvxm {
    margin-left: 0.5ch;
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
}
.head-string .title{
    padding: 10px 0;
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