import { createStore } from "redux";

// Initial State object to assign to state in create store
const initState = {
	count: 0,
};

// Global singleton that stores the state
const store = createStore((state = initState, action) => {
	// cheking for the type of the action
	return state;
});

// Actions to be defined are increment, decrement, reset

// Lets create an action increment
// store.dispatch declare the action obj to the store
store.dispatch({
	type: "INCREMENT",
});

console.log(store.getState());
