# useReducer Expirement

## Why do we think useReducer is the root hook?

### API Surface of useReducer

<code>
const [state, dispatch] = useReducer(reducer, initialArg, init?)
</code>

### Reasoning

A Reducer is where we can house and manipulate complex state logic. The <code>React.useReducer()</code> hook should return new state each time the dispatch function is called with an <code>action.type</code>. <code>useReducer</code> recieves two arguments, the current state and the action object.

We believe that <code>useReducer</code> could be the root hook because we could store stuff outside of the react render tree and still reference it. By leveraging a reducer pattern we should be able to house the logic for the other hooks we plan to examine, utilizing <code>dispatch</code> as a replacement for React's <code>use\_</code> hook.

The action object to be passed into our dispatch function will help us pass any other data we might need for each of the other hooks making <code>useReducer</code> a likely candidate for the root hook and a good option as a starting point.

## Building useState off of useReducer

### API Surface of useState

<code>
const [state, setState] = useState(initialState)
</code>

### How to accomplish

setState is the main part of useState that would need to be considered when leveraging useReducer. With setState we will simply pass in the new state via action.payload.

## Building useEffect off of useReducer

### API Surface of useEffect

<code>
useEffect(setup, dependencies?)
</code>

### How to accomplish

Our "useEffect" logic within the reducer will need to accept a function as the "setup" parameter. The setup function could return a clean up function which, if present, would need to be called as well.

Our reducer logic will also need to determine if a dependency array exists and if there are any dependencies listed within the array (props, state, and all the variables/functions declared directly inside your component body).

If there are dependencies listed in the dependency array we will need to utilize <code>Object.is</code> to determine if there were any changes in the dependencies from the previous run of useEffect. If there was any change then we would re-run the useEffect.

If an empty array (zero dependencies) is passed as a dependency then the effect will only run after the initial render.

If there is no dependency array at all, then the effect will run after every re/render.

useEffect returns <code>undefined</code>
