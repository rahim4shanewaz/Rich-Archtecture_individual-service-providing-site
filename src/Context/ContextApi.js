import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);


const ContextApi = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();




    const createUser = (email, password) =>{
        setLoading(true);
        
        return createUserWithEmailAndPassword(auth, email, password);
        
    };

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const updateUserprofile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    };

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,
            currentUser => {
                setUser(currentUser);
                setLoading(false);
            })
            return () =>{
                unsubscribe();
            }
    },[])

    const authInfo = {
        user,
        updateUserprofile,
        createUser,
        signIn, 
        logOut, 
        signInWithGoogle,
       loading
   };
    
    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default ContextApi;