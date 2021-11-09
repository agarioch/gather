import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect({ screen_hint: "signup" })}>
      Signup
    </button>
  );
};

export default SignupButton;