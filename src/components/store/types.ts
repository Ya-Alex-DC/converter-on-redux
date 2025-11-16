export interface Values {
	Value: number
	CharCode: string
	Name: string
}

export interface ValuteState {
	valute: Values[],
	selected: Values | null;
	value: string;
	total: string,
}

export interface ConverterState {
	currency: {
		from: string;
		to: string;
	};
	price: {
		from: string;
		to: string;
	};
	activeSide: 'from' | 'to';
}


export type ValuteAction =
	| { type: 'ADD_VALUTE'; payload: Values[] }
	| { type: 'SELECTED_VALUTE'; payload: Values }
	| { type: 'ON_CHANGE_VALUE'; payload: string }
	| { type: 'GET_TOTAL'; payload: string };

export type ConverterAction =
	| { type: 'SET_CURRENCY'; payload: Partial<ConverterState['currency']> }
	| { type: 'SET_PRICE'; payload: Partial<ConverterState['price']> }
	| { type: 'SET_ACTIVE_SIDE'; payload: ConverterState['activeSide'] };

export type AppAction = ValuteAction | ConverterAction;
