import { ServerURl } from "$lib/backendUrl"
import { mine_history, HandleSelectedMine, minesStore,  HandleNextTime,  HandlemineGems,  HandleMineCount,
    HandleGame_id,  Cashout,  HandleHas_won, betDetails, HandleIsAlive,HandleWinning } from "../store/index"

export const handleActivemies = (async (auth) => {
    await axios.get(`${ServerURl()}/api/user/mine-game/mine-init`, {
            headers: {
                Authorization: `Bearer ${auth}`
            }
        })
        .then((response) => {
            let pops = response.data[0]
            if (pops) {
                minesStore.set(pops.gameLoop)
                HandleGame_id.set(response.data[0].game_id)
                let ins = []
                let inseuy = []
                $minesStore.forEach(element => {
                    if (!element.mine && !element.active) {
                        ins.push(element)
                    }
                    if (element.active) {
                        inseuy.push(element)
                    }
                })
                HandleSelectedMine.set(inseuy.length)
                if ($HandleMineCount === 1) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(1.03)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.03)
                        HandleNextTime.set(1.08)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.03)
                        HandleNextTime.set(1.08)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.08)
                        HandleNextTime.set(1.13)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(1.13)
                        HandleNextTime.set(1.18)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(1.18)
                        HandleNextTime.set(1.24)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(1.24)
                        HandleNextTime.set(1.3)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(1.3)
                        HandleNextTime.set(1.38)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(1.38)
                        HandleNextTime.set(1.46)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(1.46)
                        HandleNextTime.set(1.55)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(1.55)
                        HandleNextTime.set(1.65)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(1.65)
                        HandleNextTime.set(1.77)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(1.77)
                        HandleNextTime.set(1.90)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1.90)
                        HandleNextTime.set(2.06)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(2.06)
                        HandleNextTime.set(2.25)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(2.25)
                        HandleNextTime.set(2.48)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(2.48)
                        HandleNextTime.set(2.75)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2.75)
                        HandleNextTime.set(3.09)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(3.09)
                        HandleNextTime.set(3.54)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(3.54)
                        HandleNextTime.set(4.13)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(4.13)
                        HandleNextTime.set(4.95)
                    }
                    if ($HandleSelectedMine === 20) {
                        Cashout.set(4.95)
                        HandleNextTime.set(6.19)
                    }
                    if ($HandleSelectedMine === 21) {
                        Cashout.set(6.19)
                        HandleNextTime.set(8.25)
                    }
                    if ($HandleSelectedMine === 22) {
                        Cashout.set(8.25)
                        HandleNextTime.set(12.38)
                    }
                    if ($HandleSelectedMine === 23) {
                        Cashout.set(12.38)
                        HandleNextTime.set(24.75)
                    }
                    if ($HandleSelectedMine === 24) {
                        Cashout.set(24.75)
                    }
                }
                if ($HandleMineCount === 2) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(1.08)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.08)
                        HandleNextTime.set(1.17)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.17)
                        HandleNextTime.set(1.29)
                    } else if ($HandleSelectedMine === 3) {
                        Cashout.set(1.29)
                        HandleNextTime.set(1.41)
                    } else if ($HandleSelectedMine === 4) {
                        Cashout.set(1.41)
                        HandleNextTime.set(1.56)
                    } else if ($HandleSelectedMine === 5) {
                        Cashout.set(1.56)
                        HandleNextTime.set(1.74)
                    } else if ($HandleSelectedMine === 6) {
                        Cashout.set(1.74)
                        HandleNextTime.set(1.94)
                    } else if ($HandleSelectedMine === 7) {
                        Cashout.set(1.94)
                        HandleNextTime.set(2.18)
                    } else if ($HandleSelectedMine === 8) {
                        Cashout.set(2.18)
                        HandleNextTime.set(2.47)
                    } else if ($HandleSelectedMine === 9) {
                        Cashout.set(2.47)
                        HandleNextTime.set(2.83)
                    } else if ($HandleSelectedMine === 10) {
                        Cashout.set(2.83)
                        HandleNextTime.set(3.26)
                    } else if ($HandleSelectedMine === 11) {
                        Cashout.set(3.26)
                        HandleNextTime.set(3.81)
                    } else if ($HandleSelectedMine === 12) {
                        Cashout.set(3.81)
                        HandleNextTime.set(4.50)
                    } else if ($HandleSelectedMine === 13) {
                        Cashout.set(4.50)
                        HandleNextTime.set(5.40)
                    } else if ($HandleSelectedMine === 14) {
                        Cashout.set(5.40)
                        HandleNextTime.set(6.60)
                    } else if ($HandleSelectedMine === 15) {
                        Cashout.set(6.60)
                        HandleNextTime.set(8.25)
                    } else if ($HandleSelectedMine === 16) {
                        Cashout.set(8.25)
                        HandleNextTime.set(12.95)
                    } else if ($HandleSelectedMine === 17) {
                        Cashout.set(12.95)
                        HandleNextTime.set(14.14)
                    } else if ($HandleSelectedMine === 18) {
                        Cashout.set(14.14)
                        HandleNextTime.set(19.80)
                    } else if ($HandleSelectedMine === 19) {
                        Cashout.set(19.80)
                        HandleNextTime.set(29.70)
                    } else if ($HandleSelectedMine === 20) {
                        Cashout.set(29.70)
                        HandleNextTime.set(49.50)
                    } else if ($HandleSelectedMine === 21) {
                        Cashout.set(49.50)
                        HandleNextTime.set(98.99)
                    } else if ($HandleSelectedMine === 22) {
                        Cashout.set(98.99)
                        HandleNextTime.set(296.98)
                    } else if ($HandleSelectedMine === 23) {
                        Cashout.set(296.98)
                    }
                }
                if ($HandleMineCount === 3) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(1.13)
                    } 
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.13)
                        HandleNextTime.set(1.29)
                    }
                    else if ($HandleSelectedMine === 2) {
                        Cashout.set(1.29)
                        HandleNextTime.set(1.48)
                    } else if ($HandleSelectedMine === 3) {
                        Cashout.set(1.48)
                        HandleNextTime.set(1.71)
                    } else if ($HandleSelectedMine === 4) {
                        Cashout.set(1.71)
                        HandleNextTime.set(2.00)
                    } else if ($HandleSelectedMine === 5) {
                        Cashout.set(2.00)
                        HandleNextTime.set(2.35)
                    } else if ($HandleSelectedMine === 6) {
                        Cashout.set(2.35)
                        HandleNextTime.set(2.79)
                    } else if ($HandleSelectedMine === 7) {
                        Cashout.set(2.79)
                        HandleNextTime.set(3.35)
                    } else if ($HandleSelectedMine === 8) {
                        Cashout.set(3.35)
                        HandleNextTime.set(4.07)
                    } else if ($HandleSelectedMine === 9) {
                        Cashout.set(4.07)
                        HandleNextTime.set(5.01)
                    } else if ($HandleSelectedMine === 10) {
                        Cashout.set(5.01)
                        HandleNextTime.set(6.26)
                    } else if ($HandleSelectedMine === 11) {
                        Cashout.set(6.26)
                        HandleNextTime.set(7.96)
                    } else if ($HandleSelectedMine === 12) {
                        Cashout.set(7.96)
                        HandleNextTime.set(10.35)
                    } else if ($HandleSelectedMine === 13) {
                        Cashout.set(10.35)
                        HandleNextTime.set(13.80)
                    } else if ($HandleSelectedMine === 14) {
                        Cashout.set(13.80)
                        HandleNextTime.set(18.98)
                    } else if ($HandleSelectedMine === 15) {
                        Cashout.set(18.98)
                        HandleNextTime.set(27.11)
                    } else if ($HandleSelectedMine === 16) {
                        Cashout.set(27.11)
                        HandleNextTime.set(40.67)
                    } else if ($HandleSelectedMine === 17) {
                        Cashout.set(40.67)
                        HandleNextTime.set(65.07)
                    } else if ($HandleSelectedMine === 18) {
                        Cashout.set(65.07)
                        HandleNextTime.set(113.87)
                    } else if ($HandleSelectedMine === 19) {
                        Cashout.set(113.87)
                        HandleNextTime.set(227.74)
                    } else if ($HandleSelectedMine === 20) {
                        Cashout.set(227.74)
                        HandleNextTime.set(569.35)
                    } else if ($HandleSelectedMine === 21) {
                        Cashout.set(569.35)
                        HandleNextTime.set(2277.41)
                    } else if ($HandleSelectedMine === 22) {
                        Cashout.set(2277.41)
                    }
                }

                if ($HandleMineCount === 4) {
                    if ($HandleSelectedMine === 1) {
                        HandleNextTime.set(1.18)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.18)
                        HandleNextTime.set(1.41)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.41)
                        HandleNextTime.set(1.71)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(1.71)
                        HandleNextTime.set(2.09)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(2.09)
                        HandleNextTime.set(2.58)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(2.58)
                        HandleNextTime.set(3.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(3.23)
                        HandleNextTime.set(4.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(4.09)
                        HandleNextTime.set(5.26)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(5.26)
                        HandleNextTime.set(6.88)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(6.88)
                        HandleNextTime.set(9.17)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(9.17)
                        HandleNextTime.set(12.51)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(12.51)
                        HandleNextTime.set(12.51)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(17.51)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(25.30)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(37.95)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(59.63)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(99.38)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(178.89)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(357.78)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(834.83)
                    }
                    if ($HandleSelectedMine === 20) {
                        Cashout.set(2504)
                    }
                    if ($HandleSelectedMine === 21) {
                        Cashout.set(12440.23)
                    }
                }

                if ($HandleMineCount === 5) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(1.24)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.24)
                        HandleNextTime.set(1.56)
                    }
                    
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.56)
                        HandleNextTime.set(2.00)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(2.00)
                        HandleNextTime.set(2.59)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(2.59)
                        HandleNextTime.set(3.39)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(3.39)
                        HandleNextTime.set(4.52)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(4.52)
                        HandleNextTime.set(6.14)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(6.14)
                        HandleNextTime.set(12.04)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(12.04)
                        HandleNextTime.set(17.52)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(17.52)
                        HandleNextTime.set(26.27)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(26.27)
                        HandleNextTime.set(40.87)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(40.87)
                        HandleNextTime.set(66.41)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(66.41)
                        HandleNextTime.set(113.85)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(113.85)
                        HandleNextTime.set(160.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(160.23)
                        HandleNextTime.set(210.83)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(210.83)
                        HandleNextTime.set(300.21)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(300.21)
                        HandleNextTime.set(740.11)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(740.11)
                        HandleNextTime.set(1240.90)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(1240.90)
                        HandleNextTime.set(2540.23)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(2540.23)
                        HandleNextTime.set(9240.23)
                    }
                    if ($HandleSelectedMine === 20) {
                        Cashout.set(9240.23)
                    }
                }

                if ($HandleMineCount === 6) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(1.30)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.30)
                        HandleNextTime.set(1.74)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.74)
                        HandleNextTime.set(2.35)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(2.35)
                        HandleNextTime.set(3.23)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(3.23)
                        HandleNextTime.set(4.52)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(4.52)
                        HandleNextTime.set(6.46)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(6.46)
                        HandleNextTime.set(9.44)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(9.44)
                        HandleNextTime.set(14.17)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(14.17)
                        HandleNextTime.set(21.89)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(21.89)
                        HandleNextTime.set(35.03)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(35.03)
                        HandleNextTime.set(58.38)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(58.38)
                        HandleNextTime.set(80.87)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(80.87)
                        HandleNextTime.set(120.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(120.23)
                        HandleNextTime.set(230.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(230.23)
                        HandleNextTime.set(440.83)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(440.83)
                        HandleNextTime.set(600.21)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(600.21)
                        HandleNextTime.set(940.11)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(940.11)
                        HandleNextTime.set(1240.90)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(1240.90)
                        HandleNextTime.set(2040.23)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(2040.23)
                    }
                }

                if ($HandleMineCount === 7) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(1.38)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.38)
                        HandleNextTime.set(1.94)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.94)
                        HandleNextTime.set(2.79)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(2.79)
                        HandleNextTime.set(4.09)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(4.09)
                        HandleNextTime.set(6.14)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(6.14)
                        HandleNextTime.set(9.44)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(9.44)
                        HandleNextTime.set(14.95)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(14.95)
                        HandleNextTime.set(24.47)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(24.47)
                        HandleNextTime.set(41.60)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(41.60)
                        HandleNextTime.set(96.40)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(96.40)
                        HandleNextTime.set(180.83)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(180.83)
                        HandleNextTime.set(230.07)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(230.07)
                        HandleNextTime.set(440.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(440.23)
                        HandleNextTime.set(690.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(690.23)
                        HandleNextTime.set(1540.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(1540.23)
                        HandleNextTime.set(2800.23)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2800.23)
                        HandleNextTime.set(6940.20)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(6940.20)
                        HandleNextTime.set(12840.11)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(12840.11)
                    }
                }

                if ($HandleMineCount === 8) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(1.46)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.46)
                        HandleNextTime.set(2.18)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(2.18)
                        HandleNextTime.set(3.35)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(3.35)
                        HandleNextTime.set(5.26)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(5.26)
                        HandleNextTime.set(8.50)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(8.50)
                        HandleNextTime.set(14.17)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(14.17)
                        HandleNextTime.set(24.47)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(24.47)
                        HandleNextTime.set(44.05)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(44.05)
                        HandleNextTime.set(83.20)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(83.20)
                        HandleNextTime.set(166.40)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(166.40)
                        HandleNextTime.set(210.83)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(210.83)
                        HandleNextTime.set(440.07)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(440.07)
                        HandleNextTime.set(740.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(740.23)
                        HandleNextTime.set(1140.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(1140.23)
                        HandleNextTime.set(1740.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(1740.23)
                        HandleNextTime.set(2240.23)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2240.23)
                        HandleNextTime.set(2740.23)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(2740.23)
                    }
                }

                if ($HandleMineCount === 9) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(1.55)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.55)
                        HandleNextTime.set(2.48)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(2.48)
                        HandleNextTime.set(4.07)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(4.07)
                        HandleNextTime.set(6.88)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(6.88)
                        HandleNextTime.set(12.04)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(12.04)
                        HandleNextTime.set(21.89)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(21.89)
                        HandleNextTime.set(41.60)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(41.60)
                        HandleNextTime.set(83.20)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(83.20)
                        HandleNextTime.set(120.99)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(120.99)
                        HandleNextTime.set(238.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(238.11)
                        HandleNextTime.set(450.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(450.23)
                        HandleNextTime.set(640.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(640.23)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(1440.23)
                        HandleNextTime.set(1940.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(1940.23)
                        HandleNextTime.set(2440.23)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2440.23)
                    }
                }

                if ($HandleMineCount === 10) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(1.65)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.65)
                        HandleNextTime.set(2.83)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(2.83)
                        HandleNextTime.set(5.00)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(5.00)
                        HandleNextTime.set(9.17)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(9.17)
                        HandleNextTime.set(17.52)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(17.52)
                        HandleNextTime.set(38.38)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(38.38)
                        HandleNextTime.set(97.33)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(97.33)
                        HandleNextTime.set(121.99)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(121.99)
                        HandleNextTime.set(220.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(220.23)
                        HandleNextTime.set(640.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1440.23)
                        HandleNextTime.set(1840.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(1840.23)
                        HandleNextTime.set(2440.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(2440.23)
                        HandleNextTime.set(5440.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(5440.23)
                    }
                }

                if ($HandleMineCount === 11) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(1.77)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.77)
                        HandleNextTime.set(3.26)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(3.26)
                        HandleNextTime.set(6.26)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(6.26)
                        HandleNextTime.set(12.51)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(12.51)
                        HandleNextTime.set(26.27)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(26.27)
                        HandleNextTime.set(58.38)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(58.38)
                        HandleNextTime.set(97.33)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(97.33)
                        HandleNextTime.set(121.99)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(121.99)
                        HandleNextTime.set(220.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(220.23)
                        HandleNextTime.set(640.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1440.23)
                        HandleNextTime.set(1840.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(1840.23)
                        HandleNextTime.set(2440.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(2440.23)
                    }
                }

                if ($HandleMineCount === 12) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(1.90)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.90)
                        HandleNextTime.set(3.81)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(3.81)
                        HandleNextTime.set(7.96)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(7.96)
                        HandleNextTime.set(17.52)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(17.52)
                        HandleNextTime.set(40.87)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(40.87)
                        HandleNextTime.set(102.17)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(102.17)
                        HandleNextTime.set(277.33)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(277.33)
                        HandleNextTime.set(831.99)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(831.99)
                        HandleNextTime.set(1220.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(1220.23)
                        HandleNextTime.set(1740.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(1740.11)
                        HandleNextTime.set(2140.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(2140.23)
                        HandleNextTime.set(3440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(3440.23)
                        HandleNextTime.set(4440.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(4440.23)
                    }
                }

                if ($HandleMineCount === 13) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(2.06)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.06)
                        HandleNextTime.set(4.50)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(4.50)
                        HandleNextTime.set(10.35)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(10.35)
                        HandleNextTime.set(25.30)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(25.30)
                        HandleNextTime.set(58.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(58.00)
                        HandleNextTime.set(89.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(89.03)
                        HandleNextTime.set(121.19)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(121.19)
                        HandleNextTime.set(240.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(240.78)
                        HandleNextTime.set(420.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(420.23)
                        HandleNextTime.set(640.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1440.23)
                    }
                }

                if ($HandleMineCount === 14) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(2.25)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.25)
                        HandleNextTime.set(5.40)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(5.40)
                        HandleNextTime.set(27.11)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(27.11)
                        HandleNextTime.set(45.39)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(45.39)
                        HandleNextTime.set(78.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(78.00)
                        HandleNextTime.set(121.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(121.03)
                        HandleNextTime.set(210.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(210.09)
                        HandleNextTime.set(540.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(540.78)
                        HandleNextTime.set(740.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(740.23)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1240.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(1240.23)
                    }
                }

                if ($HandleMineCount === 15) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(2.75)
                    }
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(2.75)
                        HandleNextTime.set(8.25)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.75)
                        HandleNextTime.set(8.25)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(8.25)
                        HandleNextTime.set(27.11)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(27.11)
                        HandleNextTime.set(99.39)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(99.39)
                        HandleNextTime.set(211.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(211.00)
                        HandleNextTime.set(491.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(891.03)
                        HandleNextTime.set(790.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(1990.09)
                        HandleNextTime.set(940.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(2840.78)
                        HandleNextTime.set(5740.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(5740.23)
                        HandleNextTime.set(10040.23)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(10040.23)
                    }
                }

                if ($HandleMineCount === 16) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(2.75)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.75)
                        HandleNextTime.set(8.25)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(8.25)
                        HandleNextTime.set(27.11)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(27.11)
                        HandleNextTime.set(99.39)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(99.39)
                        HandleNextTime.set(211.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(211.00)
                        HandleNextTime.set(491.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(491.03)
                        HandleNextTime.set(790.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(790.09)
                        HandleNextTime.set(940.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(940.78)
                        HandleNextTime.set(1240.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(1240.23)
                    }
                }

                if ($HandleMineCount === 17) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(3.09)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(3.09)
                        HandleNextTime.set(10.61)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(10.61)
                        HandleNextTime.set(40.66)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(40.66)
                        HandleNextTime.set(178.91)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(178.91)
                        HandleNextTime.set(229.20)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(329.20)
                        HandleNextTime.set(396.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(796.23)
                        HandleNextTime.set(590.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(1390.09)
                        HandleNextTime.set(740.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(2340.78)
                    }
                }

                if ($HandleMineCount === 18) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(3.54)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(3.54)
                        HandleNextTime.set(14.14)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(14.14)
                        HandleNextTime.set(65.06)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(65.06)
                        HandleNextTime.set(357.81)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(357.81)
                        HandleNextTime.set(589.20)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(589.20)
                        HandleNextTime.set(779.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(779.23)
                        HandleNextTime.set(909.23)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(909.23)
                    }
                }

                if ($HandleMineCount === 19) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(4.13)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(4.13)
                        HandleNextTime.set(19.8)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(19.8)
                        HandleNextTime.set(113.85)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(113.85)
                        HandleNextTime.set(209.17)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(209.17)
                        HandleNextTime.set(389.20)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(389.20)
                        HandleNextTime.set(679.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(679.23)
                    }
                }

                if ($HandleMineCount === 20) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(4.95)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(4.95)
                        HandleNextTime.set(29.70)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(29.70)
                        HandleNextTime.set(227.7)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(227.7)
                        HandleNextTime.set(409.17)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(609.17)
                        HandleNextTime.set(729.27)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(1409.27)
                    }
                }

                if ($HandleMineCount === 21) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(6.19)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(6.19)
                        HandleNextTime.set(49.50)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(49.50)
                        HandleNextTime.set(119.77)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(119.77)
                        HandleNextTime.set(319.77)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(319.77)
                    }
                }

                if ($HandleMineCount === 22) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(8.24)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(8.24)
                        HandleNextTime.set(99.00)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(99.00)
                        HandleNextTime.set(129.77)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(129.77)
                    }
                }

                if ($HandleMineCount === 23) {
                    if ($HandleSelectedMine === 0) {
                        HandleNextTime.set(12.38)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(12.38)
                        HandleNextTime.set(297.00)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(297.00)
                    }
                }

                if ($HandleMineCount === 24) {     
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(24.75)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(24.75)
                    }
                }
                HandlemineGems.set(ins.length)
                HandleIsAlive.set(pops.active)
                let waskj = [{
                    mines: pops.mine,
                    bet_amount: pops.bet_amount,
                    bet_token_name: pops.bet_token_name,
                    bet_token_img: pops.bet_token_img
                }]
                betDetails.set(waskj[0]);
                HandleMineCount.set(pops.mine);
            }
        })
        .catch((error) => {
            console.log(error)
        })
    await historyMines()
})