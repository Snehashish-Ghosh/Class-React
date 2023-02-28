import React from "react";
import Button from "react-bootstrap/Button";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import gitImg from "../../images/gitImg.png";
import "./GitSignUp.css";

const GitSignUp = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
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
    <div className="gitSignUp">
      <Button className="mt-3" onClick={() => signInWithGithub()} type="submit">
        <img src={gitImg} alt="" />
        Continue With Github
      </Button>
    </div>
  );
};

export default GitSignUp;
