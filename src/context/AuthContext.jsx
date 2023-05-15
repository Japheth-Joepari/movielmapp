import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setAuthUser(user);
        setImage(user.photoURL); // Use "user" instead of "authenticatedUser"
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => listen(); // Move the return statement outside of the callback
  }, []);

  // signIn with Google
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setImage(result.user.photoURL); // Use "result.user" instead of "authenticatedUser"
        toast.success("Sign in successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Can't sign you in. Redirecting...");
      });
  };

  //   sign in using twitter
  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const secret = credential.secret;

        // The signed-in user info.
        const user = result.user;
        setImage(result.user.photoURL);
        toast.success("Sign in successful");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = TwitterAuthProvider.credentialFromError(error);
        toast.error("Can't sign you in. Redirecting...");
        // ...
      });
  };

  // sign out
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign out successful");
      })
      .catch((error) => toast.error("Unable to sign out"));
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        image,
        signInWithGoogle,
        signInWithTwitter,
        userSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
