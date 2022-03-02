import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2>Log In</h2>
     
      <form>
        <label>Email: </label>
        <input type="text" />

        <br />
        <label>Password </label>
        <input type="text" />

        <br />
        <input type="submit" />
      </form>

      <div>
        Need an account?
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
