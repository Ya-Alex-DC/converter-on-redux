import { Values, ValuteAction, ConverterAction, ConverterState } from "./types"

export const addValute = (payload: Values[]): ValuteAction => ({
	type: 'ADD_VALUTE',
	payload,
})

export const addSelected = (payload: Values): ValuteAction => ({
	type: 'SELECTED_VALUTE',
	payload,
})

export const changeValue = (payload: string): ValuteAction => ({
	type: 'ON_CHANGE_VALUE',
	payload,
})

export const addTotal = (payload: string): ValuteAction => ({
	type: 'GET_TOTAL',
	payload,
})

export const setCurrency = (payload: Partial<ConverterState["currency"]>): ConverterAction => ({
	type: 'SET_CURRENCY',
	payload,
});

export const setPrice = (payload: Partial<ConverterState["price"]>): ConverterAction => ({
	type: 'SET_PRICE',
	payload,
});

export const setActiveSide = (payload: ConverterState["activeSide"]): ConverterAction => ({
	type: 'SET_ACTIVE_SIDE',
	payload,
});