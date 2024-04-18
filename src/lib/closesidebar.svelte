<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import AiOutlineHome from "svelte-icons-pack/ai/AiOutlineHome";
import AiOutlineAliwangwang from "svelte-icons-pack/ai/AiOutlineAliwangwang";
import FaSolidDice from "svelte-icons-pack/fa/FaSolidDice";
import AiOutlineCrown from "svelte-icons-pack/ai/AiOutlineCrown";
import VscLaw from "svelte-icons-pack/vsc/VscLaw";
import FaSolidStarHalfAlt from "svelte-icons-pack/fa/FaSolidStarHalfAlt";
import BiTimeFive from "svelte-icons-pack/bi/BiTimeFive";

import AiFillGift from "svelte-icons-pack/ai/AiFillGift";
import Original from "./original.svelte";
import {
    goto
} from "$app/navigation";

export let styls;
export let routes;

let showOriginals = false
const openOriginal = ((e) => {
    if (e) {
        showOriginals = true
    } else {
        showOriginals = false
    }
})
</script>

<div class="sc-jHkVzv eTxQfM fold">
    <div class="small-sidebar hidden-scroll-y">
        <div class="sc-bilyIR ioXbGd">
            <div class="tab-more">
                <div class="tab-item select small-icon">
                    <img alt="icon" src="https://static.nanogames.io/assets/casino.8f220c2c.png">
                </div>
            </div>
        </div>
        <button on:click={()=> goto("/")} class={`sc-iNGGcK knLCVT menu-item ${routes.route === "/" ? "select" : ""}`}>
            <div class="menu-mobile">
                <Icon src={AiOutlineHome}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            </div>
        </button>
        <button on:mouseenter={()=> openOriginal(1)} on:mouseleave={()=> openOriginal(0)} class="sc-iNGGcK sc-eJwWfJ knLCVT beCBEn menu-item">
            <div class={`sc-iNGGcK sc-eJwWfJ knLCVT beCBEn menu-item menu-mobile ${routes.route === "/(games)/crash" ||  routes.route === "/(games)/mines" ||
                routes.route === "/(games)/classic-dice" || routes.route === "/(games)/plinko"|| routes.route === "/(games)/tower" || routes.route === "/(games)/hilo" || routes.route === "/(games)/diamonds"  ? "select" : ""}`}>
                <Icon src={FaSolidDice}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            </div>
            <div style="margin-left: -1.125rem; margin-right: 0.25rem; margin-top: -0.1rem;">
                <Icon src={RiSystemArrowRightSLine}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" title="arror" />
            </div>
            {#if (showOriginals)}
            <Original styls={styls} />
            {/if}
        </button>
        <button on:click={()=> goto("/lottery")} class={`sc-iNGGcK knLCVT menu-item ${ routes.route === "/lottery" ? "select" : ""}`}>
            <div class="menu-mobile">
                <Icon src={AiOutlineAliwangwang}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            </div>
        </button>
        <!-- <button disabled={true} on:click={()=> goto("/affiliate")} class={`sc-iNGGcK knLCVT menu-item ${routes.route ==="/affiliate" ? "select" : ""}`}>
            <div class="menu-mobile">
                <Icon src={VscLaw}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            </div>
        </button> -->
        <button on:click={()=> goto("/vip-games")} class={`sc-iNGGcK knLCVT menu-item special-nav vip ${ routes.route === "/vip-games" ? "select" : ""}`}>
            <div class="menu-mobile">
                <Icon src={AiOutlineCrown}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            </div>
        </button>
        <button on:click={()=> goto("/help/provably-fair")} class={`sc-iNGGcK knLCVT menu-item ${routes.route === `/help/agreement` || routes.route === `/help/provably-fair` ||
            routes.route === `/help/coinlimit` || routes.route === `/help/contactus` || routes.route === `/help/fee`  || routes.route === `/help/googlecheck`  || routes.route === `/help/faq`  || routes.route === `/help/passcurrency` ||
            routes.route === `/help/privacy` || routes.route === `/help/reglog` || routes.route === `/help/swappolicy` || routes.route === `/help/terms-service`
            ? "select" : ""}`} >
            <div class="menu-mobile">
                <Icon src={VscLaw}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            </div>
        </button>
        <div class="sc-eGPXGI kCbnNh"></div>
        <button on:click={()=> goto("/favourite")} class={`sc-iNGGcK knLCVT menu-item ${routes.route === "/favourite" ? "select" : ""}`}>
            <div class="menu-mobile">
                <Icon src={FaSolidStarHalfAlt}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            </div>
        </button>
        <button on:click={()=> goto("/recent-play")} class={`sc-iNGGcK knLCVT menu-item  ${routes.route === "/recent-play" ? "select" : ""}`}>
            <div class="menu-mobile">
                <Icon src={BiTimeFive}  size="23"  color="rgba(153, 164, 176, 0.8)" />
            </div>
        </button>
        <div class="line line-fold"></div>
        <div class="sc-evcjhq jzXtuE">
            <div class="fold-lan">
                <span class="ttu">en</span>
            </div>
        </div>
    </div>
</div>

<style>
.eTxQfM.fold {
    width: 76px;
}

.eTxQfM button {
    color: rgba(153, 164, 176, 0.8);
}

.eTxQfM {
    position: fixed;
    z-index: 202;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 240px;
    color: rgba(153, 164, 176, 0.8);
    background-color: black;
    transition: all 0.2s linear 0s;
}

.eTxQfM .small-sidebar {
    width: 76px;
    height: 100%;
    overflow: hidden;
}

.ioXbGd {
    margin-top: 0.4375rem;
    margin-bottom: 0.4375rem;
    border-bottom: 1px solid rgba(49, 52, 60, 0.6);
    width: 100%;
    height: 3.25rem;
    box-sizing: content-box;
    padding-bottom: 1rem;
    padding-left: 0.625rem;
}

.ioXbGd .tab-more {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid transparent;
    width: 3.25rem;
    height: 3.25rem;
    position: absolute;
    z-index: 10;
    padding: 0.1875rem;
}

.ioXbGd .tab-more .tab-item.select {
    background-color: rgb(18 18 20);
}

.ioXbGd .tab-more .tab-item {
    display: flex;
    flex: 0 0 auto;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 17px;
    overflow: hidden;
}

.ioXbGd .tab-more .tab-item img {
    width: 2.125rem;
    height: 2.125rem;
    display: inline-block;
    vertical-align: top;
}

.knLCVT {
    width: 100%;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.875rem;
}

.knLCVT.select .menu-mobile {
    border: 1px solid var(--primary-color);
}

.knLCVT .menu-mobile {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px auto 0.5rem;
}

.kCbnNh {
    border-bottom: 1px solid rgba(49, 52, 60, 0.6);
    margin: 1rem 0.625rem 1.25rem;
}

.jzXtuE .fold-lan {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    margin: 0px auto 1rem;
}

.jzXtuE .fold-lan {
    margin-top: 1rem;
}

.jzXtuE .fold-lan span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: rgb(45, 48, 53);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.jzXtuE .fold-lan span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: rgb(45, 48, 53);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
}


.eTxQfM::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 0px;
    width: 0.75rem;
    height: 100%;
    pointer-events: none;
    background-image: linear-gradient(to right, rgb(4, 4, 4), rgba(36, 38, 43, 0));
    opacity: 0.1;
    z-index: -1;
}
</style>
