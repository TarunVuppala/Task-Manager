import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const CalendarCard = () => {
  return (
    <div className='h-fit w-full flex flex-col justify-center items-center top-0 border-b rounded-[20px]'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
        </LocalizationProvider>
    </div>
  )
}

export default CalendarCard