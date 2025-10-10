import { useSelector, useDispatch } from "react-redux"
import { addTotal, changeValue } from "./store/getValute"

export const ListConverter2 = () => {
	const converterList = useSelector(state => state.Valute.selected)
	const value = useSelector(state => state.Valute.value)
	const total = useSelector(state => state.Valute.total)
	const dispatch = useDispatch()

	const getTotal = (e) => {
		const inputValue = e.target.value
		const result = converterList ? inputValue * converterList.Value : null;
		const formatted = result
			? new Intl.NumberFormat('ru-RU', {
				style: 'currency',
				currency: 'RUB',
				maximumFractionDigits: 2
			}).format(result)
			: '';
		dispatch(changeValue(inputValue))
		dispatch(addTotal(formatted))
	}

	return (
		<div className="ListConverter_block">
			<h2>{converterList ? converterList.Name : 'Выберите валюту'}</h2>
			<input
				value={value}
				type="number"
				onChange={getTotal}
				placeholder="Введите сумму...."></input>
			<p className="total">ИТОГО: {total}</p>
		</div>
	)
}