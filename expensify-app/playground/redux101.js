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
			break;
		case "DECREMENT":
			return { count: state.count - 1 };
		default:
			return state;
			break;
	}
});

console.log(store.getState());

// Actions to be defined are increment, decrement, reset

// Lets create an action increment
// store.dispatch declare the action obj to the store
store.dispatch({
	type: "DECREMENT",
});

console.log(store.getState());
