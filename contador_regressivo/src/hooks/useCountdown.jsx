import { useState } from "react";

const useCountdown = (date) => {
  const [day, setday] = useState();
  const [hour, sethour] = useState();
  const [minute, setminute] = useState();
  const [second, setsecond] = useState();

  const countdown = () => {
    const countDate = new Date(date).getTime();
    const now = new Date().getTime();
    //console.log(countDate, now)

    const interval = countDate - now;

    //console.log(interval)

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayNumber = Math.floor(interval / day);
    const hourNumber = Math.floor((interval % day) / hour);
    const minuteNumber = Math.floor((interval % hour) / minute);
    const secondNumber = Math.floor((interval % minute) / second);

    setday(dayNumber);
    sethour(hourNumber);
    setminute(minuteNumber);
    setsecond(secondNumber);

    //console.log(dayNumber, hourNumber, minuteNumber, secondNumber);
  };

  setInterval(countdown, 1000);

  return [day, hour, minute, second];
};

export default useCountdown;
