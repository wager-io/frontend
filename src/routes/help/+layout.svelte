<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import VscLaw from "svelte-icons-pack/vsc/VscLaw";
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import Help from "$lib/help.svelte";
import "../../styles/helpcenter/main/index.css"
import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen";
import { goto } from "$app/navigation"
import { routes } from "$lib/store/routes"

let active_route = ""
$: is_open = false

let routesEl = [
    {id:1, name: "Provably fair", route: "provably-fair", active: $routes.route === "/help/provably-fair" ? true : false},
    {id:1, name: "User Agreement", route: "agreement", active: $routes.route === "/help/agreement" ? true :false},
    {id:1, name: "Coin Accuracy Limit", route: "coinlimit", active: $routes.route === "/help/coinlimit" ? true :false},
    {id:1, name: "Support", route: "contactus", active: $routes.route === "/help/contactus" ? true :false},
    {id:1, name: "Fee", route: "fee", active: $routes.route === "/help/fee" ? true :false},
    {id:1, name: "Google Authenticator", route: "googlecheck", active: $routes.route === "/help/googlecheck" ? true :false},
    {id:1, name: "FAQ", route: "faq", active: $routes.route === "/help/faq" ? true :false},
    {id:1, name: "Cryptocurrency", route: "passcurrency", active: $routes.route === "/help/passcurrency" ? true :false},
    {id:1, name: "Privacy Policy", route: "privacy", active: $routes.route === "/help/privacy" ? true :false},
    {id:1, name: "Registration and Login", route: "reglog", active: $routes.route === "/help/reglog" ? true :false},
    {id:1, name: "WAGERSwap Policy", route: "swappolicy", active: $routes.route === "/help/swappolicy" ? true :false},
    {id:1, name: "Terms of Service", route: "terms-service", active: $routes.route === "/help/terms-service" ? true :false},
]

routesEl.forEach(element => {
    if(element.route === "provably-fair"){
        active_route = element
    }
});

const handleRoutes = ((route)=>{
    goto(`${route}`)
    routesEl.forEach(element => {
        if(element.route === route){
                active_route = element
                element.active = true
        }else{
            element.active = false
        }
        routesEl = routesEl
    });
    is_open = false
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

<div class="sc-lhMiDA ePAxUv {$screen > 650 ? $is_open__Appp ? "is-open" : "" : ""}  {$screen > 650 ?  $is_open__chat ? "is-chat" : "" : ""}">
    <div id="helpcenter">
        <div class="sc-hKumaY dUhyFv">
            <p class="title">
                <Icon src={VscLaw}  size="24"  color="rgb(67, 179, 9)" className="custom-icon" title="arror" />
                <span class="ttc">help center</span>
            </p>
            <button on:click={()=> goto('/')} class="sc-ieecCq fLASqZ close-icon ">
                <Icon src={IoCloseSharp}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>
        </div>
        {#if newScreen < 700}
        <div class="sc-jJoQJp gOHquD select {is_open ? "is-open" : ""} ">
            <button on:click={()=> is_open =! is_open} class="select-trigger">
                {active_route.name}
                <div class="arrow ">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                        <use xlink:href="#icon_Arrow"></use>
                    </svg>
                </div>
            </button>
            {#if is_open}
                <div class="sc-hiCibw iVwWcQ select-options-wrap" style="opacity: 1; top: 100%; transform: none;">
                    <div class="sc-dkPtRN jScFby scroll-view select-options len-13">
                        {#each routesEl as route}
                            <button on:click={()=> handleRoutes(route.route)} class="select-option {route.active ? "active" : ""}">{route.name}</button>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    {/if}
        <div class="sc-GEbAx hJFGXE pc">
            <div class="content-area">
                {#if newScreen > 700}
                    <Help />
                {/if}
                <div class="right-info">
                    <div style="transform: translate3d(0px, 0px, 0px); opacity: 1;">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.ePAxUv.is-open{
    padding-left: 50px;
}
.ePAxUv.is-chat{
    padding-right:360px;
}

 .select {
    width: 100%;
    padding-left: 0.5rem;
}
.gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
}
.select .select-trigger {
    width: 15rem;
    border-radius: 1.25rem;
    font-size: 1rem;
    color: rgb(245, 246, 247);
    font-weight: bold;
    background-color: rgba(49, 52, 60, 0.6);
}

.hJFGXE{
    margin-top: 0.875rem;
    border-radius: 1.25rem;
    margin-bottom: 2.25rem;
    min-height: 40vh;
}
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
    width: 100%;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
}
.iVwWcQ .select-options:not(.len-1) > .active {
    border-color: rgba(91, 174, 28, 0.4);
}
.select .select-options .select-option {
    height: 2.25rem;
    margin-top: 0.75rem;
    font-size: 0.875rem;
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