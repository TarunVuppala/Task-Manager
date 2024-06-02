import React, { useState } from 'react';


const TaskCard = () => {
    // State to hold the checked status of the checkbox
    const [isChecked, setIsChecked] = useState(false);

    // Handler function to update state on checkbox change
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  return (
    <div className='border rounded-[20px] w-full h-fit flex flex-row items-center p-5'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 "
        />
    </div>
  )
}

export default TaskCard