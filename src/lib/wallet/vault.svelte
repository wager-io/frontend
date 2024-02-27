<script>
import Loader from "../components/loader.svelte";
$: isloading = true
setTimeout(() => {
    isloading = false
}, 4000)
</script>

<div class="sc-dkPtRN jScFby scroll-view sc-bhnkmi geJgoF">
    <div class="sc-bjztik fxFgHv">
        <div class="sc-bePbDJ kLHhQw">
            {#if isloading}
            <div style="height: 300px;">
                <Loader />
            </div>
            {:else}
            <div class="sc-lhMiDA ePAxUv">
                <div class="sc-eCImPb cuPxwd  full-abs">
                    <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
                    <div class="msg">Sorry, Page not available! </div>
                </div>
            </div>
            {/if}
        </div>
    </div>
</div>

<style>
.geJgoF {
    flex: 1 1 auto;
    position: relative;
}

.fxFgHv {
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
    position: relative;
    padding: 0.625rem;
}
</style>
