import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import Title from '../components/Title'
import Counter from '../components/Counter'


import useCountdown from '../hooks/useCountdown'

import { CountdownContext } from "../context/CountdownContext";



const Countdown = () => {
  const { event } = useContext(CountdownContext);

  const [day, hour, minute, second] = useCountdown(event.date)

  if(!event) return <Navigate to="/" />

  const eventTitle = event.title
  const eventColor = event.color



  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="dias" number={day} eventColor={eventColor}/>
        <Counter title="horas" number={hour} eventColor={eventColor}/>
        <Counter title="minutos" number={minute} eventColor={eventColor}/>
        <Counter title="segundos" number={second} eventColor={eventColor}/>
      </div>
    </>
  );
};

export default Countdown;
