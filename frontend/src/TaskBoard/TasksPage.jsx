import React, { useEffect, useState } from 'react'
import Form from './Form';
import TaskCard from './TaskCard';

const TasksPage = ({ formOpen, handleFormOpen, user }) => {
    let [taskAdded, setTaskAdded] = useState(0);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/task/${user._id}`)
            .then(response => response.json())
            .then(data => setTasks(data.tasks))
            .catch(error => console.error('Error fetching tasks:', error));
    }, [taskAdded, user._id]);
    const handleTaskAddDel = (a) => {
        setTaskAdded(taskAdded + a);
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            handleTaskAddDel(-1);
        })
            .catch(error => console.error('Error deleting task:', error));
    }

    const handleToggle = (id) => {
        fetch(`http://localhost:5000/task/${id}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            handleTaskAddDel(0);
            
        })
        .catch(error => console.error('Error deleting task:', error));
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
                            {tasks.length === 0 ? "Add a Task" : tasks.map((task, index) => (
                                <div key={task._id} className="">
                                    <TaskCard handleToggle={handleToggle} id={task._id} handleDelete={handleDelete} title={task.title} description={task.description} tag={task.tag} date={task.date.split('T')[0]} priority={task.priority} frequency={task.frequency} completed={task.completed} />

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {formOpen &&
                <div className='right-0 top-0 flex flex-row justify-center items-center absolute'>
                    <Form handleFormOpen={handleFormOpen} handleTaskAddDel={handleTaskAddDel} />
                </div>
            }
        </div>
    )
}

export default TasksPage;