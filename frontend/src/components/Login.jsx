import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';

function Login({ auth, handleLogin }) {
  const { setUser } = useUser();
  const [msg, setMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  if (auth) {
    navigate("/");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.success) {
      handleLogin();
      setUser(data.user);
      navigate("/");
    } else {
      setMsg(data.err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-transparent w-fit h-fit px-52 py-10  ">
      <div className="flex flex-row items-center justify-center gap-[21px] w-full">
        <Link to="/signup" className="w-full">
          <button className="border border-[#F04D23] rounded-[20px] font-bold w-full py-3">SIGN UP</button>
        </Link>
        <Link to="/login" className="w-full">
          <button className="bg-[#F04D23] text-white w-full py-3 font-bold rounded-[20px]">LOGIN</button>
        </Link>
      </div>
      <h1 className="flex font-bold items-center justify-center text-4xl m-4 mt-8">LOGIN</h1>
      {msg && <p className="text-center text-red-500">{msg}</p>}
      <form method="POST" onSubmit={handleSubmit} className="flex flex-col gap-5 w-full justify-center">
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border size-full border-black rounded-[20px] px-5 py-3"
          spellCheck={false}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border size-full border-black rounded-[20px] px-5 py-3"
        />
        <button type="submit" className="bg-[#F04D23] mt-10 text-white font-bold rounded-[20px] py-3 px-10">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
