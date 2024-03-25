<script>
import { profileStore } from "$lib/store/profile"
import { handleAuthToken } from "$lib/store/routes";
import { useChangeUsername } from "$lib/firebaseAuth/createUser"
import { goto } from "$app/navigation";
import { url } from "$lib/store/routes";
import Loader from "../components/loader.svelte";
$: profile_pic = $profileStore.profile_image
let username = $profileStore.username
$: is_loading = false
$: track = is_loading || !profile_pic || (username && username.length > 17) ||(username && username.length < 2)

const handleSubmit = (async()=>{
    is_loading = true
   let response = await useChangeUsername({profile_image:profile_pic, username}, $handleAuthToken)
   is_loading = response.is_loading
   if(response.response){
        profileStore.set(response.response)
        goto($url)
   }
})
$: image = $profileStore.profile_image

</script>


<div class="dialog-body default-style " style="z-index: 2; transform: none;">
    {#if is_loading}
        <Loader />
    {:else}
        <div class="sc-dkPtRN jScFby scroll-view sc-eTwdGJ bUoqwc">
            <div class="flex-column full">
                <div class="avatar-box">
                    {#if image.color}
                    <div class="avatar "
                        style={`background-color:${image.color}; width:10.5rem; height:10.5rem;   border-radius: 50%; align-items: center; display: flex; color: #fff;  justify-content: center; font-weight: 700;  font-size: 14px; text-transform: capitalize;`}>
                            {$profileStore.username?.charAt(0) ? $profileStore.username.charAt(0) : ""}
                        </div>
                    {:else}
                        <img class="avatar " alt="" src={image.image ? image.image : ""}>
                    {/if}
                    <!-- <img class="avatar " alt="" src={profile_pic}> -->
                    <!-- <button on:click={()=> goto(`${$url === "/" ? "" : $url}/?tab=profile&id=${$profileStore.user_id}&modal=avatar`)}>Edit Your Avatar</button> -->
                </div>
                <div class="dialog-box">
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-label">Username </div>
                        <div class="input-control">
                            <input type="text" autocomplete="off" placeholder="2-16 characters" bind:value={username}>
                        </div>
                    </div>
                    <div class="tip-warnning">Do not use special punctuation, otherwise your account may not be supported.</div>
                    <button disabled={track} on:click={handleSubmit} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                        <div class="button-inner">Modify</div>
                    </button>
                </div>
            </div>
        </div>
    {/if}
  
</div>

<style>
.default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
}
.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}
.default-style > div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}
.dialog-body > div {
    flex: 1 1 0%;
}
.bUoqwc {
    min-height: 100%;
}
.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.full {
    min-width: 100%;
    min-height: 100%;
}
.flex-column {
    display: flex;
    flex-direction: column;
}
.bUoqwc .avatar-box {
    width: 10.625rem;
    height: 10.625rem;
    margin: 2.5rem auto 4rem;
    position: relative;
    cursor: pointer;
}
.bUoqwc .avatar-box .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 0.25rem solid rgba(151, 151, 151, 0.15);
}
.bUoqwc .avatar-box button {
    position: absolute;
    left: 50%;
    white-space: nowrap;
    bottom: -0.875rem;
    transform: translateX(-50%);
    height: 2.25rem;
    border-radius: 1.125rem;
    padding: 0px 0.875rem;
    color: rgb(255, 255, 255);
    background-color: rgba(49, 52, 60, 0.6);
}
.bUoqwc .dialog-box {
    flex: 1 1 0%;
}
.dialog-box {
    color: rgba(153, 164, 176, 0.6);
    background-color: rgb(30, 32, 36);
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    padding: 1.75rem 1.125rem;
}
.kDuLvp {
    margin-top: 1rem;
}
.bUoqwc .tip-warnning {
    margin: 0.625rem 0.75rem;
    font-size: 0.75rem;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}
.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
}
.kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
}
</style>
