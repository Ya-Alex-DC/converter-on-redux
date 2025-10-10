
const values = {
	valute: [],
	selected: null,
	value: 0,
	total: ''
}

const ADD_VALUTE = 'ADD_VALUTE'
const SELECTED_VALUTE = 'SELECTED_VALUTE'
const ON_CHANGE_VALUE = 'ON_CHANGE_VALUE'
const GET_TOTAL = 'GET_TOTAL'

export const getValute = (state = values, action) => {
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

export const addValute = (payload) => ({ type: ADD_VALUTE, payload })
export const addSelected = (payload) => ({ type: SELECTED_VALUTE, payload })
export const changeValue = (payload) => ({ type: ON_CHANGE_VALUE, payload })
export const addTotal = (payload) => ({ type: GET_TOTAL, payload })








