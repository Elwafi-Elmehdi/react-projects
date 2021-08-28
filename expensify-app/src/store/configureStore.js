import { createStore } from "redux";

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expenseReducer,
			filters: filtersReducer,
		})
	);
	return store;
};
