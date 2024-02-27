import firebase from "firebase/compat/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {  goto } from "$app/navigation"
import { getFirestore } from "firebase/firestore";
import { useRegister } from "./createUser";
import {handleisLoggin, profileStore} from "../store/profile"
import { firebaseConfiguration } from "./firebaseConfig";
import { handleCheckUsername } from "./usernameHook"


import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider,
signInWithEmailAndPassword, signOut } from "firebase/auth";
const firebaseConfig = firebaseConfiguration()
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const handleSignIn = (async (email, password,username, reff)=>{
    let responses = ""
    let loading = true
    let error = ""
    let  { response, error_message } =  await handleCheckUsername(username)
    if(error_message){
        error = "Something went wrong"
        loading = false
    }
    else if(response.length > 0){
        error = "Username already exist"
        loading = false
    }else{
        const auth = getAuth(app);
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async(res)=>{
         responses = await useRegister({...res,username, reff})
          loading = false
        })
        .catch((err)=>{
            loading = false
            error = err.code.slice(5)
        })
    }
    return {responses, loading, error}
 })


 export const handleLogin = (async (email, password)=>{
    let responses = ""
    let loading = true
    let error = ""
    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, email, password)
    .then(async(res)=>{
        responses = await useRegister(res)
        loading = false
    })
    .catch((err)=>{
        error = err.code.slice(5)
        loading = false
    })
return { responses, loading, error }
})


export const handleGoogleAuth = (async()=>{
let responses = ""
let loading = true
let error = ""
const auth = getAuth(app);
await signInWithPopup(auth, new GoogleAuthProvider())
    .then(async(res)=>{
        responses = await useRegister(res)
        loading = false
    })
    .catch((err)=>{
        error = err.code.slice(5)
        loading = false
    })
    return { responses, loading, error }
})

 export const handleFacebookAuth = (()=>{
    const auth = getAuth(app);
    signInWithPopup(auth, new FacebookAuthProvider())
    .then((res)=>{
        goto("/")
       })
       .catch((err)=>{
        alert(err.code)
    })
 })

 
 export const handleLogout = (async()=>{
    const auth = getAuth(app);
    signOut(auth).then((res) => {
        handleisLoggin.set(false)
        profileStore.set({})
        window.location.href = ("")
        localStorage.removeItem("user");
        localStorage.removeItem("user_bet_amount");
      }).catch((error) => {
       console.log(error)
      });
 })
 