import React, { useState } from 'react';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const TaskCard = ({id,title, description, tag, date, priority, frequency}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  return (
    <div className='border rounded-[20px] w-full h-fit flex flex-row items-center p-2 px-5 justify-between'>
        <button className='flex flex-row justify-center items-center gap-5'>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 "
          />

          <div className=''>
            <h1>{title}</h1>
            <div className='opacity-30 text-sm'>{frequency} @{date.split('-').reverse().join('/')}</div>
          </div>
        </button>

        <div className='flex flex-row gap-5'>
          <div className='px-5 border rounded-md border-[#FF9898] py-2'>{priority}</div>
          <div className='px-5 border rounded-md border-[#00FF0A] py-2'>{tag}</div>
        </div>

        <div className='flex flex-row gap-5 justify-center items-center'>
          <button><NotificationAddIcon className='text-[#F04D23]'></NotificationAddIcon></button>
          <button><DoneIcon className='text-[#F04D23]'></DoneIcon></button>
          <button><CloseIcon className='text-[#F04D23]'></CloseIcon></button>
        </div>
    </div>
  )
}

export default TaskCard