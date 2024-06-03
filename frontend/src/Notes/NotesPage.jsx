import React from "react";
function NotesPage() {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className='flex flex-row w-full'>
            <div className='flex flex-col w-full'>
                <div className='flex flex-row items-center justify-between'>

                    <h1 className='font-black text-5xl m-8 px-50'>
                        Notes
                    </h1>
                    <select
                        id="category"
                        name="category"
                        className='border rounded-[20px]  text-[#1E1E1E] py-1 flex  bg-transparent  font-black'
                    >
                        <option value="select tag">
                            <div>

                            </div>
                        </option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                    </select>
                </div>

                <div>
                    <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 ">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="rounded-[20px] w-[250px] h-[250px]  bg-[#ececec] dark:bg-[#ececec] hover:shadow-lg transition-all hover:scale-105">
                                <label htmlFor={`input${index}`} className="p-10 flex flex-row justify-start item-center block text-2xl font-bold  text-3xl text-gray-700">
                                    Note {index + 1}
                                </label>
                                <p className="pb-1 pl-10 pr-7 text-xl">{truncateText("Hello this the notes with lines Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi tempore excepturi optio minus quae voluptates, libero velit suscipit ea earum expedita odio consequuntur inventore qui autem explicabo quibusdam, exercitationem nihil. ", 30)}</p>
                                
                                <button><i className="flex flex-row justify-end items-center mt-8 ml-[200px] fa-solid fa-trash"></i></button>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}



export default NotesPage;