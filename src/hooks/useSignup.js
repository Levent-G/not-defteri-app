import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const { dispatch } = useAuthContext();
  const signup = async (email, password, userName) => {
    setError(null);
    setPending(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!response) {
        throw new Error("Üyelik İşlemi Gerçekleşmedi!");
      }
      updateProfile(response.user, { displayName: userName });

      dispatch({ type: "LOGIN", payload: response.user });
      setError(null);
      setPending(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setPending(false);
    }
  };
  return { error, pending, signup };
};
