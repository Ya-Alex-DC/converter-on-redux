
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { calculateValue } from './calculateValute';
import { getValute } from './getValute';
import { thunk, ThunkMiddleware } from 'redux-thunk';
import { AppAction } from './types';


const rootReducer = combineReducers({
	calculate: calculateValue,
	Valute: getValute
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
	rootReducer,
	undefined,
	applyMiddleware(thunk as ThunkMiddleware<RootState, AppAction>))

export type AppDispatchType = typeof store.dispatch;