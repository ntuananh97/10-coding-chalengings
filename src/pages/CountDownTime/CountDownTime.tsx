import React, { useRef, useState, useLayoutEffect } from "react";
import "./countdown.scss";

const showKeys = ["months", "days", "hours", "minutes", "seconds"];

// Date now, starting date of next year
// time between two dates
// -> convert to goal's format
// each 1 second -> calculate again

type ShowTime = {
  [key in typeof showKeys[number]]: number
}
// interface ShowTime {
//   months: number;
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

function CountDownTime() {
  const [showTime, setShowTime] = useState<ShowTime>({})
  console.log("CountDownTime ~ showTime:", showTime)
  const startDateOfNextYearRef = useRef<Date>(new Date());

  useLayoutEffect(() => {
    calculateStartDateOfNextYear();

    const intervalTimer = setInterval(() => {
      calculateTimeUntilBeginning();
    }, 1000);

    return () => {
      if (intervalTimer) clearInterval(intervalTimer)
    }
  }, []);

  const calculateStartDateOfNextYear = () => {
    const nowDate = new Date();
    const nextYear = nowDate.getFullYear() + 1;

    // format: year, month, day, hour, minute, second
    const startDateOfNextYear = new Date(nextYear, 0, 1, 0, 0, 0);

    startDateOfNextYearRef.current = startDateOfNextYear;
  };

  const calculateTimeUntilBeginning = () => {
    const nextDate = startDateOfNextYearRef.current;
    const nowDate = new Date();

    // Calculate the difference in years, months, days, hours, minutes, and seconds
    let monthsDiff = nextDate.getMonth() - nowDate.getMonth();
    let daysDiff = nextDate.getDate() - nowDate.getDate();
    let hoursDiff = nextDate.getHours() - nowDate.getHours();
    let minutesDiff = nextDate.getMinutes() - nowDate.getMinutes();
    let secondsDiff = nextDate.getSeconds() - nowDate.getSeconds();

    // Adjust for negative values in days, hours, minutes, and seconds
    if (secondsDiff < 0) {
      minutesDiff--;
      secondsDiff += 60;
    }

    if (minutesDiff < 0) {
      hoursDiff--;
      minutesDiff += 60;
    }

    if (hoursDiff < 0) {
      daysDiff--;
      hoursDiff += 24;
    }

    if (daysDiff < 0) {
      monthsDiff--;
      // Calculate the number of days in the previous month
      const prevMonthLastDay = new Date(
        nowDate.getFullYear(),
        nowDate.getMonth(),
        0
      );
      daysDiff += prevMonthLastDay.getDate();
    }

    if (monthsDiff < 0) {
      monthsDiff += 12;
    }

    setShowTime({
      months: monthsDiff,
      days: daysDiff,
      hours: hoursDiff,
      minutes: minutesDiff,
      seconds: secondsDiff
    })
  };

  const showTimeInString = (time: number): string => {
    if (!time) return '00'

    return time >= 10 ? `${time}` : `0${time}`
  }

  return (
    <div className="countdown">
      <h1>Until new beginnings</h1>

      <ul className="countdown__list">
        {showKeys.map((unit) => (
          <li className="countdown__item">
            <p className="countdown__number">{showTimeInString(showTime[unit])}</p>
            <p className="countdown__description">{unit}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountDownTime;
