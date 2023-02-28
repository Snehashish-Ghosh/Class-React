import React from "react";
import Button from "react-bootstrap/Button";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import fbImg from "../../images/fblogo.jpg";
import "./FbSignUp.css";

const FbSignUp = () => {
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);
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
    <div className="fbSignUp">
      <Button
        className="mt-3"
        onClick={() => signInWithFacebook()}
        type="submit"
      >
        <img src={fbImg} alt="" />
        Continue With Facebook
      </Button>
    </div>
  );
};

export default FbSignUp;
