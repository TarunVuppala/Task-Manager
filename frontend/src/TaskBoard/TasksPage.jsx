import React , { useEffect, useState } from 'react'
import Form from './Form';
import TaskCard from './TaskCard';

const TasksPage = ({ formOpen, handleFormOpen }) => {
    let [taskAdded,setTaskAdded]=useState(0);
    const [tasks,setTasks]=useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(response => response.json())
            .then(data => setTasks(data.tasks))
            .catch(error => console.error('Error fetching tasks:', error));
    }, [taskAdded]);
    const handleTaskAdded=()=>{
        setTaskAdded(taskAdded+1);
    }

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
                            {tasks.map((task, index) => (
                                <div key={task._id} className="">
                                    
                                    <TaskCard title={task.title} description={task.description} tag={task.tag} date={task.date.split('T')[0]} priority={task.priority} frequency={task.frequency}/>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {formOpen &&
                <div className='right-0 top-0 flex flex-row justify-center items-center absolute'>
                    <Form handleFormOpen={handleFormOpen} handleTaskAdded={handleTaskAdded} taskAdded={taskAdded}/>
                </div>
            }
        </div>
    )
}

export default TasksPage;