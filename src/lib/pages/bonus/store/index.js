import { writable } from "svelte/store";

let allcashbacksEl = ''
export let allcashback = writable(allcashbacksEl)

let ppd_unlockEl = []
export let ppd_unlock = writable(ppd_unlockEl)