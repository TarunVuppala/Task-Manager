import React, { useEffect, useState } from 'react';
import Form from './Form';
import TaskCard from './TaskCard';
import { useUser } from '../context/UserContext';

const TasksPage = ({ formOpen, handleFormOpen }) => {
    const { user, setUser } = useUser();
    const [taskAdded, setTaskAdded] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/task/${user._id}`)
            .then(response => response.json())
            .then(data => setTasks(data.tasks))
            .catch(error => console.error('Error fetching tasks:', error));
    }, [taskAdded, user, toggle]);

    const handleTaskAddDel = (a) => {
        setTaskAdded(taskAdded + a);
    };

    const fetchUser = async () => {
        const response = await fetch('http://localhost:5000/login');
        const data = await response.json();
        if (data.success) {
            setUser(data.user);
        } else {
            setUser(null);
        }
    };

    if (!user) {
        fetchUser();
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            handleTaskAddDel(-1);
        }).catch(error => console.error('Error deleting task:', error));
    };

    const handleToggle = (id) => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setToggle(!toggle);
        }).catch(error => console.error('Error toggling task:', error));
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredTasks = selectedCategory === '' ? tasks : tasks.filter(task => task.tag === selectedCategory);

    return (
        <div className='flex flex-row w-full gap-4'>
            <div className='flex flex-col w-full gap-5'>
                <div className='text-3xl font-semibold w-full'>Your Tasks</div>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-row gap-3 items-center'>
                        <div>Category:</div>
                        <select onChange={handleCategoryChange} className='p-2 border rounded-md'>
                            <option value=''>All</option>
                            <option value='personal'>Personal</option>
                            <option value='work'>Work</option>
                            <option value='home'>Home</option>
                        </select>
                    </div>
                    <div>
                        <div className='flex flex-col gap-5'>
                            {filteredTasks.length === 0 ? "Add a Task" : filteredTasks.map((task) => (
                                <div key={task._id} className=''>
                                    <TaskCard
                                        handleToggle={handleToggle}
                                        id={task._id}
                                        handleDelete={handleDelete}
                                        title={task.title}
                                        description={task.description}
                                        tag={task.tag}
                                        date={task.date.split('T')[0]}
                                        priority={task.priority}
                                        frequency={task.recurring}
                                        completed={task.completed}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
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
