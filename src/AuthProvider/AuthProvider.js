import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-hot-toast";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = async (name, photoURL) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Updated profile");
    } catch (err) {
      console.error(err.message);
    }
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const emailVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const authoInfo = {
    user,
    setUser,
    signInWithGoogle,
    logOut,
    signUp,
    updateUser,
    logIn,
    loading,
    setLoading,
    emailVerify,
  };
  return (
    <div>
      <AuthContext.Provider value={authoInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
