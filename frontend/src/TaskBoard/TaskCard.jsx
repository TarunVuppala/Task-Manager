import React, { useState } from 'react';
import Email from '../components/Email';
import CloseIcon from '@mui/icons-material/Close';

const TaskCard = ({formOpen, task, handleDelete, handleToggle, handleFormOpen, setTaskSelected }) => {
  const [isChecked, setIsChecked] = useState(task.completed);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    handleToggle(task._id);
  };
  return (
    <div className={`${task.completed ? "opacity-40" : ""} border rounded-[20px] w-full h-fit flex flex-row items-center p-2 px-5 justify-between max-md:w-full border-[#32383a] dark:text-[#D9D5D0]`}>
      <button className='flex flex-row justify-center items-center gap-5'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={`font-black capitalize form-checkbox h-5 w-5`}
        />

        <div className=''>
          <h1 onClick={() => {
            // if (formOpen) {
            //   setTaskSelected(task);
            // } else {
            //   setTaskSelected(task);
            //   handleFormOpen();
            // }
            setTaskSelected(task);
            handleFormOpen();
          }} className={`${task.completed ? 'line-through' : ''} font-black capitalize`}>{task.title}</h1>
          <div className='opacity-50 text-sm'>{task.frequency} @{task.date.split('T')[0].split('-').reverse().join('/')}</div>
        </div>
      </button>

      <div className='flex flex-row gap-5 max-md:hidden'>
        <div className='w-fit h-fit px-5 border rounded-md border-[#FF9898] py-2 dark:border-[#9e1616]'>{task.priority}</div>
        <div className='px-5 border rounded-md border-[#00FF0A] dark:border-[#2e9232] py-2'>{task.tag}</div>
      </div>

      <div className='flex flex-row gap-5 justify-center items-center'>
        <Email task={task} />
        <button onClick={() => {
          handleDelete(task._id)
        }}><CloseIcon className='text-[#F04D23]'></CloseIcon></button>
      </div>
    </div>
  )
}

export default TaskCard