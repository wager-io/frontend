import firebase from "firebase/compat/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {  goto } from "$app/navigation"
import { useLogin } from "../hook/useLogin";
import { useProfile } from "../hook/useProfile";
import { getFirestore } from "firebase/firestore";
import { useRegister } from "./createUser";
import { fbUseLogin } from "./fbSignup";
import {handleisLoggin, profileStore} from "../store/profile"
import { error_msg, is_loading} from "../../lib/nestedpages/auth/login/store"
import {  error_msgS, is_loadingS } from "$lib/nestedpages/auth/signup/store"
const { register } = useRegister()
const { createProfile } = useProfile()
const { login } = useLogin()
const { fblogin } = fbUseLogin()

import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider,
    signInWithEmailAndPassword, signOut } from "firebase/auth";
export const firebaseConfig = {
    apiKey: "AIzaSyCBdS_oGeNWBPqwq0orDC-QamTvt-IDmXE",
    authDomain: "wager-d268d.firebaseapp.com",
    projectId: "wager-d268d",
    storageBucket: "wager-d268d.appspot.com",
    messagingSenderId: "237092725037",
    appId: "1:237092725037:web:29353f4e2c2ca7958c73a4"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const handleSignIn = (async (email, password, reff)=>{
    is_loadingS.set(true)
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password)
    .then((res)=>{
        register({...res, reff})
    })
    .catch((err)=>{
        error_msgS.set(err.code.slice(5))
            console.log(err.code.slice(5))
        setInterval(()=>{
            error_msgS.set('')
        },4000)
        is_loadingS.set(false)
    })
 })



 export const handleLogin = (async (email, password)=>{
    is_loadingS.set(true)
    const auth = getAuth(app);
   await signInWithEmailAndPassword(auth, email, password)
   .then((res)=>{
     login(res)
     is_loadingS.set(false)
   })
   .catch((err)=>{
    error_msgS.set(err.code.slice(5))
    setInterval(()=>{
        error_msgS.set('')
    },4000)
    is_loadingS.set(false)
   })
 })

 export const handleGoogleAuth = (()=>{
    const auth = getAuth(app);
    signInWithPopup(auth, new GoogleAuthProvider())
    .then((res)=>{
        fblogin(res)
       })
       .catch((err)=>{
        alert(err.code)
    })
 })

 export const handleFacebookAuth = (()=>{
    const auth = getAuth(app);
    signInWithPopup(auth, new FacebookAuthProvider())
    .then((res)=>{
        goto("/")
        login(res)
        createProfile(res)
       })
       .catch((err)=>{
        alert(err.code)
    })
 })

 export const handleLogout = (async()=>{
    const auth = getAuth(app);
    signOut(auth).then((res) => {
        localStorage.removeItem("user");
        localStorage.removeItem("user_bet_amount");
        handleisLoggin.set(false)
        profileStore.set({})
      }).catch((error) => {
       console.log(error)
      });
 })
 