import React, { useState } from 'react';
import { useUser } from '../context/UserContext';


function NoteForm({ handleNotesOpen,noteAddDel, setNoteAddDel}) {
    const { user } = useUser();
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

    const handleNotesForm = async (e) => {
        e.preventDefault();
        const formData = { heading, description,tag };
        
        try {
            const response = await fetch(`http://localhost:5000/note/${user._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            });
            const data = await response.json();
            if (data.success) {
                console.log('Form Data Submitted:', formData);
                setNoteAddDel(noteAddDel + 1);
                setHeading('');
                setDescription('');
                handleNotesOpen();
            } else {
                console.log(data.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form className='flex flex-col p-10 h-screen gap-[21px] dark:text-white bg-transparent transition-all' onSubmit={handleNotesForm}>
            <input
                type="text"
                id="heading"
                name="heading"
                placeholder='Heading'
                className='border rounded-[20px] m-4 ml-0 mt-8 w-full border-[#1E1E1E] text-[#1E1E1E] px-8 py-2 text-4xl bg-transparent dark:text-white dark:border-[#383838]'
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
            />
            <select
                        id="tag"
                        name="tag"
                        value={tag}
                        onChange={handleTagChange}
                        className='border rounded-[20px] w-full border-[#1E1E1E] text-[#1E1E1E] py-4 flex justify-center items-center bg-transparent text-center font-black dark:bg-[#161616] dark:text-white dark:border-[#383838]'
                    >
                        <option value="">Select Tag</option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                    </select>
            <textarea
                id="description"
                name="description"
                placeholder='Description'
                className='flex border rounded-[20px] ml-0 w-full border-[#1E1E1E] text-[#1E1E1E] p-8 dark:text-white dark:border-[#383838] bg-transparent transition-all'
                rows={14}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <div className='flex flex-col justify-between gap-4'>
                <div className='flex flex-row justify-start items-center'>
                    <button type='submit' className='py-3 px-5 rounded-[20px] bg-[#F04D23] font-black text-white'>Add Note</button>
                    <button type='button' className='py-3 px-5 ml-4 border rounded-[20px] border-[#F04D23] font-black' onClick={() => { setHeading(''); setDescription(''); handleNotesOpen(); }}>Discard</button>
                </div>
            </div>
        </form>
    );
}

export default NoteForm;
