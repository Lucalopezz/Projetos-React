import "./App.css";
import { Outlet } from "react-router-dom";

import Fogos from "./assets/fogos-art.jpg";

import { useContext } from "react";
import { CountdownContext } from "./context/CountdownContext";

function App() {
  const { event } = useContext(CountdownContext);

  let image = null;
  if (event) image = event.image;

  return (
    <div
      className="App"
      style={
        image
          ? { backgroundImage: `url(${image})` }
          : { backgroundImage: `url(${Fogos})` }
      }
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
