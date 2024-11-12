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
