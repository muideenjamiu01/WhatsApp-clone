import React from "react";
import { Button } from "@mui/material";
import "./Login.css";
import { provider, auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

// import { firebase } from 'firebase/compat/app';

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    // Note
    // to use the ggole auth service from firebase
    // go to firebase console, click on authentication and enable sig-in it
    auth
      .signInWithPopup(provider)
      .then((result) =>
        // console.log("result", result)
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((error) => alert(error.message));
    console.log("Im in ");
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.freepnglogos.com/uploads/whatsapp-png-image-9.png"
          alt="whatsapp-logo"
        />
        <div className="login_text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
