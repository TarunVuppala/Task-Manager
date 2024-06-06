import React, { useState, useEffect } from "react";
import { useUser } from '../context/UserContext';

function NotesPage({ setNoteSelected, handleNotesOpen, noteAddDel, setNoteAddDel }) {
    const { user } = useUser();
    const [notes, setNotes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    useEffect(() => {
        fetch(`http://localhost:5000/note/${user._id}`)
            .then(response => response.json())
            .then(data => setNotes(data.notes))
            .catch(error => console.error('Error fetching notes:', error));
    }, [noteAddDel, user]);

    const handleNoteDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/note/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const data = await response.json();
            if (data.success) {
                setNoteAddDel(noteAddDel - 1);
            } else {
                console.log(data.error);
            }
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const filteredNotes = selectedCategory === '' ? notes : notes.filter(note => note.tag === selectedCategory);

    return (
        <div className="flex flex-col w-full p-8 h-screen">
            <div className="flex flex-row items-center justify-between mb-8">
                <h1 className="font-black text-5xl">
                    Notes
                </h1>
                <select
                    id="category"
                    name="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className='border rounded dark:border-[#303030]  dark:text-[#D1CDC5] py-1 flex bg-transparent font-black'
                >
                    <option value="">All</option>
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                    <option value="home">Home</option>
                </select>
            </div>
            <div className=" w-full">
                <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 overflow-y-scroll w-full h-fit">
                    {filteredNotes.length === 0 ? "Add" : filteredNotes.map((note, index) => (
                        <div key={index} className="rounded-[20px] w-full bg-[#ececec] hover:shadow-lg transition-all hover:scale-105 p-6 dark:bg-transparent dark:border dark:border-[#464646] h-[200px]">
                            <label htmlFor={`input${index}`} className="block text-2xl font-bold text-gray-700 mb-4" onClick={() => {
                                handleNotesOpen();
                                setNoteSelected(note);
                            }}>
                                {note.heading}
                            </label>
                            <p className="text-xl mb-4">{truncateText(note.note, 30)}</p>
                            <button id={note._id} onClick={() => handleNoteDelete(note._id)} className="text-red-500">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NotesPage;
