/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const Context = ({children}) => {

    const [user , setUser] = useState()
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

      //  registration
      const CreateUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }
    const authInfo ={
       user, 
       loading,
       CreateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;