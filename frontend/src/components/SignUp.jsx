import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
    const history = useNavigate();
    const [msg, setMsg] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        if (password !== confirmPassword) {
            setMsg("Passwords do not match");
            return;
        }
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        if (data.success) {
            history("/login");
        }
        setMsg(data.err);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-transparent w-fit h-fit border rounded-[20px] px-52 py-10 shadow-lg">
                <div className="flex flex-row items-center justify-center gap-[21px] w-full">
                    <Link to="/signup" className="w-full">
                        <button className="bg-[#F04D23] text-white rounded-[20px] font-bold w-full py-3">SIGN UP</button>
                    </Link>

                    <Link to="/login" className="w-full">
                        <button className="border border-[#F04D23]  w-full py-3 font-bold rounded-[20px]">
                            LOGIN
                        </button>
                    </Link>
                </div>

                <h1 className="flex font-bold items-center justify-center text-4xl mt-10">SIGN UP</h1>

                {msg && <p className="text-center text-red-500">{msg}</p>}
                
                <form method="POST" onSubmit={handleSubmit} className="flex flex-col w-full justify-center">
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border mt-5 mb-4 size-full border-black rounded-[20px] py-3 px-5"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border mb-4 size-full border-black rounded-[20px] py-3 px-5"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border size-full mb-4 border-black rounded-[20px] py-3 px-5"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border size-full mb-4 border-black rounded-[20px] py-3 px-5"
                    />
                    <button type="submit" className="flex justify-center bg-[#F04D23] text-white font-bold mt-5 rounded-[20px] py-3 px-10">
                            SIGN UP
                    </button>
                </form>
            </div>
        </>
    );
}

export default SignUp;
