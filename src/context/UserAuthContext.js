import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
const userAuthContext = createContext();
export function userAuthContext({children}){
    const [user,setUSer]=useState("")
    function userlogin(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function Signup(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
       const unsub= onAuthStateChanged(auth,(currentUser)=>{
        setUSer(currentUser);
    })
    return ()=>{
        sub();
    }
},[])
   return <userAuthContext.Provider value={}>{children}</userAuthContext.Provider>
)
}

export function useUserAuth(){
    return useContext(userAuthContext);
}