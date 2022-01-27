import logger from "./log";

function reducer(state, action) {
  switch (action.type) {
    case "MOVE":
      if (!state.squares[action.payload] && !state.winner) {
        state.squares[action.payload] = state.isXNext ? "O" : "X";
        state.isXNext = !state.isXNext;
        state.history = state.history.slice(0, state.turn);
        state.history.push({ squares: [...state.squares] });
        state.turn++;
      }
      break;
    case "POPHISTORY":
      state.squares = [...state.history[action.payload].squares];
      state.isXNext = action.payload % 2 !== 0;
      state.turn = action.payload + 1;
      break;
    default:
      throw new Error("Action Invalid");
  }
  state.winner = caculatorWinner(state.squares);
  return {
    ...state,
  };
}

function caculatorWinner(squares) {
  const winnerCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winnerCases.length; i++) {
    const [a, b, c] = winnerCases[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.length === squares.filter((square) => square !== null).length) {
    return "tail";
  }
  return null;
}

export default logger(reducer);
