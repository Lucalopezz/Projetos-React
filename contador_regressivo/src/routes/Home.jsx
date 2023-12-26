import "./Home.css";

import { useContext, useState } from "react";

import { CountdownContext } from "../context/CountdownContext";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [title, settitle] = useState();
  const [date, setdate] = useState();
  const [image, setimage] = useState();
  const [color, setcolor] = useState();

  const { setevent } = useContext(CountdownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventObject = {
      title,
      date,
      image,
      color,
    };
    setevent(eventObject);
    
    navigate("/countdown")
  };
  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento"
            onChange={(e) => settitle(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Data do Evento:</span>
          <input
            type="date"
            name="date"
            onChange={(e) => setdate(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder="Insira uma imagem (URL) para representar o evento"
            onChange={(e) => setimage(e.target.value)}
          />
        </label>

        <label>
          <span>Cor do tema:</span>
          <input
            type="color"
            name="color"
            onChange={(e) => setcolor(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
