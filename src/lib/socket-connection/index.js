import Ably from "ably";

export const handleSocketEmmission = (()=>{
    let ably = new Ably.Realtime.Promise("dUjS3Q.PoS8yw:LtcMZYuAmg9VdrrzL_rAj_TmnKzWHitnvVqe4YBKKWg")
    ably.connection.once("connected", () => {
      console.log("Connected to Ably!")
    })
    return ably
}) 