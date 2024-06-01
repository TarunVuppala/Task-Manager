import React from 'react'

const Form = () => {
    return (
        <div className='flex flex-col p-10 h-screen gap-[21px] bg-white border shadow-xl'>
            <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder='Title'
                className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] px-8 py-2 text-4xl'
            />
            <textarea
                type="text"
                id="firstName"
                name="firstName"
                placeholder='Description'
                className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] p-8'
                rows={14}
            />

            <div className='flex flex-col justify-between gap-4'>
                <div className='flex flex-row justify-between items-center w-full gap-[21px]'>
                    <select
                        id="category"
                        name="category"
                        className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] py-4 flex justify-center items-center bg-transparent text-center font-black'
                    >
                        <option value="select tag">select tag</option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                    </select>

                    <select
                        id="category"
                        name="category"
                        className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] py-4 flex justify-center items-center bg-transparent text-center font-black'
                    >
                        <option value="select tag">date & time</option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                    </select>
                </div>

                <div className='flex flex-row justify-between items-center w-full gap-[21px]'>
                    <select
                        id="category"
                        name="category"
                        className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] py-4 flex justify-center items-center bg-transparent text-center font-black'
                    >
                        <option value="select tag">select priority</option>
                        <option value="personal">Now</option>
                        <option value="work">Soon</option>
                        <option value="home">Later</option>
                    </select>

                    <select
                        id="category"
                        name="category"
                        className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] py-4 flex justify-center items-center bg-transparent text-center font-black'
                    >
                        <option value="select tag">repeat frequency</option>
                        <option value="personal">Daily</option>
                        <option value="work">Weekly</option>
                        <option value="home">Monthly</option>
                        <option value="home">Yearly</option>
                    </select>
                </div>

                <button className='py-4 border rounded-[20px] w-full bg-[#F04D23] font-black text-white'>SAVE CHANGES</button>
                <button className='py-4 border rounded-[20px] w-full border-[#F04D23] font-black '>DISCARD</button>

            </div>

        </div>
    )
}

export default Form