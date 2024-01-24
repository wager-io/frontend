<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher()

const handleCLose = ((type)=>{
    dispatch("close", type)
})
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="sc-dlVxhl gvBCkE" style="transform: scale(1); opacity: 1;">
        <div class="sc-hGPBjI hyKsfV">
            <div class="message">
                Sorry! You need set up a new seed before validating the data (the server seed is encrypted)
            </div>
            <div class="btns">
                <button on:click={()=>handleCLose("cancel")} class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal cancle">
                    <div class="button-inner">Cancel</div>
                </button>
                <button on:click={()=>handleCLose("confirm")} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal light">
                    <div class="button-inner">Confirm</div>
                </button>
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
.gvBCkE > div {
    transform: translate(-50%, -50%);
}
.hyKsfV {
    width: 26.25rem;
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.125rem 1.25rem 0px;
}
.hyKsfV .message {
    font-size: 1rem;
    line-height: 1.25rem;
    min-height: 12.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 1.875rem;
    text-align: center;
}
.hyKsfV .btns {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 0px 2.5rem;
}
.hyKsfV .message {
    font-size: 1rem;
    line-height: 1.25rem;
    min-height: 12.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 1.875rem;
    text-align: center;
}
.hyKsfV .btns button {
    width: 9.375rem;
    height: 2.75rem;
    margin-right: 1rem;
}
.gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
}
</style>
