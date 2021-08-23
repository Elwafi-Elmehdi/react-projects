import { createStore } from "redux";

const initState = {
	count: 0,
};

const store = createStore((state = initState) => {
	return state;
});

console.log(store.getState());
