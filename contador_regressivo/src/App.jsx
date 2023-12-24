import './App.css'
import { Outlet } from 'react-router-dom'


import Fogos from "./assets/fogos-art.jpg"


function App() {

  return (
    <div className='App' style={{backgroundImage: `url(${Fogos})`}}>
      <div className="container">
        
      <Outlet/>

      </div>
    </div>
  )
}

export default App
