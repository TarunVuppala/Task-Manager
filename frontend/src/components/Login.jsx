import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [msg, setMsg] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

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
        console.log(data);
        if (data.success) {
            console.log("Login successful, navigating to /");
            navigate("/");
        } else {
            setMsg(data.err);
        }
    }

    return (
        <>
            <div className="flex items-center justify-center bg-transparent">
                <div className="min-h-screen-flex justify-center bg-white p-8 rounded-tl-2xl shadow-lg w-[500px] h-[400px]">
                    <div className="flex md:flex-col">
                        <div className="flex flex-row items-center justify-center gap-[21px]">
                            <button className="border border-[#F04D23] mb-4 rounded-[20px] font-bold py-2 px-9">
                                <Link to="/signup">SIGN UP</Link>
                            </button>
                            <button className="bg-[#F04D23] text-white mb-4 text-black py-2 px-12 font-bold rounded-[20px]">
                                LOGIN
                            </button>
                        </div>
                    </div>
                    <h1 className="flex font-bold items-center justify-center text-4xl m-4">LOGIN</h1>
                    {msg && <p className="text-center text-red-500">{msg}</p>}
                    <form method="POST" onSubmit={handleSubmit} className="flex-col">
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border mt-5 mb-4 size-full border-black rounded-[20px] py-2 px-9"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border size-full mb-4 border-black rounded-[20px] py-2 px-9"
                        />
                        <button type="submit" className="flex mt-5 bg-[#F04D23] text-white font-bold mb-4 rounded-[20px] py-2 px-9">
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
