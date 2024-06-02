import React from 'react'
import Form from './Form';
import TaskCard from './TaskCard';

const TasksPage = ({ formOpen, handleFormOpen }) => {
    return (
        <div className='flex flex-row w-full'>
            <div className='flex flex-row w-full'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-row items-center justify-between w-full'>

                        <h1 className='font-black text-5xl m-8 px-50 w-full'>
                            ToDo
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
                        <div className="flex flex-col gap-5">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="">
                                    
                                    <TaskCard></TaskCard>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {formOpen &&
                <div className='right-0 top-0 flex flex-row justify-center items-center sticky'>
                    <Form handleFormOpen={handleFormOpen}/>
                </div>
            }
        </div>
    )
}

export default TasksPage;