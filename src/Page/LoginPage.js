import React, { useState } from "react";
import "./LoginPage.css";
import Gmail from "../Images/gmail.png";
import Header from "../Images/logo.png";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href =
        "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://onebox-mailbot.netlify.app/onebox";
    }, 2000);
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img src={Header} alt="" />
      </header>

      <main className="login-main">
        <div className="login-box">
          <h2>Create a new account</h2>

          <button
            onClick={handleGoogleSignUp}
            disabled={loading}
            className="google-signup-btn"
          >
            <img src={Gmail} alt="gmail" />
            Sign Up with Google
          </button>
          <button className="create-account-btn">Create an Account</button>
          <p>
            Already have an account?{" "}
            <a href="/signin" className="signin-link">
              Sign In
            </a>
          </p>
        </div>
      </main>

      <footer className="login-footer">
        <p>© 2024 ReachInBox. All rights reserved.</p>
      </footer>

      {loading && (
        <div role="status" className="loading">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
