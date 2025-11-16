import classes from 'classnames';
import { useSelector  } from "react-redux";
import { setCurrency, setPrice, setActiveSide } from './store/action';
import React, { useCallback, useEffect } from 'react';
import { RootState } from './store';
import { useAppDispatch, useAppSelector } from './store/hooks';

const defaultCurremcies = ['RUB', 'USD', 'EUR', 'BHD']


export const Converter2: React.FC = () => {
	const { currency, price, activeSide } = useSelector((s: RootState) => s.calculate);
	const valute = useAppSelector(s => s.Valute.valute);
	const dispatch = useAppDispatch();


	const getRate = useCallback((code: string) => {
		if (code === 'RUB') return 1;
		const item = valute.find((v) => v.CharCode === code);
		return item ? item.Value : 1;
	}, [valute]);

	const convert = useCallback((amount: number, from: string, to: string) => {
		return (amount * getRate(from)) / getRate(to);
	}, [getRate]);

	useEffect(() => {
		if (!valute.length) return;

		const fromVal = price.from;
		const toVal = price.to;

		if (fromVal === '' && toVal === '') return;

		if (activeSide === 'from') {
			if (fromVal === '') {
				if (toVal !== '') dispatch(setPrice({ to: '' }));
				return;
			}

			const converted = convert(Number(fromVal), currency.from, currency.to).toFixed(2);
			if (converted !== toVal) dispatch(setPrice({ to: converted }));

		} else {
			if (toVal === '') {
				if (fromVal !== '') dispatch(setPrice({ from: '' }));
				return;
			}

			const converted = convert(Number(toVal), currency.to, currency.from).toFixed(2);
			if (converted !== fromVal) dispatch(setPrice({ from: converted }));
		}

	}, [
		price.from, price.to,
		currency.from, currency.to,
		valute,
		activeSide,
		convert,
		dispatch
	]);

	return (
		<div className="converter_block">
			<h1>КОНВЕРТЕР</h1>
			<div className="block_1">
				<div className="block_2">
					<ul className="converter_list">
						{
							defaultCurremcies.map((cur) => (
								<li
									key={cur}
									className={classes('list_elem1', {
										active: currency.from === cur
									})}
									onClick={() => dispatch(setCurrency({ from: cur }))}
								>{cur}</li>
							))
						}
					</ul>
					<input className="converter_input"
						placeholder="0"
						type="number"
						value={price.from}
						onChange={(e) => {
							dispatch(setActiveSide('from'));
							dispatch(setPrice({ from: (e.target.value) }))
						}}
					></input>
				</div>

				<div className="block_2">
					<ul className="converter_list">
						{
							defaultCurremcies.map((cur) => (
								<li
									key={cur}
									className={classes('list_elem1', {
										active: currency.to === cur
									})}
									onClick={() => dispatch(setCurrency({ to: cur }))}

								>{cur}</li>
							))
						}
					</ul>

					<input
						className="converter_input"
						placeholder="0"
						type="number"
						value={price.to}
						onChange={(e) => {
							dispatch(setActiveSide('to'));
							dispatch(setPrice({ to: e.target.value }));
						}}
					></input>
				</div>
			</div>

		</div>
	)
}