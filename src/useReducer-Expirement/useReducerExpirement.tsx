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

// export function useEffect(setup: () => void, dependencies?: []) {
// Our "useEffect" logic within the reducer will need to accept a function as the "setup" parameter. The setup function could return a clean up function which, if present, would need to be called as well.
// Our reducer logic will also need to determine if a dependency array exists and if there are any dependencies listed within the array (props, state, and all the variables/functions declared directly inside your component body).
// If there are dependencies listed in the dependency array we will need to utilize <code>Object.is</code> to determine if there were any changes in the dependencies from the previous run of useEffect. If there was any change then we would re-run the useEffect.
// If an empty array (zero dependencies) is passed as a dependency then the effect will only run after the initial render.
// If there is no dependency array at all, then the effect will run after every re/render.
// useEffect returns <code>undefined</code>

// 🚨 multiple uses - we can't just save variables because we could use useEffect in multiple places of the code with different values
// -  maintained by hooks manager

// ❓ How do we run cleanup when a component unmounts?

// if (useEffectRunCount < 1) {
//   const returnValue = setup();

//   if (dependencies && dependencies.length > 0) {
//     // capture dependencies
//     // useEffectDependencies[...dependencies]
//   }

//   if(returnValue){
//     // save cleanup function
//   }
// } else {
//   if(dependencies && dependencies.length === 0){
//     return;
//   }
//   if(dependencies && dependencies.length > 0){
//     useEffectDependencies.forEach((dependency, i)=>{
//       if(!Object.is(dependency, dependencies[i])){
//         if(cleanupExists){
//           cleanup() with old dependencies values
//         }
//         setup() with new dependencies values
//       }
//     })
//   } else {
//     setup()
//   }

//   }

//     return;
// }

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
        return (action.payload as (prev: T) => T)(state);
      }
      return action.payload;
    default:
      return state;
  }
}
