import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Form = ({handleFormOpen, handleTaskAddDel, task, formOpen}) => {
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState({
        title: task.title?task.title:'',
        description: task.description?task.description:'',
        tag: task.tag?task.tag:'',
        date: task.date?task.date:'',
        priority: task.priority?task.priority:'',
        recurring: task.recurring?task.recurring:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // if(!formOpen){
    //     setFormData({
    //         title: '',
    //         description: '',
    //         tag: '',
    //         date: '',
    //         priority: '',
    //         recurring: ''
    //     });
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            });

            if (!response.ok) {
                console.log('Failed to create task');
                return;
            }

            console.log('Form submitted:', formData);
            setFormData({
                title: '',
                description: '',
                tag: '',
                date: '',
                priority: '',
                recurring: ''
            });
            handleFormOpen();
            handleTaskAddDel(1);
        } catch (error) {
            console.error('Error:', error);
            setMsg(error.message);
        }
    };

    const handleDiscard = () => {
        handleFormOpen();
        setFormData({
            title: '',
            description: '',
            tag: '',
            date: '',
            priority: '',
            recurring: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} method='POST' className='flex flex-col p-10 h-screen gap-[21px] bg-white shadow-xl dark:bg-[#161616] dark:text-white'>
            <button className="flex border rounded-full w-fit border-[#0b0c0e] dark:border-[#1E1E1E]" onClick={handleDiscard}><CloseIcon></CloseIcon></button>
            <p className='text-[#F04D23]'>{msg}</p>
            <input
                type="text"
                id="title"
                name="title"
                placeholder='Title'
                value={formData.title}
                onChange={handleChange}
                className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] px-8 py-2 text-4xl dark:bg-[#161616] dark:text-white dark:border-[#383838]'
            />
            <textarea
                id="description"
                name="description"
                placeholder='Description'
                value={formData.description}
                onChange={handleChange}
                className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] p-8 dark:bg-[#161616] dark:text-white dark:border-[#383838]'
                rows={14}
            />

            <div className='flex flex-col justify-between gap-4'>
                <div className='flex flex-row justify-between items-center w-full gap-[21px]'>
                    <select
                        id="tag"
                        name="tag"
                        value={formData.tag}
                        onChange={handleChange}
                        className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] py-4 flex justify-center items-center bg-transparent text-center font-black dark:bg-[#161616] dark:text-white dark:border-[#383838]'
                    >
                        <option value="">Select Tag</option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                    </select>

                    <input
                        type="datetime-local"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] py-4 flex justify-center items-center bg-transparent text-center font-black dark:bg-[#161616] dark:text-white dark:border-[#383838]'
                    />
                </div>

                <div className='flex flex-row justify-between items-center w-full gap-[21px]'>
                    <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] py-4 flex justify-center items-center bg-transparent text-center font-black dark:bg-[#161616] dark:text-white dark:border-[#383838]'
                    >
                        <option value="">Select Priority</option>
                        <option value="now">Now</option>
                        <option value="soon">Soon</option>
                        <option value="later">Later</option>
                    </select>

                    <select
                        id="recurring"
                        name="recurring"
                        value={formData.recurring}
                        onChange={handleChange}
                        className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] py-4 flex justify-center items-center bg-transparent text-center font-black dark:bg-[#161616] dark:text-white dark:border-[#383838]'
                    >
                        <option value="">Repeat recurring</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>

                <button type="submit" className='py-4 rounded-[20px] w-full bg-[#F04D23] font-black text-white'>
                    SAVE CHANGES
                </button>
                <button type="button" className='py-4 border rounded-[20px] w-full border-[#F04D23] font-black'>
                    DISCARD
                </button>
            </div>
        </form>
    );
}

export default Form;