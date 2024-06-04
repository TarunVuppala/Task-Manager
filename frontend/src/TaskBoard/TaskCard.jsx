import React, { useState } from 'react';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import CloseIcon from '@mui/icons-material/Close';

const TaskCard = ({ id, title, description, tag, date, priority, frequency, handleDelete,completed,handleToggle }) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    handleToggle(id);
  };
  return (
    <div className={`${completed ? "opacity-40" : ""} border rounded-[20px] w-full h-fit flex flex-row items-center p-2 px-5 justify-between max-md:w-full border-[#32383a] dark:text-[#D9D5D0]`}>
      <button className='flex flex-row justify-center items-center gap-5'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={`font-black capitalize form-checkbox h-5 w-5`}
        />

        <div className=''>
          <h1 className={`${completed ? 'line-through' : ''} font-black capitalize`}>{title}</h1>
          <div className='opacity-50 text-sm'>{frequency} @{date.split('-').reverse().join('/')}</div>
        </div>
      </button>

      <div className='flex flex-row gap-5 max-md:hidden'>
        <div className='w-fit h-fit px-5 border rounded-md border-[#FF9898] py-2 dark:border-[#9e1616]'>{priority}</div>
        <div className='px-5 border rounded-md border-[#00FF0A] dark:border-[#2e9232] py-2'>{tag}</div>
      </div>

      <div className='flex flex-row gap-5 justify-center items-center'>
        <button><NotificationAddIcon className='text-[#F04D23]'></NotificationAddIcon></button>
        <button onClick={() => {
          handleDelete(id)
        }}><CloseIcon className='text-[#F04D23]'></CloseIcon></button>
      </div>
    </div>
  )
}

export default TaskCard