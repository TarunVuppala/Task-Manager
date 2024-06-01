import React from 'react'
import Form from './Form';
import TaskCard from './TaskCard';

const TasksPage = ({ formOpen }) => {
    return (
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <h1 className='font-black text-5xl'>ToDo</h1>
                <TaskCard></TaskCard>
            </div>

            {formOpen &&
                <div className='absolute right-0 top-0 flex flex-row'>
                    <div className='bg-black w-[1px] h-screen'></div>
                    <Form />
                </div>
            }
        </div>
    )
}

export default TasksPage;