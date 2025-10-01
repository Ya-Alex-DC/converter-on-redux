import classes from 'classnames'
import { useSelector, useDispatch } from "react-redux"
import { addSelectedFrom, addSelectedTo, getValueFrom, getValueTo } from './store/calculateValute'
import { useEffect } from 'react'

const defaultCurremcies = ['RUB', 'USD', 'EUR', 'BHD']


export const Converter2 = () => {
	const selectedFrom = useSelector(state => state.calculate.selectedFrom)
	const selectedTo = useSelector(state => state.calculate.selectedTo)
	const changeValueFrom = useSelector(state => state.calculate.valueFrom)
	const changeValueTo = useSelector(state => state.calculate.valueTo)
	const valute = useSelector(state => state.Valute.valute)
	const dispatch = useDispatch()


	const getRate = (code) => {
		if (code === 'RUB') return 1;
		const currency = valute.find((v) => v.CharCode === code);
		return currency ? currency.Value : 1
	};

	const convert = (amount, from, to) => {
		return (amount * getRate(from)) / getRate(to);
	};

	useEffect(() => {
		if (!valute.length) return;



		// const fromRate = getRate(selectedFrom)
		// const toRate = getRate(selectedTo)

		// const res = (changeValueFrom * fromRate) / toRate
		// dispatch(getValueTo(res.toFixed(2)))



		if (selectedFrom && selectedTo && changeValueFrom) {
			const res = convert(Number(changeValueFrom), selectedFrom, selectedTo);
			dispatch(getValueTo(Number(res.toFixed(2))));
		}
	}, [changeValueFrom, selectedFrom, selectedTo, valute, dispatch])


	return (
		<div className="converter_block">
			<h1>КОНВЕРТЕР</h1>
			<div className="block_1">
				<div className="block_2">
					<ul className="converter_list">
						{
							defaultCurremcies.map((cur) => (
								<li className={classes('list_elem1', {
									active: selectedFrom === cur
								})}
									onClick={() => dispatch(addSelectedFrom(cur))}
									key={cur}
								>{cur}</li>
							))
						}
					</ul>
					<input className="converter_input"
						placeholder={0}
						type="number"
						value={changeValueFrom}
						onChange={(e) => dispatch(getValueFrom(Number(e.target.value)))}
					></input>
				</div>

				<div className="block_2">
					<ul className="converter_list">
						{
							defaultCurremcies.map((cur) => (
								<li className={classes('list_elem1', {
									active: selectedTo === cur
								})}
									onClick={() => dispatch(addSelectedTo(cur))}
									key={cur}
								>{cur}</li>
							))
						}
					</ul>

					<input
						className="converter_input"
						placeholder={0}
						type="number"
						value={changeValueTo}
						onChange={(e) => {
							const val = Number(e.target.value);
							dispatch(getValueTo(val));
							dispatch(getValueFrom(convert(val, selectedTo, selectedFrom).toFixed(2)));
						}}
					></input>
				</div>
			</div>

		</div>
	)
}