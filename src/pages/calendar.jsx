import { useState } from 'react';

export default function Calendar() {
  
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

   const monthsInYear = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const previous = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
  }
  
  const next = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear));
  }


  return (
    <div className = 'calendar-app'>
      <div className = 'calendar'> 
        
        <h1 className = 'heading'> Calendar 2026 </h1>

        <div className = 'navigate'>
          <h2 className = 'month'> {monthsInYear[currentMonth]}, </h2>
          <h2 className = 'year'> {currentYear} </h2>

          <div className = 'buttons'>
            <i className = 'bx bx-chevron-left' onClick = {previous}></i>
            <i className = 'bx bx-chevron-right' onClick = {next}></i>
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