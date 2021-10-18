import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    auth.signOut();
  }

  function resetPassword(email) {
    return auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log('new password is sent');
      })
      .catch((error) => {
        console.log(error.code, 'AND', error.message);
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, signUp, login, logout, resetPassword };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
