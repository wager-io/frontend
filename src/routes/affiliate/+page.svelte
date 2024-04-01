<script>
    import MainPage from "$lib/pages/affiliate/main/index.svelte"
    import Mobile from "$lib/pages/affiliate/mobile/index.svelte"
    import '../../styles/affilate/main/index.css'
    import '../../styles/affilate/mobile/index.css'
    import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen"
</script>

<div>
    <div id="main-screen" style={`padding-left:${$is_open__Appp ? 52 : 22}px; padding-right:${$is_open__chat ? 366 : 15}px`}>
        <MainPage />
    </div>
    <div id="mobile-screen">
        <Mobile />
    </div>
</div>
