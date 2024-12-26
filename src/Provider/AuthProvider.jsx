import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import axios from "axios";




export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [loading, setLoading] = useState(true) ;

    const [user, setUser] = useState(null);
    // console.log(user, loading);

    

    const CreateNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleGoogleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
       }
    const logOut =() =>{
        return signOut(auth)
    }
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const authInfo ={
        user,
        setUser,
        CreateNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        handleGoogleLogin,
    };

    
    useEffect( () => {
        const undo = onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser);
            console.log('state captured', currentUser?.email);
            
            if (currentUser?.email) {
                const user = {email: currentUser.email};

                axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                setLoading(false);

                }
                )
            }
            else {
                axios.post('http://localhost:5000/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout', res.data);
                    setLoading(false);
                }
                )
            }


            
        });
        return () => {
            undo();
        }
    }, [])
    return (<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>)
};

export default AuthProvider;