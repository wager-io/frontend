<script>
import { goto } from "$app/navigation"
import '../styles/index.css'
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import Games from '../components/games.svelte';
import { createEventDispatcher } from 'svelte'

import AiOutlineHome from "svelte-icons-pack/ai/AiOutlineHome";
import AiOutlineAliwangwang from "svelte-icons-pack/ai/AiOutlineAliwangwang";
import FaSolidDice from "svelte-icons-pack/fa/FaSolidDice";
import AiOutlineCrown from "svelte-icons-pack/ai/AiOutlineCrown";
import VscLaw from "svelte-icons-pack/vsc/VscLaw";
import FaSolidStarHalfAlt from "svelte-icons-pack/fa/FaSolidStarHalfAlt";
import BiTimeFive from "svelte-icons-pack/bi/BiTimeFive";


const dispatch = createEventDispatcher()

const handleMenu = (()=>{
    dispatch("menu")
})

let isGames = true 
const handleOriginals = (()=>{
    if(isGames){
        isGames = false
    }else{
        isGames = true
    }
})

const handleGames = ((e)=>{
    goto(e.detail)
    dispatch("menu")
})

const handleNavigation = ((e) => {
    goto(e)
    dispatch("menu")
})

</script>

<div class="sc-fXEqDS hZgDyO">
    <div id="sidebar" class="sc-xiLah beBixG">
        <div class="mobile-sidebar-top-tab">
            <div class="sc-uojGG hksQGj">
                <button on:click={handleMenu}>
                    <span  class="close-wrap">
                        <Icon src={IoCloseSharp} color="rgba(153, 164, 176, 0.6)" size="35" className="custom-icon" title="Custom icon params" />
                    </span>
                </button>
            </div>
        </div>
        <button on:click={()=>handleNavigation("/")} class="nav-item"> 
            <Icon src={AiOutlineHome}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            <div class="nav-right">Home</div>
        </button>

        <button class="nav-item" on:click={handleOriginals}>
                <Icon src={FaSolidDice}  size="18"  color="rgba(153, 164, 176, 0.8)" />
                <div class="nav-right">Wager Originals</div>
                <Icon src={RiSystemArrowRightSLine} color="rgba(153, 164, 176, 0.6)" size="27" className="sc-gsDKAQ hxODWG icon open-icon open" title="Custom icon params" />
        </button>

        <!-- =================== Games ============================ -->
        {#if (isGames)}
            <Games on:dipla={handleGames} />
        {/if}
        <button on:click={()=>handleNavigation("/lottery")}  class="nav-item">
            <Icon src={AiOutlineAliwangwang}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            <div class="nav-right">Lottery</div>
        </button>
        <button on:click={()=>handleNavigation("/vip-games")} class="nav-item special-nav vip">
            <Icon src={AiOutlineCrown}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            <div class="nav-right">VIP Club</div>
        </button>

        <button on:click={()=>handleNavigation("/help/provably-fair")} class="nav-item">
            <Icon src={VscLaw}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            <div class="nav-right">Provably Fair</div>
        </button>
        <div  class="sc-eGPXGI kCbnNh"></div>
        <button on:click={()=>handleNavigation("/favourite")} class="nav-item">
            <Icon src={FaSolidStarHalfAlt}  size="18"  color="rgba(153, 164, 176, 0.8)" />
            <div class="nav-right">Favorite Games</div>
        </button>

        <button on:click={()=>handleNavigation("/recent-play")} class="nav-item">
            <Icon src={BiTimeFive}  size="23"  color="rgba(153, 164, 176, 0.8)" />
            <div class="nav-right">Recent Play</div>
        </button>

        <!-- <div class="theme-live border_top">
            <div class="sc-gSQFLo dprxuS theme">
                <div class="theme-check">
                    <div class="item is-active">
                        <Icon src={IoMoon} color="rgba(153, 164, 176, 0.6)" size="17" className="sc-gsDKAQ hxODWG icon open-icon open" title="Custom icon params" />
                    </div>
                    <div class="item">
                        <Icon src={HiSolidLightBulb} color="rgba(153, 164, 176, 0.6)" size="17" className="sc-gsDKAQ hxODWG icon open-icon open" title="Custom icon params" />
                    </div>
                </div>
                <div class="theme-word">
                    <p>Darkmode</p>
                    <p>Currently</p>
                </div>
            </div>
            <div class="live">
                <div class="support-icon">
                    <Icon src={FaSolidHeadphones} color="#fff" size="17" className="sc-gsDKAQ hxODWG icon open-icon open" title="Custom icon params" />
                </div>
                <span>Live Support</span>
            </div>
        </div> -->

        <!-- <div class="language border_top">
            <span>Language Options</span>
            <div class="sc-jJoQJp gOHquD select  sc-dVNjXY bfVniQ">
                <div class="select-trigger">
                    English
                    <div class="arrow top">
                        <Icon src={RiSystemArrowRightSLine} color="rgba(153, 164, 176, 0.6)" size="17" className="sc-gsDKAQ hxODWG icon open-icon open" title="Custom icon params" />
                    </div>
                </div>
            </div>
        </div> -->

        <div class="network border_top">
            <span>Social Media</span>
            <div class="sc-XxNYO hNXSBx social-links">
                <a class="telegram" href="https://t.me/NanoGamesOfficial" target="_blank">
                    <img src="https://static.nanogames.io/assets/Telegram.f76d7c46.svg" class="telegram" alt="">
                </a>
                <a class="github" href="https://github.com/NanoGamesio/crash/" target="_blank">
                    <img src="https://static.nanogames.io/assets/Github.87e42b3d.svg" class="github" alt=""></a>
                <a class="twitter" href="https://twitter.com/nanogamesio?lang=en" target="_blank">
                    <img src="https://static.nanogames.io/assets/Twitter.ec46be69.svg" class="twitter" alt=""></a>
                <a class="discord" href="https://discord.gg/5sWsU4d" target="_blank">
                    <img src="https://static.nanogames.io/assets/Discord.cbf05e6a.svg" class="discord" alt=""></a>
            </div>
        </div>
    </div>
</div>


<style>
.sc-uojGG.hksQGj{
    width: 100%;
    margin-bottom: auto;
    position: fixed;
}

</style>