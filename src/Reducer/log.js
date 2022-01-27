export default function logger(reducer) {
  return (state, action) => {
    const prevState = state;
    const { type } = action;
    const nextState = reducer(state, action);
    console.group(type);
    console.log("PrevState", prevState);
    console.log("NextState", nextState);
    console.groupEnd();
    return nextState;
  };
}
