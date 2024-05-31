import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <div className="flex items-center justify-center bg-transparent">
                <div className="min-h-screen-flex justify-center bg-white p-8 rounded-tl-2xl shadow-lg w-[500px] h-[500px] ">
                    <div className='flex md:flex-col'>
                        <div className='flex flex-row items-center  justify-center gap-[21px]'>
                            <button className={"bg-[#F04D23] text-white mb-4 font-bold rounded-[20px] py-2 px-9"}>
                                SIGN UP
                            </button>

                            <button className={" border border-[#F04D23] mb-4 font-bold text-black py-2 px-12  rounded-[20px] "}>

                                <Link to="/login">LOGIN</Link>

                            </button>
                        </div>
                    </div>
                    <h1 className="flex font-bold items-center justify-center text-4xl">SIGN UP</h1>
                    <form action="signup" className="flex-col" >
                        <input type="text" name="username" id="" placeholder="username" className="border mt-5 mb-4 size-full border-black rounded-[20px] py-2 px-9 " />
                        <input type="email" name="email" id="" placeholder="email" className="border mb-4 size-full border-black rounded-[20px] py-2 px-9" />
                        <input type="password" name="password" id="" placeholder="password" className="border size-full mb-4 border-black rounded-[20px] py-2 px-9" />
                        <input type="password" name="confirm_password" id="" placeholder="confirm password" className="border size-full mb-4 border-black rounded-[20px] py-2 px-9" />
                        <input type="text" name="phno" id="" placeholder="mobile number" className="border size-full mb-4 border-black rounded-[20px] py-2 px-9" />
                        <button className={"flex  justify-center bg-[#F04D23] text-white font-bold mb-4 rounded-[20px] py-2 px-9"}>
                            SIGN UP
                        </button>
                    </form>


                </div>
            </div>




        </>
    )
}

export default SignUp;