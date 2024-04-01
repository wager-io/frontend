<script>
import { handleFetchSecurity, handleVerifySecurity } from "./hook"
import { onMount } from "svelte"
$:  Onfocus = false
$: input = ""
$: isLoading = false
$: track = isLoading || !input || input.length < 6
$: key = ""
$: qrCOde = ""
$: error_msg = ""
$: results = ""


onMount(async()=>{
    const { response } = await handleFetchSecurity()
    if(response){
        key = response?.key
        qrCOde = response?.qrCode
    }
})

const handleSubmit = (async()=>{
    isLoading = true
    const {response, error, Loading } = await handleVerifySecurity(input)
    isLoading = Loading
    if(error){
        error_msg = error
        setTimeout(()=>{
            error_msg= ""
        },2000)
    }
    if(response){
        results = response?.message
    }
    input = ""
})

</script>

{#if error_msg}
<div style="background-color:crimson;" class="error-message">
  <div class="hTTvsjh">
    <div>{error_msg}</div>
  </div>
</div>
{/if}
{#if results}
    <div class="error-message">
        <div class="hTTvsjh">
            <div>{results}</div>
        </div>
    </div>
{/if}
<div class="sc-dkPtRN jScFby scroll-view sc-domHDO heIlpg">
    <div class="sc-jaSCiF ccIMyb">
        <div class="google-step-summary-top">Download and install 
            <a target="_blank" href="https://support.google.com/accounts/answer/1066447?hl=en&amp;rd=1">Google Authenticator</a>. 
            Enable Two-factor Authentication to protect your account from unauthorized access.
        </div>
        <div class="google-step-summary-top two">Scan the QR code with your Google Authenticator App or enter the secret key manually.</div>
        <div class="qrcode-warp">
            <img src="{qrCOde}" alt="qrcode">
        </div>
        <div class="copy-input">
            <div class="sc-ezbkAF gcQjQT input sc-fbyfCU fWAvBM">
                <div class="input-label">Your secret key</div>
                <div class="input-control">
                    <input type="text" readonly="" value="{key}">
                    <button class="sc-iqseJM cBmlor button button-normal copy-button">
                        <div class="button-inner">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Copy"></use>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <p class="twofa-alert">Write down this code, never reveal it to others. You can use it to regain access to your account if there is no access to the authenticator.</p>
        <div class="codes">
            <p>Verification code</p>
            <div class="sc-cvZCdy hooaaA">
                <div class="google-input">
                    <input autocomplete="new-password" type="password" maxlength="{6}" on:keyup={(e)=> input = (e.target.value)} on:focusin={()=> Onfocus = true} on:focusout={()=> Onfocus = false}>
                    <ul class="{Onfocus ? "focus-list" : ""}">
                        <li class="{Onfocus && !input ? "active" : ""}">{input.charAt(0)}</li>
                        <li class="{Onfocus && input.length === 1 ? "active" : ""}">{input.charAt(1)}</li>
                        <li class="{Onfocus && input.length === 2 ? "active" : ""}">{input.charAt(2)}</li>
                        <li class="{Onfocus && input.length === 3 ? "active" : ""}">{input.charAt(3)}</li>
                        <li class="{Onfocus && input.length === 4 ? "active" : ""}">{input.charAt(4)}</li>
                        <li class="{Onfocus && input.length === 5 ? "active" : ""}">{input.charAt(5)}</li>
                    </ul>
                </div>
            </div>
        </div>
        <button on:click={handleSubmit} disabled={track} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
            <div class="button-inner">Enable</div>
        </button>
    </div>
</div>


<style>
.heIlpg {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
    flex: 1 1 0%
}
.heIlpg > div {
    padding-bottom: 2rem;
    margin-top: 0.5rem;
}
.heIlpg .google-step-summary-top {
    padding: 1rem 1.25rem;
    border-radius: 0.625rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
}

.ccIMyb .google-step-summary-top {
    font-size: 0.75rem;
    line-height: 1.25rem;
}
.ccIMyb .google-step-summary-top a {
    text-decoration: underline;
    margin-left: 0.25rem;
}
.heIlpg .google-step-summary-top.two {
    background-color: transparent;
    border: none;
    padding: 0px 1.25rem;
    margin-top: 0.75rem;
}
.heIlpg .qrcode-warp {
    margin-top: 0.75rem;
    background: rgb(245, 246, 247);
    width: 8.625rem;
    height: 8.625rem;
}
.ccIMyb .qrcode-warp {
    padding: 0.3125rem;
    background: rgb(255, 255, 255);
    border-radius: 0.75rem;
    font-size: 0px;
    width: 8.125rem;
    margin: 1.25rem auto 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.heIlpg .qrcode-warp img {
    width: 8rem;
    height: 8rem;
}
.heIlpg .copy-input {
    margin-top: 0.75rem;
}
.heIlpg .input {
    margin-top: 1.5rem;
}
.heIlpg .copy-input .input-label {
    margin-left: 0.625rem;
}
.gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.heIlpg .input .input-control {
    height: 3.5rem;
}
.heIlpg .copy-input .input-control {
    height: 3.5rem;
}
.gcQjQT .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
}
.heIlpg .copy-input .input-control input[readonly] {
    opacity: 1;
}
.ccIMyb .copy-input .input-control .copy-button {
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 0.125rem;
}
.fWAvBM .copy-button {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: -1.25rem;
}
.gcQjQT .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
}
.heIlpg .twofa-alert {
    margin: 1.125rem 0px 0px;
    padding: 0px 1.25rem 2.25rem;
    border-bottom: 1px solid rgba(176, 179, 191, 0.1);
}
.ccIMyb .twofa-alert {
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-top: 0.75rem;
}
.heIlpg .codes {
    margin-top: 1.5rem;
}
.ccIMyb .codes p {
    height: 1.25rem;
    line-height: 1.25rem;
    margin-top: 1rem;
    text-align: center;
}
.heIlpg .codes .google-input {
    margin-top: 0.875rem;
}
.hooaaA .google-input > input {
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 0px;
    left: -9999px;
    width: 99999px;
    height: 100%;
    border: none;
    background-color: transparent;
    color: transparent;
    caret-color: transparent;
}
.hooaaA .google-input {
    position: relative;
    display: inline-block;
    width: auto;
}
.hooaaA {
    width: 100%;
    text-align: center;
}
 ul {
    padding-left: 1.2em;
    margin: 0;
}
.hooaaA .google-input > ul {
    padding: 0px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px auto;
}
li {
    margin: .5em 0;
}
.hooaaA .google-input > ul li {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    margin-right: 0.375rem;
    border-radius: 0.625rem;
    font-size: 1rem;
    background-color: rgba(30, 32, 36, 0.6);
    border: 1px solid transparent;
    font-weight: bold;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.hooaaA .google-input > ul.focus-list .active{
    border: 1px solid rgb(67, 179, 9);
}
.heIlpg .codes .google-input ul li {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 1.25rem;
    margin-right: 0.625rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    color: rgb(245, 246, 247);
}
.heIlpg > div > button {
    margin-top: 2rem;
}
.ccIMyb > button {
    width: 11.25rem;
    height: 3rem;
    margin: 1.25rem auto 0px;
}

</style>