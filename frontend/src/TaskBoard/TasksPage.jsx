import React, { useEffect, useState } from 'react';
import Form from './Form';
import TaskCard from './TaskCard';
import { useUser } from '../context/UserContext';

const TasksPage = ({ formOpen, handleFormOpen }) => {
    const { user } = useUser();
    const [taskAdded, setTaskAdded] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (!user) return; // Ensure user is available

        fetchTasks(); // Fetch tasks when user is available
    }, [user, taskAdded, toggle]); // Add user, taskAdded, toggle to dependency array

    const fetchTasks = async () => {
        try {
            const response = await fetch(`http://localhost:5000/task/${user._id}`);
            const data = await response.json();
            setTasks(data.tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleTaskAddDel = (a) => {
        setTaskAdded(taskAdded + a);
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            handleTaskAddDel(-1);
        })
        .catch(error => console.error('Error deleting task:', error));
    };

    const handleToggle = (id) => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            setToggle(!toggle);
        })
        .catch(error => console.error('Error toggling task:', error));
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredTasks = selectedCategory === '' ? tasks : tasks.filter(task => task.tag === selectedCategory);

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row items-center'>
            <div className='text-3xl font-semibold'>Your Tasks</div>
                <div>Category:</div>
                <select onChange={handleCategoryChange} className='p-2 border rounded-md'>
                    <option value=''>All</option>
                    <option value='personal'>Personal</option>
                    <option value='work'>Work</option>
                    <option value='home'>Home</option>
                </select>
            </div>
            <div className='flex flex-col gap-5'>
                {filteredTasks.length === 0 ? "Add a Task" : filteredTasks.map((task) => (
                    <div key={task._id}>
                        <TaskCard
                            handleToggle={handleToggle}
                            handleDelete={handleDelete}
                            {...task}
                        />
                    </div>
                ))}
            </div>
            {formOpen && (
                <div className='right-0 top-0 flex flex-row justify-center items-center absolute'>
                    <Form handleFormOpen={handleFormOpen} handleTaskAddDel={handleTaskAddDel} />
                </div>
            )}
        </div>
    );
};

export default TasksPage;
