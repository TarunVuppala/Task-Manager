import React , {useState} from "react";
function NotesPage() {
    
    return (
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-between'>
                
                <h1 className='font-black text-5xl m-8 px-50'>
                    Notess
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
                    <div className="p-4 grid grid-cols gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="shadow-lg p-4 rounded-lg">
                                <label htmlFor={`input${index}`} className="block text-xl font-bold text-gray-700 mb-3">
                                    Note {index + 1}
                                </label>
                                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos expedita provident amet modi deleniti facilis reprehenderit repellat tempore? Dignissimos facere aliquam cumque nobis incidunt porro.</p>
                                <div className=" flex flex-row items-end justify-end pt-10">
                                    <button><i class="fa-solid fa-trash"></i></button>
                                </div>

                            </div>
                        ))}
                    </div>








                </div>
            </div>
        </div>
    );
    
}



export default NotesPage;