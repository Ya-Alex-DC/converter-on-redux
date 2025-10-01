
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { calculateValue } from './calculateValute';
import { getFetch } from './getFetch';
import { getValute } from './getValute';
import { thunk } from 'redux-thunk';


const rootReducer = combineReducers({
	calculate: calculateValue,
	getFetch: getFetch,
	Valute: getValute
})

export const store = createStore(rootReducer, applyMiddleware(thunk) )