import { createStore } from "redux";

// Initial State object to assign to state in create store
const initState = {
	count: 0,
};

// Lets create Action generator (function that returnes an action)

// IncrementBy x
const incrementBy = ({ incrementBy = 1 } = {}) => ({
	type: "INCREMENT", // required
	incrementBy,
});

// DecrementBy x
const decrementBy = ({ decrementBy = 1 } = {}) => ({
	type: "DECREMENT",
	decrementBy,
});

// Reset Counter
const reset = () => ({
	type: "RESET",
});

// Global singleton that stores the state
const store = createStore((state = initState, action) => {
	// cheking for the type of the action is INCREMENT
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + action.incrementBy };
		case "DECREMENT":
			return { count: state.count - action.decrementBy };
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
store.dispatch(
	incrementBy({
		incrementBy: 5,
	})
);
store.dispatch(incrementBy());
// Lets create a reset action
store.dispatch(reset());
// Lets create a decrement action
store.dispatch(
	decrementBy({
		decrementBy: 10,
	})
);
