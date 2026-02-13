import React, { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';

import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../fairebase/fairbase___init__';

const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signup
  const register = (email, password, displayName, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(result =>
        updateProfile(result.user, { displayName, photoURL })
      );
  };

  // login
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // google login
  const googleSignIn = () =>
    signInWithPopup(auth, googleProvider);

  // logout
  const logout = () => signOut(auth);

  // reset password
  const resetPassword = (email) =>
    sendPasswordResetEmail(auth, email);

  // update profile
  const updateUserProfile = (profile) =>
    updateProfile(auth.currentUser, profile);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const value = {
    user,
    loading,
    register,
    login,
    googleSignIn,
    logout,
    resetPassword,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
