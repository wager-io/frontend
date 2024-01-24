// export default class SoundManager {
//   constructor(defaultSettings, audioEnabled) {
//     this.audioMap = {
//       bet: {
//         path: "../sounds/click.wav",
//       },
//       win: {
//         path: "../sounds/dice_rolling_sound.mp3",
//       },
//       lose: {
//         path: "../sounds/mixkit-gate-latch-click-1924.wav",
//       },
//       deal: {
//         path: "../sounds/mixkit-gate-latch-click-1924.wav",
//       },
//     };

//     if (defaultSettings) {
//       Object.keys(defaultSettings).forEach((setting) => {
//         if (this.audioMap[setting]) {
//           this.audioMap[setting] = {
//             ...this.audioMap[setting],
//             ...defaultSettings[setting],
//           };
//         }
//       });
//     }
//     this.audioEnabled = Boolean(audioEnabled);

//     Object.keys(this.audioMap)
//       .filter((key, _) => this.audioMap[key].enabled)
//       .forEach((key) => this.play(key));
//   }

//   setAudioEnabled(enabled) {
//     this.audioEnabled = enabled;
//   }

//   play(name) {
//     const audioObj = this.audioMap[name];
//     if (!audioObj) return;

//     // if (!this.audioEnabled && !audioObj.enabled) return;

//     if (!audioObj.audio) {
//       console.log(audioObj)
//       audioObj.audio = new Audio(`${window.origin}${audioObj.path}`);
//       audioObj.audio.loop = audioObj.loop;
//     }
    
//     audioObj.audio.pause();
//     audioObj.audio.currentTime = 0;
//     audioObj.audio.volume = 1;
//     audioObj.audio.play();
//   }

//   pause(name) {
//     const audioObj = this.audioMap[name];
//     if (!audioObj || !audioObj.audio) return;
//     audioObj.audio.pause();
//   }

//   playRandom() {
//     const keys = Object.keys(this.audioMap);
//     const key = keys[Math.floor(Math.random() * keys.length)];
//     this.play(key);
//   }

//   stop() {
//     Object.keys(this.audioMap).forEach((key) => {
//       this.pause(key);
//     });
//   }
// }

import bet from "../sounds/mixkit-gate-latch-click-1924.wav"
import win from "../sounds/mixkit-achievement-bell-600.wav"
import deal from "../sounds/mixkit-achievement-bell-600.wav"

export const handleSoundManager = (()=>{
  let audioMap = {
      bet: {
        path: bet,
      },
      win: {
        path: win,
      },
      lose: {
        path: "../sounds/mixkit-gate-latch-click-1924.wav",
      },
      deal: {
        path: deal,
      },
    };

    const Play = (async(name, enable)=>{
      if(enable){
        const audio = new Audio(name.path);
        audio.volume = 0.5;
        await audio.play();
      }
    })

    return {Play, audioMap}
})