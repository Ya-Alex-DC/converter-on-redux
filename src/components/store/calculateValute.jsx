
const select = {
	selectedFrom: null,
	selectedTo: null,
	valueFrom: 0,
	valueTo: 0,
}

const ADD_SELECTED_FROM = 'ADD_SELECTED_FROM'
const ADD_SELECTED_TO = 'ADD_SELECTED_TO'
const CHANGE_VALUE_FROM = 'CHANGE_VALUE_FROM'
const CHANGE_VALUE_TO = 'CHANGE_VALUE_TO'

export const calculateValue = (state = select, action) => {
	switch (action.type) {

		case ADD_SELECTED_FROM:
			return { ...state, selectedFrom: action.payload }

		case ADD_SELECTED_TO:
			return { ...state, selectedTo: action.payload }

		case CHANGE_VALUE_FROM:
			return { ...state, valueFrom: action.payload }

		case CHANGE_VALUE_TO:
			return { ...state, valueTo: action.payload }

		default:
			return state
	}
}

export const addSelectedFrom = (payload) => ({ type: ADD_SELECTED_FROM, payload })

export const addSelectedTo = (payload) => ({ type: ADD_SELECTED_TO, payload })

export const getValueFrom = (payload) => ({ type: CHANGE_VALUE_FROM, payload })
export const getValueTo = (payload) => ({ type: CHANGE_VALUE_TO, payload })