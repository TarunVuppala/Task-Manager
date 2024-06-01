import React from 'react'
import Form from './Form';

const TasksPage = ({ formOpen }) => {
    return (
        <>
            All TASKS

            <div className='w-[1px] h-screen bg-black'></div>
            {formOpen &&
                <>
                    <div className='w-full h-screen flex flex-row'>
                        <div className='w-[50%] flex flex-col justify-between items-center'>
                            <Form />
                        </div>
                    </div>
                </>
            }
        </>

    )
}

export default TasksPage;