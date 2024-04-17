<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher()

const handleGoBack = (()=>{
    dispatch("close", 9)
})

</script>

<button on:click={()=> history.back()} class="dialog-back" style="opacity: 1; transform: none;">
    <Icon src={RiSystemArrowLeftSLine}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
</button>
<div class="dialog-head has-back has-close">
    <div class="dialog-title">Reset Password</div>
</div>
<button on:click={()=> handleGoBack() } class="sc-ieecCq fLASqZ close-icon dialog-close">
    <Icon src={IoCloseSharp}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
</button>
<div class="dialog-body default-style" style="z-index: 2; transform: none;">
    <div class="sc-dkPtRN jScFby scroll-view sc-eoHXOn iDSHOY">
        <div class="sc-ezbkAF kDuLvp input input">
            <div class="input-label">Registered Email Address.</div>
            <div class="input-control">
                <input type="text" autocomplete="off" value="">
            </div>
        </div>
        <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
            <div class="button-inner">Reset Password</div>
        </button>
    </div>
</div>


<style>

.iDSHOY .input {
    margin-top: 0.5rem;
}

.iDSHOY .button {
    width: 20rem;
    margin: 2.5rem auto;
}

</style>
