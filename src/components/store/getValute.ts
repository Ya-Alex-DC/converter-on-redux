import { ValuteState, ValuteAction } from "./types"


const initialState: ValuteState = {
	valute: [],
	selected: null,
	value: '',
	total: ''
}

const ADD_VALUTE = 'ADD_VALUTE'
const SELECTED_VALUTE = 'SELECTED_VALUTE'
const ON_CHANGE_VALUE = 'ON_CHANGE_VALUE'
const GET_TOTAL = 'GET_TOTAL'

export const getValute = (state = initialState, action: ValuteAction): ValuteState => {
	switch (action.type) {

		case ADD_VALUTE:
			return { ...state, valute: action.payload }

		case SELECTED_VALUTE:
			return { ...state, selected: action.payload }

		case ON_CHANGE_VALUE:
			return { ...state, value: action.payload }

		case GET_TOTAL:
			return { ...state, total: action.payload }
		default:
			return state
	}
}