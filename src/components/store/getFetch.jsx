import { addValute } from "./getValute"



export const getFetch = () => {
	return function (dispatch) {
		fetch('https://www.cbr-xml-daily.ru/daily_json.js')
			.then(res => res.json())
			.then(json => {
				const valutesArray = Object.values(json.Valute)
				dispatch(addValute(valutesArray))
			})
			.catch(err => {
				console.warn(err)
				alert('Ошибка')
			})
	}
}