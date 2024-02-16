<script>
import Loader from "../components/loader.svelte";
$: isloading = true
setTimeout(()=>{
    isloading = false
}, 4000)

</script>

{#if isloading}
    <div style="height: 300px;">
        <Loader />
    </div>
    {:else}
    <div class="sc-lhMiDA ePAxUv">
        <div class="sc-eCImPb cuPxwd empty full-abs">
            <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
            <div class="msg">Sorry, Page not available! </div>
        </div>
    </div>
{/if}




<style>
   
</style>