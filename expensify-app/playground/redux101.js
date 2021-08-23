import { createStore } from "redux";

// Initial State object to assign to state in create store
const initState = {
	count: 0,
};

// Global singleton that stores the state
const store = createStore((state = initState, action) => {
	const incrementBy =
		typeof action.incrementBy === "number" ? action.incrementBy : 1;
	const decrementBy =
		typeof action.decrementBy === "number" ? action.decrementBy : 1;
	// cheking for the type of the action is INCREMENT
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + incrementBy };
		case "DECREMENT":
			return { count: state.count - decrementBy };
		case "RESET":
			return { count: 0 };
		default:
			return state;
	}
});

// Actions to be defined are increment, decrement, reset (to communicate with the store)
// store.dispatch declare the action obj to the store

// Every time the state changes sub func is excutaed
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// Lets create an increment action
store.dispatch({
	type: "INCREMENT", // required
	incrementBy: 5,
});
store.dispatch({
	type: "INCREMENT",
});
// Lets create a reset action
store.dispatch({
	type: "RESET",
});
// Lets create a decrement action
store.dispatch({
	type: "DECREMENT",
	decrementBy: 10,
});
