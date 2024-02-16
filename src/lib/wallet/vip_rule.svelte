<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher()

</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="sc-dlVxhl gvBCkE" style="transform: scale(1); opacity: 1;">
        <div class="pop sc-hKumaY bGUCEb" id="">
            <button on:click={()=> dispatch("close")} class="pop-close">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_Close"></use>
                </svg>
            </button>
            <div class="sc-faIbUi bGuvOe jb-prompt">
                <div class="txt">Unlock at VIP22. 1000000 WGF can deduct 1 USD transaction fee. One chance only per day. Prices in cryptocurrencies are calculated using the real time exchange rates at the time of conducting the transaction.</div>
                <div class="balance">Your WGF Balance:&nbsp;<span>445 WGF</span>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.gvBCkE {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0px;
    height: 0px;
}

.gvBCkE .pop {
    transform: translate(-50%, -50%);
    min-width: 420px;
    min-height: 370px;
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 1.25rem;
    position: relative;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
    font-size: 0.8125rem;
    padding: 1.25rem;
}
.gvBCkE .pop-close .icon {
    transition: all 0.5s ease 0s;
    width: 1rem;
    height: 1rem;
    transform: rotate(0deg);
}
.hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
}

.gvBCkE > div {
    transform: translate(-50%, -50%);
}
.bGUCEb {
    color: rgba(153, 164, 176, 0.6);
    position: relative;
}
.gvBCkE .pop-close {
    position: absolute;
    right: 0.3125rem;
    top: 0.3125rem;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.625rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    z-index: 1;
}
.bGuvOe {
    padding: 1.25rem 0px;
    border-radius: 0.1875rem;
    font-size: 0.875rem;
}
.bGuvOe .balance span {
    color: rgb(67, 179, 9);
}
.bGUCEb.pop {
    width: 26.25rem;
    min-height: 18.75rem;
}
</style>
