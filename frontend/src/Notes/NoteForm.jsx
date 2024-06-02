import React from 'react'

function NoteForm() {
    return (
        <form className='w-full'>
            <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder='Title'
                className='border rounded-[20px] m-4 ml-0 mt-8 w-full border-[#1E1E1E] text-[#1E1E1E] px-8 py-2 text-4xl'
            />
            <textarea
                type="text"
                id="firstName"
                name="firstName"
                placeholder='Description'
                className='flex border rounded-[20px] ml-0 w-full border-[#1E1E1E] text-[#1E1E1E] p-8'
                rows={14}
            />

            <div className='flex flex-col justify-between gap-4'>
                <div className='flex flex-row justify-between items-center w-full gap-[21px]'>

                </div>

                <div className='flex flex-row justify-start items-center'>
                    <button className='py-3 px-5 ml-4 border rounded-[20px]  bg-[#F04D23] font-black text-white'>Add Note</button>
                    <button className='py-3 px-5 ml-4 border rounded-[20px]  border-[#F04D23] font-black '>Discard</button>
                </div>

            </div>
        </form>
    );
}
export default NoteForm;