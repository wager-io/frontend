import { writable } from "svelte/store"
let _wgdWalletEl = {}
let _ethWalletEl = {}
let _wgfWalletEl = {}
let _btc_walletEl = {}
let default_walletEl = {}
let coin_listEl = []

export let wgdWallet = writable(_wgdWalletEl)
export let ethWallet = writable(_ethWalletEl)
export let wgfWallet = writable(_wgfWalletEl)
export let btc_Wallet = writable(_btc_walletEl)
export let coin_list = writable(coin_listEl)
export let default_Wallet = writable(default_walletEl)