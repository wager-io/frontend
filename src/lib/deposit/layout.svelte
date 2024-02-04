<script>
import { screen} from "$lib/store/screen";
import Crypto from './Crypto.svelte';
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher()

const handleCancel = (()=>{
   dispatch("close")
})

</script>

<div class="sc-bkkeKt kBjSXI">
    <div class="dialog " style={`${$screen < 650 ? "transform: scale(1) translateZ(0px);" : "opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px;"}  `}>
      <div class="ui-dialog su96gxq" style="opacity: 1; visibility: visible; transform: translateX(0%) scale(1) translateZ(0px);">
         <div class="dialog-head has-close">
            <div class="dialog-title">Deposit</div>
         </div>
         <button on:click={handleCancel} class="sc-ieecCq fLASqZ close-icon dialog-close">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Close"></use>
            </svg>
         </button>
         <div class="ui-tabs tabs-circle">
            <div class="tabs-scroll">
            </div>
            <div class="tabs-view" style="transform: none;">
                <Crypto />
            </div>
         </div>
      </div> 
      

   </div>
</div>

<style>

@media only screen and (max-width:650px){
 .ui-dialog {
    position: absolute;
    right: 0;
    top: 0;
    height: 720px;
    max-height: 90vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--7h9g04);
}
}

@media only screen and (min-width:650px){
 .ui-dialog {
    position: absolute;
    right: 0;
    top: 0;
    height: 720px;
    max-height: 90vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--7h9g04);
}
}

.dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0;
    font-weight: 700;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: var(--autofill-color);
    line-height: 1;
}

.su96gxq {
    --1yhspeg: rgba(95,105,117,.8);
    --1ek0mmx: rgba(218,221,230,.5);
    --1b41co8: #F5F6FA;
    --1x7g4w8: #DADDE6;
    --1q3am70: #ffffff;
    --157d7l0: #F6F7FA;
    --1m9vfxv: rgba(0,0,0,.2);
    color: var(--1yhspeg);
}
.su96gxq {
    --1yhspeg: rgba(153,164,176,.6);
    --1ek0mmx: #1e2024;
    --1b41co8: #17181B;
    --1x7g4w8: #2A2E33;
    --1q3am70: #1f2024;
    --157d7l0: #1E2024;
    --1m9vfxv: rgba(0,0,0,.5);
}
.ui-dialog>div:last-child {
    /* padding: 1.25rem; */
    background-color: #1e2024;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.su96gxq .tabs-scroll {
    padding: 0 2.125rem 0.9375rem;
    background-color: #17181b;
}

.ui-tabs {
    padding: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
.su96gxq.ui-dialog>.ui-tabs .tabs-view {
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    height: 1px;
    padding-top: 1rem;
}
@media only screen and (min-width:650px){
    .su96gxq.ui-dialog>.ui-tabs .tabs-view {
        width: 470px;
    }
}
.tabs-circle .tabs-view {
    position: relative;
}

</style>