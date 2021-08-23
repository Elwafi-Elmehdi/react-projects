import { createStore } from "redux";

// Initial State object to assign to state in create store
const initState = {
	count: 0,
};

// Global singleton that stores the state
const store = createStore((state = initState, action) => {
	// cheking for the type of the action is INCREMENT
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };
		case "DECREMENT":
			return { count: state.count - 1 };
		case "RESET":
			return { count: 0 };
		default:
			return state;
	}
});

console.log(store.getState());

// Actions to be defined are increment, decrement, reset
// store.dispatch declare the action obj to the store

// Lets create an increment action
store.dispatch({
	type: "INCREMENT",
});

// Lets create a decrement action
store.dispatch({
	type: "DECREMENT",
});

// Lets create a reset action
store.dispatch({
	type: "RESET",
});

console.log(store.getState());
