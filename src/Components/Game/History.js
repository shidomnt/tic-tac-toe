import React, { useContext } from "react";
import { GameContext } from "../../Context";
import { GameAction } from "../../Reducer";

function History() {
  const [state, dispatch] = useContext(GameContext);
  const { popHistory } = GameAction;

  return (
    <div style={{ minWidth: "200px" }}>
      {state.history.map((item, index) => (
        <div key={index} style={{ margin: "5px 0" }}>
          <span className={state.turn === index + 1 ? "active" : ""}>
            {index + 1}.
          </span>
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => dispatch(popHistory(index))}
          >{`Go to #${index + 1}`}</button>
        </div>
      ))}
    </div>
  );
}

export default History;
