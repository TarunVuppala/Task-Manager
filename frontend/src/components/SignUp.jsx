import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

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
        if(data.success){
            history("/login");
        }
        setMsg(data.err);
    }

    return (
        <>
            <div className="flex items-center justify-center bg-transparent">
                <div className="min-h-screen-flex justify-center bg-white p-8 rounded-tl-2xl shadow-lg w-[500px] h-[500px]">
                    <div className="flex md:flex-col">
                        <div className="flex flex-row items-center justify-center gap-[21px]">
                            <button className="bg-[#F04D23] text-white mb-4 font-bold rounded-[20px] py-2 px-9">SIGN UP</button>
                            <button className="border border-[#F04D23] mb-4 font-bold text-black py-2 px-12 rounded-[20px]">
                                <Link to="/login">LOGIN</Link>
                            </button>
                        </div>
                    </div>
                    <h1 className="flex font-bold items-center justify-center text-4xl">SIGN UP</h1>
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
                            type="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border mb-4 size-full border-black rounded-[20px] py-2 px-9"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border size-full mb-4 border-black rounded-[20px] py-2 px-9"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border size-full mb-4 border-black rounded-[20px] py-2 px-9"
                        />
                        <button type="submit" className="flex justify-center bg-[#F04D23] text-white font-bold mb-4 rounded-[20px] py-2 px-9">
                            SIGN UP
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
