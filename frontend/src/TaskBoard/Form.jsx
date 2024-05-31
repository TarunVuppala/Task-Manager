import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col p-10 h-screen gap-[21px]'>
        <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder='Title'
        className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] px-10 py-2 text-4xl'
        />
        <textarea
        type="text"
        id="firstName"
        name="firstName"
        placeholder='Description'
        className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] px-10 py-2'
        rows={14}
        />

        <div className='flex flex-row justify-between gap-4'>
            <select
                id="category"
                name="category"
                className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] py-5 flex justify-center items-center'
            >
                <option value="select tag">select tag</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="home">Home</option>
            </select>

            <select
                id="category"
                name="category"
                className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] px-10 py-2 flex justify-center items-center'
            >
                <option value="select tag">select tag</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="home">Home</option>
            </select>
        </div>
        
    </div>
  )
}

export default Form