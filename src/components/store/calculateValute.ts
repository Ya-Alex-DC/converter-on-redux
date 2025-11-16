import { ConverterState, ConverterAction } from "./types"

const INITIAL_STATE: ConverterState = {
	currency: { from: 'RUB', to: 'USD' },
	price: { from: '', to: '' },
	activeSide: 'from',
};

export const calculateValue = (
	state: ConverterState = INITIAL_STATE,
	action: ConverterAction): ConverterState => {
	switch (action.type) {

		case 'SET_CURRENCY':
			return {
				...state,
				currency: { ...state.currency, ...action.payload },
			};

		case 'SET_PRICE':
			return {
				...state,
				price: { ...state.price, ...action.payload },
			};

		case 'SET_ACTIVE_SIDE':
			return { ...state, activeSide: action.payload };

		default:
			return state
	}
}