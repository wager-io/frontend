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
                <div class="sc-eCImPb cuPxwd empty ">
                    <div class="opps-msg"> Oops!</div>
                    <div class="msg"> There is no data yet!</div>
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
