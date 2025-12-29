import { useState } from 'react';

export default function Calendar() {
  
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  return (
    <div className = 'calendar-app'>
      <div className = 'calendar'> 
        
        <h1 className = 'heading'> Calendar 2026 </h1>

        <div className = 'navigate'>
          <h2 className = 'month'> January, </h2>
          <h2 className = 'year'> 2026 </h2>

          <div className = 'buttons'>
            <i className = 'bx bx-chevron-left'></i>
            <i className = 'bx bx-chevron-right'></i>
          </div>
        </div>
      
        <div className = 'weekdays'>
          {daysOfWeek.map((day) => (
            <span key = {day}> {day} </span>
          ))}
        </div>

        <div className = 'days'>
          {[...Array(firstDayOfMonth).keys()].map((_, index) =>
          (<span key = {`empty-${index}`}></span>))}
          {[...Array(daysInMonth).keys()].map((day) => 
          (<span key = {day + 1}> {day + 1} </span>))}
        </div>

      </div>
    </div>
  );
}