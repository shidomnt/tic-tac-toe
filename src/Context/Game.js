import React, { createContext, useReducer } from "react";
import { GameReducer } from "../Reducer";

const GameContext = createContext();

const initState = {
  squares: Array(9).fill(null),
  history: [],
  isXNext: true,
  turn: 0,
  winner: null,
};

function GameProvider({ children }) {
  const GameProv = useReducer(GameReducer, initState);

  return (
    <GameContext.Provider value={GameProv}>{children}</GameContext.Provider>
  );
}

export default GameProvider;
export { GameContext };
