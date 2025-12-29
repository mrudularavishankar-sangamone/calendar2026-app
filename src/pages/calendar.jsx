import { useState } from 'react';

export default function Calendar() {
  
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

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
          <span className = 'current-day'> 1 </span>
          <span> 2 </span>
          <span> 3 </span>
          <span> 4 </span>
          <span> 5 </span>
          <span> 6 </span>
          <span> 7 </span>
          <span> 8 </span>
          <span> 9 </span>
          <span> 10 </span>
          <span> 11 </span>
          <span> 12 </span>
          <span> 13 </span>
          <span> 14 </span>
          <span> 15 </span>
          <span> 16 </span>
          <span> 17 </span>
          <span> 18 </span>
          <span> 19 </span>
          <span> 20 </span>
          <span> 21 </span>
          <span> 22 </span>
          <span> 23 </span>
          <span> 24 </span>
          <span> 25 </span>
          <span> 26 </span>
          <span> 27 </span>
          <span> 28 </span>
          <span> 29 </span>
          <span> 30 </span>
          <span> 31 </span>
        </div>

      </div>
    </div>
  );
}