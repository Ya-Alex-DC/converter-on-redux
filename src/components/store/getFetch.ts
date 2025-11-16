import { addValute } from "./action"
import { Dispatch } from "redux"
import { Values, AppAction } from "./types"

export const getFetch = () => {
	return async (dispatch: Dispatch<AppAction>) => {
		try {
			const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
			const json = await res.json();
			const valutesArray = Object.values(json.Valute) as Values[];
			dispatch(addValute(valutesArray));
		} catch (err) {
			console.warn(err);
			alert('Ошибка при загрузке курса валют');
		}
	};
};