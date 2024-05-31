import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <h1>Login Page</h1>
            <Link to="/signup">Signup</Link>
        </>
    )
}

export default Login;