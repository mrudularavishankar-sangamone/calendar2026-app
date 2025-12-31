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

  function renderEmptySpaces() {
    let items = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      items.push(<span key={i}> </span>);
    }
    return items;
  }

  function renderDates() {
    let items = [];
    for (let i = 1; i <= daysInMonth; i++) {
      items.push(
        <span key={i} className = {isCurrent(i)}> {i}{" "} </span>
      );
    }
    console.log(items);
    return items;
  }

  function previous() {
    if(currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }
  
  function next() {
    if(currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  function isCurrent(day){
    if(day === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()){
      return 'current-day';
    }
    else {
      return '';
    }
  }

  return (
    <div className = 'calendar-app'>
      <div className = 'calendar'> 
        
        <h1 className = 'heading'> Calendar {currentYear} </h1>

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
          {renderEmptySpaces()}
          {renderDates()}
        </div>

      </div>
    </div>
  );
}