

import {default_Wallet} from "../../../store/coins"
import cr from "../audio/mixkit-achievement-bell-600.wav"
import { ServerURl } from "$lib/backendUrl"
const URl = ServerURl()

export function playSound() {
  const audio = new Audio(cr);
  audio.volume = 0.5;
  audio.play();
}


export const handleMinesSet = (()=>{
  let skown = [{
    id: 1,
    active: false,
    mine: true
},
{
    id: 2,
    active: false,
    mine: false
},
{
    id: 3,
    active: false,
    mine: false
},
{
    id: 4,
    active: false,
    mine: false
},
{
    id: 5,
    active: false,
    mine: false
},
{
    id: 6,
    active: false,
    mine: false
},
{
    id: 7,
    active: false,
    mine: false
},
{
    id: 8,
    active: false,
    mine: false
},
{
    id: 9,
    active: false,
    mine: false
},
{
    id: 10,
    active: false,
    mine: false
},
{
    id: 11,
    active: false,
    mine: false
},
{
    id: 12,
    active: false,
    mine: true
},
{
    id: 13,
    active: false,
    mine: false
},
{
    id: 14,
    active: false,
    mine: false
},
{
    id: 15,
    active: false,
    mine: false
},
{
    id: 16,
    active: false,
    mine: false
},
{
    id: 17,
    active: false,
    mine: false
},
{
    id: 18,
    active: false,
    mine: false
},
{
    id: 19,
    active: false,
    mine: false
},
{
    id: 20,
    active: false,
    mine: false
},
{
    id: 21,
    active: false,
    mine: false
},
{
    id: 22,
    active: false,
    mine: false
},
{
    id: 23,
    active: false,
    mine: true
},
{
    id: 24,
    active: false,
    mine: false
},
{
    id: 25,
    active: false,
    mine: false
},
]
return skown 
})