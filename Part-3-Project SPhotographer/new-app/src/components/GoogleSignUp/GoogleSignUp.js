import React from "react";
import Button from "react-bootstrap/Button";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import googleImg from "../../images/google.png";
import "./GoogleSignUp.css";

const GoogleSignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>User Registered</p>
      </div>
    );
  }
  return (
    <div className="googleSignUp">
      <Button className="mt-3" onClick={() => signInWithGoogle()} type="submit">
        <img src={googleImg} alt="" />
        Continue With Google
      </Button>
    </div>
  );
};

export default GoogleSignUp;
