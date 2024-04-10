<script>
import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen";
import { handleListGame } from "./hook"
let gameList = handleListGame()

</script>

<div class='sc-jYmNlR blJYGp sc-emDsmM ijbeXh'>
    <div class='sc-ekrjqK hmXLyn'>
        <div class="sc-jibziO dJteWA nav-tit">
            <div class="cont-txt ">WAGER <b>IN-HOUSE</b><br>GAMES</div>
        </div>
    </div>
    <div class="sc-bjeSbO {$screen > 1150 ? "cFDYcT" : $screen < 1500 && $screen > 800 ? "rstYUU" : $screen < 800 && $screen > 650 ? "DhwuIwuu" : "YwiLNS"}  grid-list">
        {#each gameList as game }
        <div class="sc-gfqkcP epfPPG bot-view {game.super ? " super-block" : ""}  game-crash">
            <a class="sc-hKTqa dbJiKC game-item-wrap " href="/{game.url}">
                <div class="lazy-img img">
                    <img src="{game.img}" alt="">
                </div>
                <div class="hover-mask">
                    <div class="house-edge">House Edge {game.houseEdge}%</div>
                    <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63">
                        <defs></defs><g fill="none" fill-rule="evenodd"><circle cx="31.3" cy="31.3" r="30.3" fill="#000" fill-opacity=".2" stroke="#E5E7EE" stroke-width="2"></circle><path fill="#F5F6F7" d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"></path></g>
                    </svg>
                </div>
            </a>
            <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                    <a class="item" href="/{game.url}">{game.name}</a>
                    <div class="help-btn-wrap">
                        <button>
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Help"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
         </div>
    {/each}


<div class="sc-ckRZPU iBmEfj">
    <div class="bg-img"></div>
</div>
<div class="sc-ckRZPU iBmEfj">
    <div class="bg-img"></div>
</div>

</div>
</div>

<style>
.hmXLyn {
    position: relative;
    margin-top: 72px;
}
.ijbeXh .nav-tit {
    bottom: 0px;
}
.dJteWA {
    position: relative;
    background-image: linear-gradient(to right, rgb(28, 30, 34), rgb(28, 30, 34));
    background-repeat: no-repeat;
    background-size: 70% 100%;
    border-top-left-radius: 1.25rem;
    display: inline-block;
    white-space: nowrap;
}
.dJteWA .cont-txt {
    position: relative;
    height: 100%;
    line-height: 24px;
    left: 0px;
    z-index: 99;
    padding: 12px 2.75rem 0rem 1.25rem;
    font-size: 18px;
    color: rgb(245, 246, 247);
    font-style: italic;
    font-weight: 800;
    font-family: FuturaBold;
    top: 0px;
}
.dJteWA .cont-txt b {
    color: rgb(231, 11, 108);
    font-style: italic;
}
.dJteWA::after {
    content: "";
    position: absolute;
    width: 40%;
    left: 69%;
    top: 0px;
    bottom: 0px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAABwCAMAAADR/pnBAAAAn1BMVEUAAAAcHiIdHyIdHiIcHiIfIiVwcHAdHiIcHiIcHiMcHyIlLjgcHiIcHiIcHyIcHyIcHyIdHyMeHiQdHyMeHyQcHyIcHiIcHiIcHiIdHyIdHiIhISYiIickJCskJCQ8PDwcHiIcHiIdHyIdHyMcHiIdHyMcHyQeISQoKCgcHiMcHiIcHiIeHiMeICUfHyQfIiUcHyIcHiIdHiIgJSUcHiJEtYpkAAAANHRSTlMA/o7vuSUC+OqQWgnz38+tnHBTQzrXy8O9k4oeFhENBPyypnt2amNNBtqigUs2MSzj0Zcb0lGzEwAAAgJJREFUeNrN3FlS4lAARuHEhAQTQEaZZ0TUVns4+19bN9KUIGrBC5x/Aae+SiWVm5cEfLNSudK56WWF4DLjiEWdp0vwOHKVRT848zh6YdwMzjpO2XlxnLb4jDcdJy6tJV+ULk6D9hcXTkCjlH1aMtAIF5+VFDToJoclCY1pflCy0Lg5uG4aGlcfSx4adx9KItrkx35JRKM42CuZaNzslVQ06rslF6043Cm5aDzulGS08OW9JKPRfi/ZaDtPgo5WXm1LOhqLbclHi7bvBB+N3/9LQtrkdVMS0og3JSONzelISWuN1yUlbXPgddLeTiBO2ts3jJSWFoJASlufxa00Gl5aJdHSWHppP3MtjScvLe1racy8tPBZS6PtpZF5aeVcS2PupZUGWhpVLy181dKIvTTuvbTWWEuj5qVFQy2Nay8tLWhpTL00Gl5aJdHSWHppxZGWRs9LS/taGjMvjaaXduulkXlp5VxLY+6llQZaGlUvLXzR0uh4adS9tIexlkbNS4uGWhpdL21S0NKYemk0vLRfiZbGnZdWHGlpdL20sKml8ZBrafS8tPBZS6M10tKIx1oaVS+NuZcWZloaaV1LI6xpadDz0pittDTafS2NaKmlQfxHSyPKtDS4vdfS1jgt7R+uvrLSIKo2EikNKHYbIykNCFuPtWaupO38oKN6vd7VZn8B7LFgIf7sh1IAAAAASUVORK5CYII=) 0% 0% / 100% 100% no-repeat;
}
*, *:before, *:after {
    box-sizing: border-box;
}
.blJYGp .grid-list {
    background-color: rgb(28, 30, 34);
    padding: 12px 0.75rem 1.4375rem;
    border-top-right-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
}
.cFDYcT {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: dense;
    gap: 1.5rem 0.9375rem;
}
.rstYUU {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: dense;
    gap: 1.5rem 0.9375rem;
}
.DhwuIwuu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
    gap: 1.5rem 0.9375rem;
}
.YwiLNS {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense;
    gap: 1.5rem 0.9375rem;
}
.epfPPG.super-block {
    grid-column: 1 / 3;
}
.epfPPG {
    flex: 1 1 0%;
    position: relative;
    user-select: none;
}
.epfPPG.super-block .game-item-wrap {
    padding-top: 48%;
}
.dbJiKC {
    width: 100%;
    padding-top: 100%;
    position: relative;
    display: block;
    border-radius: 1.25rem;
    overflow: hidden;
    transform: translateZ(0px);
}
.dbJiKC .img {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
    background: rgb(49, 52, 60);
}
.dbJiKC .img img {
    width: 100%;
    height: 100%;
}
.gVplre {
    position: relative;
    color: rgb(255, 255, 255);
    height: 1.5625rem;
    line-height: 1.5625rem;
    font-size: 0.75rem;
}
.gVplre .wrap {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    padding: 0.3125rem 1.875rem 0px 0.875rem;
    box-sizing: border-box;
}
.gVplre .item {
    height: 1.25rem;
    line-height: 1.25rem;
    color: rgb(152, 167, 181);
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.gVplre .help-btn-wrap button {
    position: absolute;
    width: 2.125rem;
    height: 2.125rem;
    right: 0.125rem;
    top: -0.1875rem;
    padding: 0.5rem;
    opacity: 0.6;
}
.hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
}
.dbJiKC .hover-mask {
    position: absolute;
    transition: all 0.3s linear 0s;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 0.75rem;
    opacity: 0;
}
.dbJiKC .hover-mask .house-edge {
    color: rgb(245, 246, 247);
    text-align: right;
    padding: 0.625rem 0.875rem 0px 0px;
}
.iBmEfj .bg-img {
    padding-top: 100%;
    border-radius: 1.25rem;
    transform: translateZ(0px);
    position: relative;
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    background-image: url(https://res.cloudinary.com/dxwhz3r81/image/upload/v1712679165/wager-06_fxek3t.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 62%;
    opacity: 0.7;
}

@media only screen and (max-width:650px){
    .hmXLyn {
        position: relative;
        margin-top: 52px;
    }
}

</style>