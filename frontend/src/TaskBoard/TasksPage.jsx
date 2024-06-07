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
    const [taskSelected, setTaskSelected] = useState({});

    useEffect(() => {
        if (!formOpen) {
            setTaskSelected({});
        }
    }, [formOpen]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:5000/login');
                const data = await response.json();
                if (data.success) {
                    setUser(data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        const fetchTasks = async (userId) => {
            try {
                const response = await fetch(`http://localhost:5000/task/${userId}`);
                const data = await response.json();
                setTasks(data.tasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        if (!user) {
            fetchUser();
        } else {
            fetchTasks(user._id);
        }
    }, [taskAdded, user, toggle]);

    const handleTaskAddDel = (a) => {
        setTaskAdded(taskAdded + a);
    };

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
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='flex flex-row items-center justify-between w-full'>

                            <h1 className='font-black text-5xl m-8 px-50 w-full'>
                                ToDo
                            </h1>
                            <select
                                id="category"
                                name="category"
                                className='border rounded dark:border-[#303030]  dark:text-[#D1CDC5] py-1 flex bg-transparent font-black'
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                <option value="">All</option>
                                <option value="personal" className='text-black'>Personal</option>
                                <option value="work" className='text-black'>Work</option>
                                <option value="home" className='text-black'>Home</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-5 w-full'>
                            {filteredTasks.length === 0 ? "Add a Task" : filteredTasks.map((task) => (
                                <div key={task._id} className=''>
                                    <TaskCard
                                        formOpen={formOpen}
                                        setTaskSelected={setTaskSelected}
                                        handleFormOpen={handleFormOpen}
                                        handleToggle={handleToggle}
                                        handleDelete={handleDelete}
                                        task={task}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {formOpen && (
                    <div className='right-0 top-0 flex flex-row justify-center items-center absolute'>
                        <Form toggle={toggle} setToggle={setToggle} formOpen={formOpen} task={taskSelected} handleFormOpen={handleFormOpen} handleTaskAddDel={handleTaskAddDel} />
                    </div>
                )}
            </div>

        </div>
    );
};

export default TasksPage;