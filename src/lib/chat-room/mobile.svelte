
<script>
  import "./styles/index.css";
  import { goto } from "$app/navigation";
  import { levelColor, formatTime } from "./hook"
  import BsTelegram from "svelte-icons-pack/bs/BsTelegram";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoClose from "svelte-icons-pack/io/IoClose";
  import BsEmojiSunglasses from "svelte-icons-pack/bs/BsEmojiSunglasses";
  import { afterUpdate, tick } from "svelte";
  import { GIFs, emojis } from "./data/index";
  import { url } from "$lib/store/routes";
  import { createEventDispatcher, onMount } from "svelte";
  import { profileStore } from "$lib/store/profile";
  import { handleisLoggin } from "$lib/store/profile";
  import { chats } from "$lib/chat-room/store/index";
  import Progress from "$lib/components/progress.svelte";
  export let ably

  $: error_msg = ""
  let element;
  let newMessages = "";
  let textareaRef;
  let showRule = false;
  let defaultUsername = [];
  $: isGif = false;
  $: isEmoji = false;

  function chatFormatter(text) {
    const pattern = /@(\w+)/g;
    return text.replace(pattern, (match, username) => {
      const user = defaultUsername.find((user) => user.username === username);
      if (user) {
        const userId = user.user_id;
        return `<a style="color: var(--primary-color); font-weight:bold;" href='/user/profile/${userId}' >@${username}</a>`;
      }
      return match;
    });
  }

  const handleSendMessage = async (e, name) => {
    if ( (e.key === "Enter" && name.newMessages) || e.type === "click" || e === "gifHit") {
      if (e.key === "Enter") {
         e.preventDefault();
      }
      if ($chats && element) {
        scrollToBottom(element);
      }
       else {
        if ($handleisLoggin) {
          let data = {
            msg_id: Math.floor(Math.random() * 230000000),
            user_id: $profileStore.user_id,
            type: name.type,  
            text: name.newMessages ? name.newMessages : ".",
            profle_img: $profileStore.profile_image,
            username: $profileStore.username,
            gif: name.gif ? name.gif : ".",
            hide_profile: $profileStore.hide_profile,
            vip_level: $profileStore.vip_level,
            time: new Date(),
            profile: $profileStore
          };
         // get the channel to subscribe to
          const channel = ably.channels.get('quickstart');
          await channel.publish("first", data)
        //  let {response} = await handlePublicChat(data);
        //  chats.set([response, ...$chats])
        } 
        else {
          goto(`${$url === "/" ? "" : $url}/?tab=login&modal=auth`)
          handlecloseChat();
        }
      }
      newMessages = "";
      isGif = false;
    }
  };


  let chatContainer;
  onMount(() => {
    scrollToBottom();
  });

  afterUpdate(() => {
    scrollToBottom();
  });

  const dispatch = createEventDispatcher();
  const handlecloseChat = () => {
    dispatch("closeChat");
  };

  function scrollToBottom() {
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  const handleMerge = (e) => {
    newMessages += e;
  };

</script>

<!-- =========================== mobile ================================= -->

<div id="mobile-screen">
  <div class="sc-bkkeKt kBjSXI" style="background-color: transparent;">
    <div class="dialog sc-dkqQuH ikQOCU">
        {#if error_msg}
        <div class="error-message">
          <div class="hTTvsjh">
            <div>{error_msg}</div>
          </div>
        </div>
      {/if}

      <div class="dialog-head has-close">
        <div class="sc-hJZKUC dWgZek">
          <!-- svelte-ignore a11y-no-static-element-interactions -->
         <div></div>
          <div class="chat-features">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div on:click={() => { showRule = true; }} class="inform">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
              <use xlink:href="#icon_Inform"></use>
            </svg>
          </div>
            <button on:click={handlecloseChat} class="sc-ieecCq fLASqZ close-icon" >
              <Icon src={IoClose} size="17" color="rgba(153, 164, 176, 0.8)" />
            </button>
          </div>
        </div>
      </div>
      <div class="dialog-body no-style sc-dkqQuH ikQOCU"  style="z-index: 2; transform: none;" >
        <div id="public-chat" class="sc-ewSTlh hHMWvP">
          <div class="sc-bSqaIl eA-dYOl">
            <div bind:this={chatContainer} class="sc-dkPtRN gtrd scroll-view sc-cNKqjZ dPmCMO sc-jvvksu fuYrTE chat-list">
              <div class="sc-AjmGg kgsidd">
                  {#each $chats as chat, i}
                    <div class="flat-item">
                      <div class="sc-tAExr VfNib notranslate">
                        <div class="head">
                          <a class="head-link" href={`${$url === "/" ? "" : $url}/?tab=profile&id=${chat.user_id && chat.user_id}`}>
                            <img class="avatar" alt="" src={chat.profle_img} />
                            <div class={`sc-jQrDum jouJMO user-level  ${levelColor(chat.vip_level)}`}>
                              <div class="level-wrap">
                                <span>V</span><span>{chat.vip_level}</span>
                              </div>
                            </div>
                            <Progress chat={chat} />
                          </a>
                        </div>
                        <div class="content">
                          <div class="title">
                            <div class="name">
                              <a href={`${$url === "/" ? "" : $url}/?tab=profile&id=${chat.user_id && chat.user_id}`}>
                                <span>{chat.username}</span>
                              </a>
                              <div class="time">{formatTime(chat.time)}</div>
                            </div>
                          </div>
                          {#if chat.type === "normal"}
                            <div class="msg-wrap">
                              <div class="sc-jKTccl bkGvjR">
                                {@html chatFormatter(chat.text)}
                              </div>
                          </div>
                          {:else if chat.type === "gif"}
                            <!-- ============================= Emoji ============================= -->
                            <div class="msg-wrap">
                              <div class="sc-jKTccl bkGvjR">
                                <div class="sc-kiIyQV cXaEwo msg-gif">
                                  <img src={chat.gif} alt="" />
                                </div>
                              </div>
                            </div>
                          {/if}
                        </div>
                      </div>
                    </div>
                  {/each}
              </div>
            </div>
          </div>

          <div class="chat-infos"></div>
          <div class="sc-hkgtus ddROGz">
            <div style="transition: all 0.5s ease; gap:10px" class="send-input">
              <div class="sc-ezbkAF kDuLvp input sc-ikJyIC iowset input-area">
                <div class="input-control">
                  <textarea  bind:this={textareaRef}
                    bind:value={newMessages}
                    placeholder="Your Message" style="height: 44px;"></textarea>
                  <button  on:click={()=> isEmoji != isEmoji}  class="sc-JkixQ cVsgdS emoji-r-wrap" >
                    {#if isEmoji}
                      <div class="emoji-box-wrap">
                        <div class="sc-dkPtRN jScFby scroll-view emoji-box">
                          {#each emojis as emoji}
                            <button
                              on:click={() => handleMerge(emoji)}
                              class="emoji">{emoji}</button
                            >
                          {/each}
                        </div>
                      </div>
                    {/if}
                    <Icon src={BsEmojiSunglasses} size="16" color="rgba(153, 164, 176, 0.8)" />
                  </button>
                </div>
              </div>
              {#if newMessages}
                <button on:click={() =>
                    handleSendMessage(event, { newMessages, type: "normal" })}  class="sc-JkixQ cVsgdS emoji-r-wrap"
                >
                  <Icon src={BsTelegram} size="34" color="#fff" />
                </button>
              {/if}
            </div>
            <div class="send-controls">
              <div class="left-actions">
              </div>
              <div class="sc-dkQkyq gbjudO gift-r-wrap hide-gift">
                {#if isGif}
                  <div class="gift-box-wrap">
                    <div class="sc-dkPtRN jScFby scroll-view sc-jivBlf jhjroN">
                      {#each GIFs as gif}
                        <button
                          on:click={() =>
                            handleSendMessage("gifHit", { gif, type: "gif" })}
                          class="gift-item"
                        >
                          <img class="gift-img" src={gif} alt="" />
                        </button>
                      {/each}
                    </div>
                    <div class="giphy-copyright"></div>
                  </div>
                {/if}
                <button on:click={()=> isGif =! isGif} class="gift-btn">
                  <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                    <use xlink:href="#icon_GIF"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .eA-dYOl {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    background: var(--card-bg-5);
  }

  .overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 300;
    padding: 10px;
  }

  .content {
    width: 29rem;
    border-radius: 1.25rem;
    /* padding: 1.3rem !important; */
    background-color: var(--card-bg-5);
    text-align: initial;
    /* padding-top: 5px !important; */
    /* padding-bottom: 50px !important; */
    height: max-content;
  }

  .region_container {
    width: 220px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    gap: 5px;
    background-color: var(--card-bg-1);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.139);
    top: 70px;
    animation: slide-up 0.4s forwards;
    transform: translateY(-20px);
    opacity: 0;
    z-index: 2;
  }

  @keyframes slide-up {
    to {
      transform: translateY(-1px);
      opacity: 1;
    }
  }

  .cVsgdS .emoji-box-wrap {
    width: 280px;
    height: 200px;
    background: var(--affiliate-bg);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 12px 0px;
    padding: 10px 10px 40px;
    border-radius: 10px;
    position: absolute;
    bottom: 2.8125rem;
    left: -250px;
    z-index: 2;
  }

  .cVsgdS .emoji-box {
    display: flex;
    flex-wrap: wrap;
  }

  .gbjudO {
    position: relative;
  }

  .gtrd {
    box-sizing: border-box;
    height: 160px;
    overflow-y: auto;
    /* background: red; */
    touch-action: pan-y;
    overscroll-behavior: contain;
  }

  .hsvoqO {
    padding: 0.5rem 0.625rem;
  }

  .Gdkwx {
    width: 100%;
  }

  .cVsgdS .emoji {
    width: 36px;
    height: 36px;
    font-size: 25px;
    cursor: pointer;
    text-align: center;
    line-height: 36px;
  }


  .gkHCXh {
    background-image: url(https://static.nanogames.io/assets/tip_glod.df7fc7f5.png),
      linear-gradient(30deg, rgb(98, 86, 49), rgb(58, 56, 45));
    background-size:
      90%,
      100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    border: 1px solid rgb(63, 58, 41);
    overflow: hidden;
  }

  .Gdkwx {
    width: 100%;
  }

  .bkGvjR {
    user-select: text;
    font-size: 0.875rem;
    vertical-align: top;
    color: rgb(202, 209, 217);
    line-height: 1.125rem;
    word-break: break-word;
    overflow: hidden;
    border-radius: 1.25rem;
    padding: 0.625rem;
    background-color: rgba(49, 52, 58, 0.6);
  }

  .cl-primary {
    color: var(--primary-color);
  }



  .VfNib .content .title .name > div,
  .VfNib .content .title .name > a {
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 12.78px;
  }

  .VfNib .content .title .name a {
    line-height: 1.125rem;
    color: var(--text-6);
    font-weight: 600;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
  }

  .VfNib .content .title .name a > span {
    max-width: 12.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 0.9;
  }

  .bkGvjR {
    user-select: text;
    font-size: 0.875rem;
    vertical-align: top;
    color: rgb(202, 209, 217);
    line-height: 1.125rem;
    word-break: break-word;
    overflow: hidden;
    border-radius: 1.25rem;
    padding: 0.625rem;
    background-color: rgba(49, 52, 58, 0.6);
  }


  .ikQOCU .dialog-head {
    width: 100%;
    margin: 0px;
  }

  .dWgZek {
    height: 4rem;
    position: relative;
    z-index: 1;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    background-color: var(--card-bg-5);
  }

  .ikQOCU .dialog-head > div {
    left: 0px;
    width: 100%;
    padding: 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .dWgZek::after {
    content: "";
    position: absolute;
    bottom: -0.75rem;
    height: 0.75rem;
    width: 100%;
    background-image: var(--bxs-1);
    opacity: 0.25;
  }

  .hHMWvP {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .ddROGz {
    position: relative;
    flex: 0 0 auto;
    box-sizing: border-box;
    background-color: rgba(49, 52, 58, 0.8);
    padding: 1rem 0.625rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
  }

  .kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid var(--border-1);
    background-color: var(--sidebar-card-bg);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
  }

  .kDuLvp .input-control textarea {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: var(--text-5);
  }

  textarea {
    padding: 0.625rem;
    resize: none;
    box-sizing: border-box;
  }

  .ddROGz .send-input .input-area textarea {
    display: block;
    padding: 0.625rem 0px;
    height: 2.75rem;
    width: 100%;
    line-height: 1.5rem;
    color: rgb(202, 209, 217);
  }

  .kDuLvp {
    margin-top: 1rem;
  }

  .ddROGz .send-input {
    position: relative;
    min-height: 2.625rem;
    display: flex;
  }

  .ddROGz .send-controls .left-actions {
    padding-left: 0.375rem;
    margin-bottom: 0.375rem;
    display: flex;
    height: 100%;
  }
  .ddROGz .send-input .input-area .input-control {
    height: auto;
    padding: 0px 1.25rem;
    background-color: var(--card-bg-5);
    align-items: flex-end;
    border: 1px solid rgba(49, 52, 58, 0.8);
    border-radius: 1.375rem;
  }

  .ddROGz .send-input .input-area {
    position: relative;
    margin: 0px;
    flex: 1 1 0%;
    width: 100%;
    padding-right: 0px;
    transition: padding 0.4s ease 0s;
  }

  .kgsidd {
    position: relative;
  }

  .kgsidd .flat-item {
    position: relative;
    left: 0px;
    top: 0px;
    width: 100%;
  }

  .VfNib {
    display: flex;
    flex-direction: row;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .VfNib .head {
    width: 2.5rem;
    padding-top: 0.875rem;
    flex: 0 0 auto;
  }

  .VfNib .content .title .name a {
    line-height: 1.125rem;
    color: var(--text-6);
    font-weight: 600;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
  }

  .bkGvjR {
    user-select: text;
    font-size: 0.875rem;
    vertical-align: top;
    color: rgb(202, 209, 217);
    line-height: 1.125rem;
    word-break: break-word;
    overflow: hidden;
    border-radius: 1.25rem;
    padding: 0.625rem;
    background-color: rgba(49, 52, 58, 0.6);
  }

  .VfNib .content .msg-wrap {
    display: flex;
    position: relative;
  }

  .VfNib .content .title .name a > span {
    max-width: 12.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 0.9;
  }

  .VfNib .content .title .name .time {
    align-self: flex-end;
    margin-left: 0.5rem;
    color: var(--text-6);
    font-size: 0.75rem;
  }

  .VfNib .head .head-link {
    position: relative;
    display: block;
  }

  .VfNib .head .head-link {
    position: relative;
    display: block;
  }

  .VfNib .content {
    width: 1%;
    flex: 1 1 0%;
    padding-top: 0.875rem;
    padding-left: 0.375rem;
    padding-bottom: 0.3125rem;
  }

  .VfNib .content .title {
    display: flex;
    height: 1.125rem;
    margin-bottom: 0.25rem;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .VfNib .content .msg-wrap {
    display: flex;
    position: relative;
  }

  .VfNib .content .title .name {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
  }

  .VfNib .content .title .name > a {
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .VfNib .head .head-link .level .img-star {
    width: auto;
    height: 0.875rem;
    margin-right: 1px;
  }


  .jouJMO {
    font-size: 0.75rem;
    font-weight: bold;
    color: rgb(23, 24, 27);
  }

  .VfNib .head .head-link .user-level .level-wrap span {
    font-size: 0.75rem;
    line-height: normal;
    color: black;
  }

  .VfNib .head .head-link .user-level {
    width: 2.375rem;
    height: 1.125rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 0.5rem;
    position: absolute;
    top: 2rem;
    left: 0.0625rem;
  }

  .VfNib .head .head-link .user-level.type-1{
    background-color: #D9DDEC;
  }

  .VfNib .head .head-link .user-level.type-2{
    background-color: #E8DAFF;
  }

  .VfNib .head .head-link .user-level.type-3 {
    background-color: rgb(246, 199, 34);
  }

  .VfNib .head .head-link .user-level.type-4 {
    background-color: #773DFC;
  }

  .VfNib .head .head-link .level {
    width: 3.375rem;
    margin-top: 0.625rem;
    transform: scale(0.631313);
    transform-origin: left center;
  }

  .fPtvsS {
    text-align: left;
    white-space: nowrap;
    font-size: 0px;
  }

  .VfNib .head .head-link .level .img-star {
    width: auto;
    height: 0.875rem;
    margin-right: 1px;
  }

  @media screen and (max-width: 621px) {
    .dialog {
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      margin: 0px;
      border-radius: 0px;
    }


    .VfNib {
      padding: 0px 1.25rem;
    }

    .dWgZek {
      left: auto;
      position: absolute;
      top: 0px;
      right: 3rem;
      background-image: none;
      -webkit-box-pack: end;
      justify-content: flex-end;
      padding: 0px 0.625rem;
    }

    .fuYrTE {
      background-size: 22.5rem;
      background-position: center center;
    }

    .VfNib .head .head-link .level {
      margin-top: 0.625rem;
    }
  }

  .fuYrTE {
    flex: 1 1 auto;
  }
</style>
