import React from "react";
import Game from "./Components/Game";
import { GameProvider } from "./Context";

function App() {
  return (
    <div className="App">
      <div style={{ margin: "auto" }}>
        <GameProvider>
          <Game />
        </GameProvider>
      </div>
    </div>
  );
}

export default App;
