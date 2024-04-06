/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const createUser = (email , password ) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login = (email,password) =>{
        setLoader(true);

        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        setLoader(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged (auth, currentUser => {
            
            setUser(currentUser);
            setLoader(false);
        })
        return () =>{
            unSubscribe();
        }
    },[])
    const authInfo = {user,createUser,login,logOut,loader};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;