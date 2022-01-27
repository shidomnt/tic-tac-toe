import React, { useContext } from "react";
import Board from "./Board";
import History from "./History";
import { GameContext } from "../../Context";

function Game() {
  const [state] = useContext(GameContext);
  const isEmptyHistory = state.history.length === 0;

  return (
    <div>
      <div className="game-wrapper">
        <Board />
        <div>
          {state.winner ? (
            state.winner === "tail" ? (
              "Tail!"
            ) : (
              <div className="winner">
                {state.winner && `Player ${state.winner} is Winner`}
              </div>
            )
          ) : (
            <div>Next player: {state.isXNext ? "O" : "X"}</div>
          )}
          {!isEmptyHistory && <History />}
        </div>
      </div>
    </div>
  );
}

export default Game;
