import React , {useState} from "react";
function NotesPage() {
    
    return (
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-between'>
                
                <h1 className='font-black text-5xl m-8 px-50'>
                    Notes
                </h1>
                    <select
                        id="category"
                        name="category"
                        className='border rounded-[20px]  text-[#1E1E1E] py-1 flex  bg-transparent  font-black'
                    >
                        <option value="select tag">|||</option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                    </select>
                </div>

                <div>
                    <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 ">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="shadow-lg rounded-lg w-[200px] h-[200px] flex justify-center items-center bg-[#e9e9e9]">
                                <label htmlFor={`input${index}`} className="block text-xl font-bold text-gray-700 mb-3">
                                    Note {index + 1}
                                </label>
                                <button><i class="fa-solid fa-trash"></i></button>

                            </div>
                        ))}
                    </div>








                </div>
            </div>
        </div>
    );
    
}



export default NotesPage;