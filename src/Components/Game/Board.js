import React, { useContext } from "react";
import Square from "./Square";
import { GameContext } from "../../Context";
import { GameAction } from "../../Reducer";

function Board() {
  const [state, dispatch] = useContext(GameContext);
  const { playerMove } = GameAction;

  return (
    <div className="board">
      {state.squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => dispatch(playerMove(index))}
        />
      ))}
    </div>
  );
}

export default Board;
