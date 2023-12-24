import Title from '../components/Title'
import Counter from '../components/Counter'


import useCountdown from '../hooks/useCountdown'


const Countdown = () => {
  const [day, hour, minute, second] = useCountdown("jan 1, 2024 00:00:00")

  return (
    <>
      <Title title="Contagem regressiva para 2024" />
      <div className="countdown-container">
        <Counter title="dias" number={day} />
        <Counter title="horas" number={hour} />
        <Counter title="minutos" number={minute} />
        <Counter title="segundos" number={second} />
      </div>
    </>
  );
};

export default Countdown;
