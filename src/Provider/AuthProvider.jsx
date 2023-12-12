import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import useAxios from '../Hooks/useAxios';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const axiosPublic = useAxios()
    const [userLoading, setUserLoading] = useState(true)
    const [user, setUser] = useState(null)
    // console.log(user)

    // CREATE A USER WITH EMAIL AND PASSWORD
    const handelUserCreate = (email, password) => {
        setUserLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //LOGIN WITH EMAIL PASSWORD
    const loginWithEmailPass = (email, password) => {
        setUserLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //LOGIN WITH GOOGLE
    const handelGoogleLogin = (googleProvider) => {
        setUserLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //UPDATE USER
    const handelUpadate = (name, photo) => {
        setUserLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    }

    //HANDEL LOGOUT
    const handelLogOut = () => {
        setUserLoading(true);
        signOut(auth);
    }

    //HANDEL USER WITH ON AUTH STATE CHANGE
    useEffect(() => {
        const currentUser = onAuthStateChanged(auth, (user) => {
            setUser(user);
            if (user) {
                const userInfo = { email: user.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setUserLoading(false);
                        }
                    })
            } else {
                localStorage.removeItem('access-token');
                setUserLoading(false);
            }
        });
        return () => {
            currentUser();
        };
    }, [axiosPublic]);

    const authInfo = {
        user,
        userLoading,
        handelUserCreate,
        loginWithEmailPass,
        handelUpadate,
        handelLogOut,
        handelGoogleLogin,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default AuthProvider