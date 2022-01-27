export function playerMove(squareIndex) {
  return {
    type: "MOVE",
    payload: squareIndex,
  };
}

export function pushHistory() {
  return {
    type: "PUSHHISTORY",
  };
}

export function popHistory(index) {
  return {
    type: "POPHISTORY",
    payload: index,
  };
}
