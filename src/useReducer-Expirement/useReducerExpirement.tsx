import React from "react";

export function useState<T>(
  initialState: T
): [T, (next: T | ((prev: T) => T)) => void] {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  function setState<T>(newState: T) {
    dispatch({
      type: "update-state",
      payload: newState,
    });
  }

  return [state as T, setState];
}

function reducer<T>(
  state: T,
  action: {
    type: "update-state";
    payload: T | ((prev: T) => T);
  }
): T {
  switch (action.type) {
    case "update-state":
      if (typeof action.payload === "function") {
        return action.payload(state);
      }
      return action.payload;
    default:
      return state;
  }
}
