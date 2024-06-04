import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [title, setTitle] = useState('');

  const today = dayjs();

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDay = startOfMonth.day();
  const daysInMonth = endOfMonth.date();

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const handleDateClick = (date) => {
    if (date.isBefore(today, 'day')) return;
    if (selectedDate && date.isSame(selectedDate, 'day')) {
      return;
    } else {
      setSelectedDate(date);
      setFormVisible(true);
    }
  };

  const handleMonthChange = (e) => {
    const month = e.target.value;
    setCurrentDate(currentDate.month(month));
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setCurrentDate(currentDate.year(year));
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="flex items-center justify-center h-10"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = currentDate.date(i);
      const isToday = date.isSame(today, 'day');
      const isSelected = selectedDate && date.isSame(selectedDate, 'day');
      const isPast = date.isBefore(today, 'day');
      days.push(
        <div
          key={i}
          className={`flex items-center justify-center h-10 w-10 cursor-pointer ${
            isToday ? 'bg-orange-500 text-black rounded-full' : ''
          } ${
            isSelected ? 'bg-white text-black border border-black rounded-full' : ''
          } ${isPast ? 'text-gray-400' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          {i}
        </div>
      );
    }

    const totalSlots = 42;
    for (let i = days.length; i < totalSlots; i++) {
      days.push(<div key={`empty-${i}`} className="flex items-center justify-center h-10"></div>);
    }

    return days;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="w-64 mx-auto mt-10">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div className="flex items-center justify-center">
          <select
            value={currentDate.month()}
            onChange={handleMonthChange}
            className="border rounded w-24 text-center mr-2"
          >
            {monthNames.map((month, index) => (
              <option key={month} value={index} className='dark:bg-black'>
                {month}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={currentDate.year()}
            onChange={handleYearChange}
            className="border rounded w-16 text-center"
          />
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-x-4 text-center text-sm" style={{ height: 'calc(6 * 2.5rem)' }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="font-light">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
      {formVisible && (
        <div className="mt-9 p-4 border rounded relative">
          <button
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800"
            onClick={() => setFormVisible(false)}
          >
            X
          </button>
          <h2 className="mb-2">{selectedDate.format('MMMM D, YYYY')}</h2>
          <label className="block mb-2">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded w-full p-2"
            />
          </label>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
