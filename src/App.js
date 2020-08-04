import React from 'react';
import './App.css';
import Game from './Compenents/Game/Game'
import Scoreboard from './Compenents/Scoreboard/Scoreboard'
import Team from './Compenents/Team/Team'
import bravoImage from './media/bravo.png'
import alphaImage from './media/alpha.png'

function App(props) {
  const alpha = {
      name: "Alpha",
      logoSrc: alphaImage
  }
  const bravo = {
      name: "Bravo",
      logoSrc: bravoImage
  }
  return (
      <div className="App">
          <Game
              venue="Firebase Delphi"
              alpha={alpha}
              bravo={bravo} />
          <Game
              venue="First Light"
              alpha={alpha}
              bravo={bravo} />
      </div>
  )
}

export default App;
