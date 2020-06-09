import React from "react";
import SignIn from "../../components/signin/signin.component";

import "./signin-and-signup-page.styles.scss";

function SignInAndSignUpPage() {
  return (
    <div className="signin-signup-page">
      <div className="sign-in-wrapper">
        <SignIn />
      </div>
      <div className="sign-up-wrapper">SignUp</div>
    </div>
  );
}

export default SignInAndSignUpPage;
